import { BsFillGridFill, BsList } from 'react-icons/bs';

const btnStyles = {
  active: `transition-all duration-300 shadow-lg bg-white pointer w-11 h-11 rounded-full flex justify-center items-center`,
  neutral: `transition-all duration-300 bg-gray pointer w-11 h-11 rounded-full flex justify-center items-center`,
};

interface ButtonsPanelProps {
  grid: boolean;
  setGrid: (grid: boolean) => void;
}

export const ButtonsPanel = ({ grid, setGrid }: ButtonsPanelProps) => {
  return (
    <div className="flex bg-gray rounded-full p-1">
      <button
        className={grid ? btnStyles.active : btnStyles.neutral}
        onClick={() => setGrid(true)}
      >
        <span className="text-2xl text-primary bg-transparent">
          <BsFillGridFill />
        </span>
      </button>
      <button
        className={!grid ? btnStyles.active : btnStyles.neutral}
        onClick={() => setGrid(false)}
      >
        <span className="text-2xl text-primary bg-transparent">
          <BsList />
        </span>
      </button>
    </div>
  );
};
