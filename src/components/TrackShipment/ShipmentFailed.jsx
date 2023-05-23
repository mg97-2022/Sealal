import LangUtils from "@/utils/language";
import SquareButton from "../SquareButton";
import { Fragment, useState } from "react";
import Modal from "../Modal";

const ShipmentFailed = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);

  const closeModalHandler = () => setOpenModal(false);

  return (
    <Fragment>
      {openModal && (
        <Modal onClose={closeModalHandler}>
          <div>
            <h6 className="mb-[70px] text-center font-semibold first-letter:capitalize text-lg text-primary">
              {LangUtils.FetchWord("refundToSeller")}
            </h6>
            <div className="flex gap-2">
              <SquareButton
                onClick={() => {}}
                className="h-[60px] w-[302px]"
                bgColor="bg-primary"
              >
                receiptInWarehouse
              </SquareButton>
              <SquareButton
                onClick={openModalHandler}
                className="h-[60px] w-[302px] border border-primary"
                bgColor="transparent"
                textColor="text-primary"
              >
                sendToSeller
              </SquareButton>
            </div>
          </div>
        </Modal>
      )}
      <div>
        <p className="text-[#2E2E2E] text-sm mb-[66px] text-center">
          {LangUtils.FetchWord("unableReason")}
        </p>
        <div className="flex items-center justify-center gap-2">
          <SquareButton
            onClick={() => {}}
            className="h-[60px] w-[302px]"
            bgColor="bg-primary"
          >
            redeliveryToSame
          </SquareButton>
          <SquareButton
            onClick={() => {}}
            className="h-[60px] w-[302px] border border-primary"
            bgColor="transparent"
            textColor="text-primary"
          >
            redeliverToAnother
          </SquareButton>
          <SquareButton
            onClick={openModalHandler}
            className="h-[60px] w-[302px] border border-primary"
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
