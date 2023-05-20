import ProfileIcon from "./icons/ProfileIcon";

const ProfileMenuUserInfo = ({ userName }) => {
  return (
    <div className="bg-secondary w-full pl-4 py-[19px] text-white">
      <div className="flex">
        <ProfileIcon />
        <span className="inline-block text-[15px] font-semibold pl-2">{`Hello, ${userName}`}</span>
      </div>
    </div>
  );
};

export default ProfileMenuUserInfo;
