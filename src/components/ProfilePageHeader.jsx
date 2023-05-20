import LangUtils from "../utils/language";

const ProfilePageHeader = ({ heading }) => {
  return (
    <h2 className="text-[20px] text-primary font-semibold mb-[18px] first-letter:capitalize">
      {LangUtils.FetchWord(heading)}
    </h2>
  );
};

export default ProfilePageHeader;
