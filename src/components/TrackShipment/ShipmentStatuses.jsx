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
        icon={<BoxTickIcon className="scale-75 md:scale-90 lg:scale-100" />}
        status="shipmentReceived"
        isActive={firstStepActive}
        isShipmentCompleted={isShipmentCompleted}
      />
      <StatusesLineBetween
        isActive={secondStepActive}
        isShipmentCompleted={isShipmentCompleted}
        left="left-[50px] md:left-[63px] lg:left-[81px]"
      />
      <SingleShipmentStatus
        icon={<TruckFastIcon className="scale-75 md:scale-90 lg:scale-100" />}
        status="onTheWay"
        isActive={secondStepActive}
        isShipmentCompleted={isShipmentCompleted}
      />
      <StatusesLineBetween
        isActive={isShippingThirdStep}
        isShipmentCompleted={isShipmentCompleted}
        left="left-[170px] md:left-[203px] lg:left-[256px]"
      />
      <SingleShipmentStatus
        icon={<TruckTickIcon className="scale-75 md:scale-90 lg:scale-100" />}
        status="delivered"
        isActive={isShippingThirdStep}
        isShipmentCompleted={isShipmentCompleted}
      />
      {!isShipmentCompleted && (
        <>
          <StatusesLineBetween left="left-[290px] md:left-[343px] lg:left-[431px]" />
          <SingleShipmentStatus
            icon={<TruckRemoveIcon className="scale-75 md:scale-90 lg:scale-100" />}
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
