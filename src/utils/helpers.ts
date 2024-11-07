/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ArgumentArray) {
  return twMerge(classNames(inputs));
}

export const saveLocalStorageBookingData = (data: any) => {
  localStorage.setItem('bookingData', JSON.stringify(data));
};

export const getLocalStorageBookingData = () => {
  const storedData = localStorage.getItem('bookingData');
  return storedData ? JSON.parse(storedData) : null;
};

export const clearLocalStorageBookingData = () => {
  localStorage.removeItem('bookingData');
};

export const formatDateString = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits for day
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based, so add 1)
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
