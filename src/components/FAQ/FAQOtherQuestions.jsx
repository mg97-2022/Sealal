import LangUtils from "@/utils/language";

const FAQOtherQuestions = () => {
  return (
    <div className="container mb-10">
      <h4 className="text-xl font-semibold text-primaryMedium first-letter:capitalize mb-2">
        {LangUtils.FetchWord("ifHaveQuestions")}
      </h4>
      <p className="text-sm text-[#646464] leading-[21px] pr-[150px]">
        {LangUtils.FetchWord("ifHaveQuestionsDesc")}
      </p>
    </div>
  );
};

export default FAQOtherQuestions;
