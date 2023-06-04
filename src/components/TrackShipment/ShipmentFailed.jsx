import LangUtils from "@/utils/language";
import SquareButton from "../SquareButton";
import { Fragment, useState } from "react";
import Modal from "../Modal";
import { AnimatePresence } from "framer-motion";

const ShipmentFailed = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);

  const closeModalHandler = () => setOpenModal(false);

  return (
    <Fragment>
      <AnimatePresence initial={true} mode="wait">
        {openModal && (
          <Modal onClose={closeModalHandler}>
            <div>
              <h6 className="mb-10 md:mb-12 lg:mb-[70px] text-center font-semibold first-letter:capitalize lg:text-lg text-primary">
                {LangUtils.FetchWord("refundToSeller")}
              </h6>
              <div className="flex items-center justify-center flex-wrap gap-2">
                <SquareButton
                  onClick={() => {}}
                  bgColor="bg-primary"
                  className="h-[45px] md:h-[50px] w-[280px] lg:h-[60px] md:w-[302px]"
                >
                  receiptInWarehouse
                </SquareButton>
                <SquareButton
                  onClick={openModalHandler}
                  className="h-[45px] md:h-[50px] w-[280px] lg:h-[60px] md:w-[302px] border border-primary"
                  bgColor="transparent"
                  textColor="text-primary"
                >
                  sendToSeller
                </SquareButton>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <div>
        <p className="text-[#2E2E2E] text-sm mb-[66px] text-center">
          {LangUtils.FetchWord("unableReason")}
        </p>
        <div className="flex items-center justify-center flex-wrap gap-y-5 gap-x-2">
          <SquareButton
            onClick={() => {}}
            className="h-[45px] md:h-[50px] w-[280px] lg:h-[60px] md:w-[302px]"
            bgColor="bg-primary"
          >
            redeliveryToSame
          </SquareButton>
          <SquareButton
            onClick={() => {}}
            className="h-[45px] md:h-[50px] w-[280px] lg:h-[60px] md:w-[302px] border border-primary"
            bgColor="transparent"
            textColor="text-primary"
          >
            redeliverToAnother
          </SquareButton>
          <SquareButton
            onClick={openModalHandler}
            className="h-[45px] md:h-[50px] w-[280px] lg:h-[60px] md:w-[302px] border border-primary"
            bgColor="transparent"
            textColor="text-primary"
          >
            refundToSeller
          </SquareButton>
        </div>
      </div>
    </Fragment>
  );
};

export default ShipmentFailed;
