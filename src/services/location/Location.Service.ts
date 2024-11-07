/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiRead } from '@/config/HandleApi.Service'; // Make sure this is the correct path to your API utility
import { useQuery } from '@tanstack/react-query';
import { ROUTER_API } from '../../utils/endpoint';

// Fetch function for location data using apiRead
const fetchLocationData = async (): Promise<any[]> => {
  const response = await apiRead<any[]>(ROUTER_API.GET_LOCATION);

  // Handle error case if apiRead returns an error
  if (response.error) {
    throw new Error(response.message || 'Failed to fetch location data');
  }

  return response.data; // Return the data field from the response
};

// Custom hook for fetching location data with React Query
export const useLocationData = () =>
  useQuery<any[], Error>({
    queryKey: ['locationData'],
    queryFn: fetchLocationData,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
  });
