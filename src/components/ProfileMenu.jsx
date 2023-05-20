import ProfileMenuItem from "./ProfileMenuItem";
import ProfileMenuUserInfo from "./ProfileMenuUserInfo";

const ProfileMenu = ({ menuList, activeSection, onChangeActiveSection }) => {
  return (
    <nav className="w-[25%] self-stretch flex flex-col">
      <ProfileMenuUserInfo userName="user name" />
      <ul className="w-full border-2 border-[#ECECEC] rounded-[2px] min-h-[534px] flex-1">
        {menuList.map((item) => (
          <ProfileMenuItem
            key={item.id}
            onClick={() => onChangeActiveSection(item.id)}
            title={item.title}
            isActive={item.id === activeSection}
          />
        ))}
      </ul>
    </nav>
  );
};

export default ProfileMenu;
