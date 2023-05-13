import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="absolute t-0 l-0 w-[100%]">
      <TopHeader />
      <MainHeader />
    </header>
  );
};

export default Header;
