import LangUtils from "@/utils/language";
import ProfilePageHeader from "../ProfilePageHeader";
import SingleRequest from "./SingleRequest";

const dummyList = [
  {
    orderNumber: 123456789,
    details: "details",
    status: "pending",
  },
  {
    orderNumber: 123456789,
    details: "details",
    status: "pending",
  },
  {
    orderNumber: 123456789,
    details: "details",
    status: "pending",
  },
  {
    orderNumber: 123456789,
    details: "details",
    status: "pending",
  },
  {
    orderNumber: 123456789,
    details: "details",
    status: "pending",
  },
  {
    orderNumber: 123456789,
    details: "details",
    status: "pending",
  },
  {
    orderNumber: 123456789,
    details: "details",
    status: "pending",
  },
  {
    orderNumber: 123456789,
    details: "details",
    status: "pending",
  },
];

const tableHead = ["orderNumber", "details", "orderStatus", "sendCode"];

const DeliveryRequestsList = ({ onChangeOrderId }) => {
  return (
    <div>
      <ProfilePageHeader heading="deliveryRequests" />
      <div>
        <ul className="flex justify-between bg-lightPink py-[18px] px-3 border-b-[3px] border-b-[#a2a2a2]">
          {tableHead.map((column) => (
            <li
              key={column}
              className="text-lg capitalize text-secondary font-semibold w-[24%] text-center"
            >
              {LangUtils.FetchWord(column)}
            </li>
          ))}
        </ul>
        <ul className="list-none">
          {dummyList.map((order, idx) => {
            const { orderNumber, details, status } = order;
            return (
              <SingleRequest
                key={orderNumber}
                orderNumber={orderNumber}
                details={details}
                status={status}
                bgColor={idx % 2 ? "bg-lightPink" : "white"}
                onChangeOrderId={onChangeOrderId}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DeliveryRequestsList;
