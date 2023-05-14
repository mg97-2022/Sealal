import LangUtils from "../utils/language";

const StorePudoPoints = () => {
  return (
    <div className="py-10 bg-secondary">
      <h2 className="uppercase text-[36px] font-medium text-center text-white">
        {LangUtils.FetchWord("storePudo")}
      </h2>
    </div>
  );
};

export default StorePudoPoints;
