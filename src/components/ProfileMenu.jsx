import ProfileMenuItem from "./ProfileMenuItem";
import ProfileMenuUserInfo from "./ProfileMenuUserInfo";

const ProfileMenu = ({ menuList, activeSection, onChangeActiveSection }) => {

  console.log(activeSection)
  return (
    <nav className="w-[25%]">
      <ProfileMenuUserInfo userName="user name" />
      <ul className="w-full border-2 border-[#ECECEC] rounded-[2px] min-h-[534px]">
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
