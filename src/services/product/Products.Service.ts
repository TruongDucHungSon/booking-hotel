/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useProductData = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['product'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      return publicRequest.request({
        method: 'GET',
        url: API_ENDPOINT.GET_PRODUCTS,
      });
    },
    staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    refetchOnWindowFocus: false, // Prevent refetching when the window is refocused
    refetchOnReconnect: false,
  });
};
