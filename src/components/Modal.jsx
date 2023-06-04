import { Fragment, useEffect } from "react";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed w-[100vw] h-[100vh] top-0 left-0 bg-[#000000bf] z-[990]"
        onClick={onClose}
      />
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="fixed px-5 rounded-[10px] box-shadow bg-white w-[700px] lg:w-[900px] h-[250px] lg:h-[340px] max-w-[90%] flex items-center justify-center z-[999]"
      >
        {children}
      </motion.div>
    </Fragment>
  );
};

export default Modal;
