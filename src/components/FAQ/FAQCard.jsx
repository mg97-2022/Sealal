import LangUtils from "@/utils/language";

const FAQCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#FCFCFC] pt-2 pb-5 pl-[13px] pr-5 flex gap-2">
      <div>
        <span className="bg-[#F4F4F4] flex justify-center items-center w-[35px] h-[35px] rounded-[50%]">
          {icon}
        </span>
      </div>
      <div className="mt-2">
        <h4 className="text-sm font-medium text-primaryMedium first-letter:capitalize mb-[10px]">
          {LangUtils.FetchWord(title)}
        </h4>
        <p className="text-xs text-[#363636] leading-[17px]">
          {LangUtils.FetchWord(description)}
        </p>
      </div>
    </div>
  );
};

export default FAQCard;
