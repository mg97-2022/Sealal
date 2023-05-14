const Overlay = ({ width, height, overlayColor }) => {
  return (
    <div
      className={`absolute z-10 top-0 left-0 ${width ? width : "w-[100%]"} ${
        height ? height : "h-[100%]"
      } ${overlayColor ? overlayColor : ""}`} // here overlayColor
    />
  );
};

export default Overlay;
