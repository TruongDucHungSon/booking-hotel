/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useRoomData = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ['room'], // Query key as an object with 'queryKey' property
    queryFn: async () => {
      const response = publicRequest.request({
        method: 'GET',
        url: API_ENDPOINT.GET_ROOM,
      });

      return response || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
