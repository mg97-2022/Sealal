import ShipmentCompleted from "@/components/TrackShipment/ShipmentCompleted";
import ShipmentDetails from "@/components/TrackShipment/ShipmentDetails";
import ShipmentStatuses from "@/components/TrackShipment/ShipmentStatuses";

const dummyShipmentStatus = "delivered";

const TrackShipment = () => {
  const isShippingFirstStep = dummyShipmentStatus === "received";
  const isShippingSecondStep = dummyShipmentStatus === "onTheWay";
  const isShippingThirdStep = dummyShipmentStatus === "delivered";
  const isStillShipping =
    isShippingFirstStep || isShippingSecondStep || isShippingThirdStep;
  const isShipmentFailed = dummyShipmentStatus === "unable";
  const isShipmentCompleted = dummyShipmentStatus === "completed";

  let shipmentContent;
  if (isStillShipping) {
    shipmentContent = <ShipmentDetails />;
  } else if (isShipmentFailed) {
    shipmentContent = <shipmentFailed />;
  } else if (isShipmentCompleted) {
    shipmentContent = <ShipmentCompleted />;
  }

  return (
    <main className="h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-[76px]">
        <ShipmentStatuses
          isShippingFirstStep={isShippingFirstStep}
          isShippingSecondStep={isShippingSecondStep}
          isShippingThirdStep={isShippingThirdStep}
          isShipmentFailed={isShipmentFailed}
          isShipmentCompleted={isShipmentCompleted}
        />
        {shipmentContent}
      </div>
    </main>
  );
};

export default TrackShipment;
