import LangUtils from "@/utils/language";

const ProfileMenuItem = ({ title, isActive, onClick }) => {
  console.log(isActive, title);
  return (
    <li
      className="flex items-center gap-[17px] py-4 border-b border-b-[#ECECEC] px-[25px] cursor-pointer"
      onClick={onClick}
    >
      <span
        className={`w-[5px] h-[5px] rounded-full  ${
          isActive ? "bg-primary" : "bg-[#ACACAC]"
        }`}
      />
      <span
        className={`text-[15px]  first-letter:capitalize  ${
          isActive
            ? "font-medium text-secondary"
            : "font-semibold text-[#2E2E2E]"
        }`}
      >
        {LangUtils.FetchWord(title)}
      </span>
    </li>
  );
};

export default ProfileMenuItem;
