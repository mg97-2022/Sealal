import ProfileGeneralInfo from "./ProfileGeneralInfo";
import ProfileInfoSecurity from "./ProfileInfoSecurity";
import ProfilePageHeader from "../ProfilePageHeader";
import ProfileInfoCode from "./ProfileInfoCode";

const ProfileInfo = () => {
  return (
    <div>
      <ProfilePageHeader heading="profileInfo" />
      <div className="flex flex-col gap-[18px]">
        <ProfileGeneralInfo />
        <ProfileInfoSecurity />
        <ProfileInfoCode code="#1234597597" />
      </div>
    </div>
  );
};

export default ProfileInfo;
