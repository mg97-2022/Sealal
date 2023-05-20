import SectionHeading from "./SectionHeading";

const ProfileInfoCode = ({ code }) => {
  return (
    <div className="flex items-center gap-9 bg-[#F7F7F7] pl-[23px] py-6">
      <SectionHeading heading="profileCode" />
      <span className="h-[60px] flex items-center justify-center text-primaryLight py-5 px-[30px] bg-white border border-[#D5D5D5] rounded-[10px]">
        {code}
      </span>
    </div>
  );
};

export default ProfileInfoCode;
