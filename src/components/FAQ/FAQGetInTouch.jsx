import LangUtils from "@/utils/language";
import SquareButton from "../SquareButton";

const FAQGetInTouch = () => {
  return (
    <div className="container py-6 pl-6 rounded-[11px] bg-[#F4F4F4] flex items-center justify-between mb-[64px]">
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold first-letter:capitalize text-secondary">
          {LangUtils.FetchWord("stillHaveQ")}
        </h4>
        <p className="text-[#363636] text-sm first-letter:capitalize">
          {LangUtils.FetchWord("cantFindAns")}
        </p>
      </div>
      <SquareButton
        className="mr-[160px] px-6"
        bgColor="bg-secondary"
        onClick={() => {}}
      >
        getInTouch
      </SquareButton>
    </div>
  );
};

export default FAQGetInTouch;
