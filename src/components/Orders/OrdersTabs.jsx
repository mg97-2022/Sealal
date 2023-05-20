import LangUtils from "@/utils/language";

const OrdersTabs = ({
  ordersStatuses,
  activeOrdersStatus,
  onChangeActiveOrdersStatus,
}) => {
  return (
    <div>
      <ul className="flex justify-between bg-lightPink py-[18px] px-8">
        {ordersStatuses.map((status) => (
          <li
            key={status.id}
            onClick={() => onChangeActiveOrdersStatus(status.id)}
            className="text-lg first-letter:capitalize text-[#A2A2A2] font-semibold text-center"
          >
            {LangUtils.FetchWord(status.status)}
          </li>
        ))}
      </ul>
      <div className="orders-statuses-bar">
        <span className={`active-orders-status ${activeOrdersStatus}`} />
      </div>
    </div>
  );
};

export default OrdersTabs;
