/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useRoomsData = (locationId: number): UseQueryResult<any[], Error> => {
  return useQuery<any[], Error>({
    queryKey: ['rooms', { location_id: locationId }],
    queryFn: async () => {
      const response = await publicRequest.get(API_ENDPOINT.GET_ROOM, {
        params: { location_id: locationId },
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};
