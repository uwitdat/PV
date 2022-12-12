import { Threads } from '@/components/Threads';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '@/slices/apiSlice';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider api={apiSlice}>
        <Threads />
      </ApiProvider>
    </QueryClientProvider>
  );
}
