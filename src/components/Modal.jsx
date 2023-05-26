import { Fragment, useEffect } from "react";

const Modal = ({ children, onClose, disableScroll = true }) => {
  useEffect(() => {
    if (disableScroll) {
      document.documentElement.style.setProperty("overflow", "hidden");
      return () => {
        document.documentElement.style.removeProperty("overflow");
      };
    }
  }, [disableScroll]);

  return (
    <Fragment>
      <div
        className="fixed w-[100vw] h-[100vh] top-0 left-0 bg-[#000000bf] z-[990]"
        onClick={onClose}
      />
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-5 rounded-[10px] box-shadow bg-white w-[700px] lg:w-[900px] h-[250px] lg:h-[340px] max-w-[90%] flex items-center justify-center z-[999]">
        {children}
      </div>
    </Fragment>
  );
};

export default Modal;
