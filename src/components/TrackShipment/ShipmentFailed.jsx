import LangUtils from "@/utils/language";
import SquareButton from "../SquareButton";

const ShipmentFailed = () => {
  return (
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
          onClick={() => {}}
          className="h-[60px] w-[302px] border border-primary"
          bgColor="transparent"
          textColor="text-primary"
        >
          refundToSeller
        </SquareButton>
      </div>
    </div>
  );
};

export default ShipmentFailed;
