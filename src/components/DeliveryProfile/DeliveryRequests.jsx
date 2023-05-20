import DeliveryRequestsList from "./DeliveryRequestsList";
import DeliveryCodeVerification from "./DeliveryCodeVerification";
import deliveryRequestsSections from "@/utils/deliveryRequestsSections";

const DeliveryRequests = ({ activeSection, onChangeOrderId, orderId }) => {
  const content = () => {
    switch (activeSection) {
      case deliveryRequestsSections.REQUESTS_LIST:
        return <DeliveryRequestsList onChangeOrderId={onChangeOrderId} />;
      case deliveryRequestsSections.OTP:
        return <DeliveryCodeVerification orderId={orderId} />;
    }
  };

  return <div>{content()}</div>;
};

export default DeliveryRequests;
