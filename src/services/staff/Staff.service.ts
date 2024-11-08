/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useStaffData = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['staff'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      return publicRequest.request({
        method: 'GET',
        url: API_ENDPOINT.GET_STAFF,
      });
    },
  });
};
