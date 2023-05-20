import ShipmentDetailsItem from "./ShipmentDetailsItem";

const ShipmentDetails = ({ details }) => {
  return (
    <div className="py-[22px] px-[60px] bg-[#FCFCFC]">
      <div className="flex items-center justify-between w-[900px]">
        <ShipmentDetailsItem title="orderDate" data="23 september 20222" />
        <ShipmentDetailsItem
          title="orderSummary"
          data="2 products,2 deliveries"
        />
        <ShipmentDetailsItem title="buyer" data="Buyer Name" />
        <ShipmentDetailsItem title="amountTotal" data="1256$" />
      </div>
    </div>
  );
};

export default ShipmentDetails;
