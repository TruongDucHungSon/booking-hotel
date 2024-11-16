/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useArticlesData = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['article'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      return publicRequest.request({
        method: 'GET',
        url: API_ENDPOINT.GET_ARTICLES,
      });
    },
    staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    refetchOnWindowFocus: false, // Prevent refetching when the window is refocused
    refetchOnReconnect: false,
  });
};
export const useArticleDetailData = (id: any): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['article-detail'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      return publicRequest.request({
        method: 'GET',
        url: `${API_ENDPOINT.GET_ARTICLES}/${id}`,
      });
    },
    staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    refetchOnWindowFocus: false, // Prevent refetching when the window is refocused
    refetchOnReconnect: false,
  });
};
