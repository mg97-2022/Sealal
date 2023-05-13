const Overlay = ({ width, height }) => {
  return (
    <div
      className={`absolute z-10 top-0 left-0 w-[${width || "100vw"}] h-[${
        height || "100vh"
      }] bg-secondaryOverlay`}
    />
  );
};

export default Overlay;
