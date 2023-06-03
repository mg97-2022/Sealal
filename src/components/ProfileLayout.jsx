import ProfileMenu from "./ProfileMenu";

const ProfileLayout = ({
  children,
  menuList,
  onChangeActiveSection,
  activeSection,
}) => {
  return (
    <main className="container pt-[170px] pb-24 flex flex-col md:flex-row gap-[21px]">
      <ProfileMenu
        menuList={menuList}
        activeSection={activeSection}
        onChangeActiveSection={onChangeActiveSection}
      />
      <div className="w-[100%] md:w-[75%]">{children}</div>
    </main>
  );
};

export default ProfileLayout;
