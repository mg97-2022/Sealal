import Orders from "@/components/Orders/Orders";
import ProfileFinancialSettlement from "@/components/ProfileFinancialSettlement";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import ProfileLayout from "@/components/ProfileLayout";
import { useState } from "react";

const sections = {
  PROFILE_INFO: "PROFILE_INFO",
  FINANCIAL: "FINANCIAL",
  ORDERS: "ORDERS",
  // NEW_SHIPMENTS: "NEW_SHIPMENTS",
};

const menuList = [
  {
    id: sections.PROFILE_INFO,
    title: "profileInfo",
  },
  {
    id: sections.FINANCIAL,
    title: "financialSettlement",
  },
  {
    id: sections.ORDERS,
    title: "myOrders",
  },
  // {
  //   id: sections.NEW_SHIPMENTS,
  //   title: "newShipments",
  // },
];

const Profile = () => {
  const [activeSection, setActiveSection] = useState(sections.PROFILE_INFO);

  const changeActiveSectionHandler = (section) => setActiveSection(section);

  const content = () => {
    switch (activeSection) {
      case sections.PROFILE_INFO:
        return <ProfileInfo />;
      case sections.FINANCIAL:
        return <ProfileFinancialSettlement />;
      case sections.ORDERS:
        return <Orders />;
      // case sections.NEW_SHIPMENTS:
      //   return < />;
    }
  };

  return (
    <ProfileLayout
      menuList={menuList}
      activeSection={activeSection}
      onChangeActiveSection={changeActiveSectionHandler}
    >
      {content()}
    </ProfileLayout>
  );
};

export default Profile;
