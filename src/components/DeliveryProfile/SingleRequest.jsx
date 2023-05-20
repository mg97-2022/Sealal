import LangUtils from "@/utils/language";

const dataWrapper = (data) => (
  <span className="first-letter:capitalize text-sm font-semibold text-primary inline-block w-[24%] text-center">
    {data}
  </span>
);

const SingleRequest = ({
  orderNumber,
  details,
  status,
  bgColor,
  onChangeOrderId,
}) => {
  return (
    <li
      className={`flex justify-between items-center px-3 w-full h-[62px] ${bgColor}`}
    >
      {dataWrapper(orderNumber)}
      {dataWrapper(details)}
      {dataWrapper(status)}
      <button
        type="button"
        onClick={() => onChangeOrderId(orderNumber)}
        className="text-white bg-secondary text-sm font-medium py-[10px] px-4 rounded-full"
      >
        {LangUtils.FetchWord("sendVerificationCode")}
      </button>
    </li>
  );
};

export default SingleRequest;
