import BoxTickIcon from "../icons/BoxTickIcon";
import TruckFastIcon from "../icons/TruckFastIcon";
import TruckRemoveIcon from "../icons/TruckRemoveIcon";
import TruckTickIcon from "../icons/TruckTickIcon";
import SingleShipmentStatus from "./SingleShipmentStatus";
import StatusesLineBetween from "./StatusesLineBetween";

const ShipmentStatuses = ({
  isShippingFirstStep,
  isShippingSecondStep,
  isShippingThirdStep,
  isShipmentFailed,
  isShipmentCompleted,
}) => {
  const firstStepActive =
    isShippingFirstStep || isShippingSecondStep || isShippingThirdStep;
  const secondStepActive = isShippingSecondStep || isShippingThirdStep;

  return (
    <div className="flex gap-10 relative">
      <SingleShipmentStatus
        icon={<BoxTickIcon />}
        status="shipmentReceived"
        isActive={firstStepActive}
        isShipmentCompleted={isShipmentCompleted}
      />
      <StatusesLineBetween
        isActive={secondStepActive}
        isShipmentCompleted={isShipmentCompleted}
        left="left-[81px]"
      />
      <SingleShipmentStatus
        icon={<TruckFastIcon />}
        status="onTheWay"
        isActive={secondStepActive}
        isShipmentCompleted={isShipmentCompleted}
      />
      <StatusesLineBetween
        isActive={isShippingThirdStep}
        isShipmentCompleted={isShipmentCompleted}
        left="left-[256px]"
      />
      <SingleShipmentStatus
        icon={<TruckTickIcon />}
        status="delivered"
        isActive={isShippingThirdStep}
        isShipmentCompleted={isShipmentCompleted}
      />
      {!isShipmentCompleted && (
        <>
          <StatusesLineBetween left="left-[431px]" />
          <SingleShipmentStatus
            icon={<TruckRemoveIcon />}
            status="unableToDeliver"
            isShipmentFailed={isShipmentFailed}
            unChecked
          />
        </>
      )}
    </div>
  );
};

export default ShipmentStatuses;

// SingleShipmentStatus = ({
//   icon,
//   status,
//   unChecked,
//   isStillShipping,
//   isShipmentFailed,
//   isShipmentCompleted,
