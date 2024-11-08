/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useLocationData = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['locations'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      return publicRequest.request({
        method: 'GET',
        url: API_ENDPOINT.GET_LOCATION,
      });
    },
  });
};
