export const Watermark = ({ h1, h2 }) => {
  return (
    <>
      <h1 className="absolute opacity-10 text-gray-600 -right-28 -top-11 text-enormus -z-30 font-bold select-none">
        {h1}
      </h1>
      <h1 className="absolute opacity-10 text-gray-600 -left-96 -bottom-8 text-enormus -z-30 font-bold select-none">
        {h2}
      </h1>
    </>
  );
};
