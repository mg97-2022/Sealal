import ShipmentDetailsItem from "./ShipmentDetailsItem";

const ShipmentDetails = ({ details }) => {
  return (
    <div className="py-[15px] lg:py-[22px] px-8 md:px-[45px] lg:px-[60px] bg-[#FCFCFC]">
      <div className="grid grid-cols-4 gap-y-[40px] gap-x-[40px] lg:gap-[53px]">
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
