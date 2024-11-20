import { publicRequest } from '@/config/HandleApi.Service';
import { API_ENDPOINT } from '@/utils/endpoint';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const usePostPayment = (id: number | null): UseMutationResult<any, Error, any> => {
  return useMutation({
    mutationFn: async (paymentData: any): Promise<any> => {
      if (!id) {
        throw new Error('Booking ID is required for payment.');
      }

      // Construct the payment request with payload data
      return await publicRequest.request({
        method: 'POST',
        url: `${API_ENDPOINT.POST_PAYMENT}/${id}/payments`,
        data: paymentData, // Sending the payment data as the request body
      });
    },
  });
};
