import LangUtils from "@/utils/language";

const KeenToKnow = () => {
  return (
    <div className="bg-secondary flex justify-center py-8">
      <div className="text-center text-white">
        <h3 className="text-[36px] font-semibold mb-3 uppercase tracking-[5.5px]">
          {LangUtils.FetchWord("keenToKnow")}
        </h3>
        <p className="text-lg mb-3 first-letter:capitalize">
          {LangUtils.FetchWord("aBetterWay")}
        </p>
        <button className="bg-transparent border border-white rounded-full py-4 px-20">
          {LangUtils.FetchWord("contactUs")}
        </button>
      </div>
    </div>
  );
};

export default KeenToKnow;
