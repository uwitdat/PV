import {
  useGetThreadsReactQuery,
  useGetThreadsReduxToolkit,
} from '@/hooks/useGetThreads';
import { Thread } from '@/components/Thread';
import { SuspenseView } from '@/components/SuspenseView';
import { Error } from '@/components/Error';
import { useEffect, useState } from 'react';
import { ButtonsPanel } from './components/ButtonsPanel';
import { styles } from './styles';

const { grid: gridStyles, list } = styles;

export const Threads = () => {
  const { threads, isLoading, error } = useGetThreadsReduxToolkit();
  // const { threads, isLoading, error } = useGetThreadsReactQuery();

  const [grid, setGrid] = useState<boolean>(true);
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (threads) {
      setActive(threads[0].posts[0].semantic_url);
    }
  }, [threads]);

  const handleSetActiveThread = (title: string) => {
    if (title === active) {
      return;
    }
    setActive(title);
  };

  if (error) {
    return <Error />;
  }

  return (
    <div className="p-3">
      <div className="flex justify-between p-3 mb-8 items-center">
        <div>
          <h1>Threads: </h1>
          <p className="ml-2 font-bold">Viewing Recent Threads</p>
        </div>
        <ButtonsPanel grid={grid} setGrid={setGrid} />
      </div>

      <section className={grid ? gridStyles : list}>
        {threads?.map(({ posts }) => (
          <Thread
            key={posts[0].no}
            title={posts[0].semantic_url}
            description={posts[0].com}
            numOfPosts={posts.length}
            currentActive={active}
            setActive={handleSetActiveThread}
          />
        ))}
      </section>
      {isLoading && <SuspenseView />}
    </div>
  );
};
