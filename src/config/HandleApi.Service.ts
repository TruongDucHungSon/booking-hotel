import { PUBLIC_ENDPOINT } from '../utils/endpoint';

export const TOKEN_STORAGE_KEY = 'access_token';
export const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token';

// Define API response type
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: boolean;
}

interface FetchOptions extends RequestInit {
  queryParams?: Record<string, string | number | boolean>;
}

interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

// API Error class
class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public responseBody: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Token storage functions
const getToken = (): string | null => localStorage.getItem(TOKEN_STORAGE_KEY);
const getRefreshToken = (): string | null => localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

const setToken = (token: string): void => localStorage.setItem(TOKEN_STORAGE_KEY, token);
const setRefreshToken = (token: string): void =>
  localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, token);

const clearTokens = (): void => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
};

// URL building utility
const buildUrl = (path: string, queryParams?: FetchOptions['queryParams']): string => {
  const url = new URL(`${PUBLIC_ENDPOINT}${path}`);
  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) =>
      url.searchParams.append(key, String(value)),
    );
  }
  return url.toString();
};

// Response handler with content type check
const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  const contentType = response.headers.get('Content-Type');
  let responseBody: T | string;

  if (contentType?.includes('application/json')) {
    responseBody = await response.json();
  } else {
    responseBody = await response.text();
  }

  if (!response.ok) {
    throw new ApiError(
      typeof responseBody === 'string' ? responseBody : JSON.stringify(responseBody),
      response.status,
      typeof responseBody === 'string' ? responseBody : JSON.stringify(responseBody),
    );
  }

  return { data: responseBody as T };
};

// Refresh token function
const refreshToken = async (): Promise<void> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error('No refresh token available');

  const response = await fetch(`${PUBLIC_ENDPOINT}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!response.ok) {
    clearTokens();
    throw new Error('Failed to refresh token');
  }

  const { access_token, refresh_token }: RefreshTokenResponse = await response.json();
  setToken(access_token);
  setRefreshToken(refresh_token);
};

// Fetch utility function with automatic token handling and refresh logic
const apiFetch = async <T>(path: string, options: FetchOptions = {}): Promise<ApiResponse<T>> => {
  const { queryParams, headers, ...rest } = options;
  const url = buildUrl(path, queryParams);
  let token = getToken();

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const response = await fetch(url, {
      ...rest,
      headers: { ...defaultHeaders, ...headers },
    });

    if (response.status === 401) {
      // If 401, try to refresh the token
      await refreshToken();
      token = getToken();
      if (token) {
        // Retry the request with the new token
        const retryResponse = await fetch(url, {
          ...rest,
          headers: { ...defaultHeaders, Authorization: `Bearer ${token}` },
        });
        return handleResponse<T>(retryResponse);
      }
    }

    return handleResponse<T>(response);
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
};

// CRUD Functions with Strict Typing
export const apiCreate = async <T, U>(path: string, data: T): Promise<ApiResponse<U>> => {
  return apiFetch<U>(path, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const apiRead = async <U>(
  path: string,
  queryParams?: FetchOptions['queryParams'],
): Promise<ApiResponse<U>> => {
  return apiFetch<U>(path, {
    method: 'GET',
    queryParams,
  });
};

export const apiUpdate = async <T, U>(path: string, data: T): Promise<ApiResponse<U>> => {
  return apiFetch<U>(path, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const apiDelete = async <U>(path: string): Promise<ApiResponse<U>> => {
  return apiFetch<U>(path, {
    method: 'DELETE',
  });
};
