/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useServiceData = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['services'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      const response = publicRequest.request({
        method: 'GET',
        url: API_ENDPOINT.GET_SERVICE,
      });

      return response || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useSubServiceData = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['sub-service'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      const response = publicRequest.request({
        method: 'GET',
        url: API_ENDPOINT.GET_SUB_SERVICE,
      });

      return response || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
export const useBedData = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['beds'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      const response = publicRequest.request({
        method: 'GET',
        url: API_ENDPOINT.GET_BED,
      });

      return response || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
