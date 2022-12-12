import { capitalize, formatTextBody } from '@/helpers';
import { threadStyles } from './styles';
import { ThreadProps } from './types';

export const Thread = ({
  title,
  description,
  numOfPosts,
  currentActive,
  setActive,
}: ThreadProps) => {
  const postTitleFormatted = capitalize(title!.replaceAll('-', ' '));
  const postDescFormatted = formatTextBody(description!);
  const { base, active, neutral } = threadStyles;

  return (
    <div
      className={
        title === currentActive ? `${base} ${active}` : `${base} ${neutral}`
      }
      onClick={() => setActive(title!)}
    >
      <div className="mb-5">
        <h2 className="truncate">{postTitleFormatted}</h2>
      </div>

      <p className="line-clamp-6 max-w-3xl">{postDescFormatted}</p>
      <div className="flex items-center absolute bottom-2 right-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <p className="mr-2 font-bold text-primary">Num of Posts</p>
        <p className="bg-bg flex justify-center items-center w-9 h-9 rounded-full">
          <span className="font-semibold text-primary">{numOfPosts}</span>
        </p>
      </div>
    </div>
  );
};
