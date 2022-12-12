import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { Threads } from '@/types';
import { useGetThreadsQuery } from '@/slices/apiSlice';

export const useGetThreadsReactQuery = () => {
  const [threads, setThreads] = useState<Threads | null>(null);
  const [error, setError] = useState<boolean>(false);

  const { isLoading, data } = useQuery('uriData', () =>
    fetch('/api/get-threads').then((res) => res.json())
  );

  useEffect(() => {
    if (!isLoading) {
      data?.data ? setThreads(data.data.threads) : setError(true);
    }
  }, [data, isLoading]);

  return { threads, isLoading, error };
};

export const useGetThreadsReduxToolkit = () => {
  const { data, isLoading } = useGetThreadsQuery('getThreads');

  const [threads, setThreads] = useState<Threads | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      data?.data ? setThreads(data.data.threads) : setError(true);
    }
  }, [data, isLoading]);

  return { threads, isLoading, error };
};
