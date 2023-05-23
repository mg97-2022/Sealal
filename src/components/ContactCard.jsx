import LangUtils from "@/utils/language";

const ContactCard = ({ icon, title, description }) => {
  return (
    <div className="w-[270px] h-[270px] rounded-[50%] bg-greyLightThird flex flex-col items-center justify-center gap text-center">
      {icon}
      <h3 className="text-[20px] font-medium mt-3 mb-4 capitalize">
        {LangUtils.FetchWord(title)}
      </h3>
      <p className="text-greySemiDarkSecond text-lg leading-[150%] px-4">
        {LangUtils.FetchWord(description)}
      </p>
    </div>
  );
};

export default ContactCard;
