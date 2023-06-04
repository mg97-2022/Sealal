import ShipmentCompleted from "@/components/TrackShipment/ShipmentCompleted";
import ShipmentDetails from "@/components/TrackShipment/ShipmentDetails";
import ShipmentFailed from "@/components/TrackShipment/ShipmentFailed";
import ShipmentStatuses from "@/components/TrackShipment/ShipmentStatuses";

const dummyShipmentStatus = "unable";

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
    shipmentContent = <ShipmentFailed />;
  } else if (isShipmentCompleted) {
    shipmentContent = <ShipmentCompleted />;
  }

  return (
    <main className="h-[80vh] flex items-center justify-center">
      <div className="container pt-[100px] flex flex-col items-center gap-[76px]">
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
