// src/react-query/ReactQueryProvider.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

interface IPropsQuery {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: IPropsQuery) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
