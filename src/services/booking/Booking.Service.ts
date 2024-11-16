import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const usePostBooking = (): UseMutationResult<any, Error, any> => {
  return useMutation({
    mutationFn: async (data: any): Promise<any> => {
      return await publicRequest.request({
        method: 'POST',
        url: API_ENDPOINT.POST_BOOKING,
        data,
      });
    },
  });
};
