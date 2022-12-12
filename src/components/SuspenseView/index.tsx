export const SuspenseView = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from(Array(10).keys()).map((val: number) => (
        <div
          key={val}
          className="animate-pulse pb-14 rounded-lg w-full max-w-screen-lg p-3 h-60 overflow-hidden bg-gray"
        />
      ))}
    </section>
  );
};
