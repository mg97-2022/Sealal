import { useState } from "react";
import DeliveryRequests from "@/components/DeliveryProfile/DeliveryRequests";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import ProfileLayout from "@/components/ProfileLayout";
import deliveryRequestsSections from "@/utils/deliveryRequestsSections";

const deliveryProfileSections = {
  PROFILE_INFO: "PROFILE_INFO",
  DELIVERY_REQUESTS: "DELIVERY_REQUESTS",
};

const menuList = [
  {
    id: deliveryProfileSections.PROFILE_INFO,
    title: "profileInfo",
  },
  {
    id: deliveryProfileSections.DELIVERY_REQUESTS,
    title: "deliveryRequests",
  },
];

const DeliveryProfile = () => {
  const [activeSection, setActiveSection] = useState(
    deliveryProfileSections.PROFILE_INFO
  );
  const [activeDeliveryRequestsSection, setActiveDeliveryRequestsSection] =
    useState(deliveryRequestsSections.REQUESTS_LIST);
  const [orderId, setOrderId] = useState(null);

  const changeOrderIdHandler = (id) => {
    setActiveDeliveryRequestsSection(deliveryRequestsSections.OTP);
    setOrderId(id);
  };

  const changeActiveSectionHandler = (section) => {
    if (section === deliveryProfileSections.DELIVERY_REQUESTS) {
      setActiveDeliveryRequestsSection(deliveryRequestsSections.REQUESTS_LIST);
      setOrderId(null);
    }
    setActiveSection(section);
  };

  const content = () => {
    switch (activeSection) {
      case deliveryProfileSections.PROFILE_INFO:
        return <ProfileInfo />;
      case deliveryProfileSections.DELIVERY_REQUESTS:
        return (
          <DeliveryRequests
            activeSection={activeDeliveryRequestsSection}
            onChangeOrderId={changeOrderIdHandler}
            orderId={orderId}
          />
        );
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

export default DeliveryProfile;
