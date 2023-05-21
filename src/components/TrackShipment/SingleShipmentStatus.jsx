import LangUtils from "@/utils/language";
import CircleCheckedIcon from "../icons/CircleCheckedIcon";
import CircleUncheckedIcon from "../icons/CircleUncheckedIcon";

const SingleShipmentStatus = ({
  icon,
  status,
  unChecked,
  isActive,
  isShipmentFailed,
  isShipmentCompleted,
}) => {
  let statusColor = "text-greyColor";
  let statusBg = "bg-greyColor";
  if (isActive) {
    statusColor = "text-secondary";
    statusBg = "bg-secondary";
  } else if (isShipmentFailed) {
    statusColor = "text-redColor";
    statusBg = "bg-redColor";
  } else if (isShipmentCompleted) {
    statusColor = "text-primary";
    statusBg = "bg-primary";
  }
  return (
    <div className="flex flex-col items-center w-[135px]">
      <span
        className={`w-[76px] h-[76px] rounded-[50%] flex items-center justify-center mb-8 ${statusBg}`}
      >
        {icon}
      </span>
      <span className={`mb-1 ${statusColor}`}>
        {unChecked ? <CircleUncheckedIcon /> : <CircleCheckedIcon />}
      </span>
      <span className={`text-sm first-letter:capitalize ${statusColor}`}>
        {LangUtils.FetchWord(status)}
      </span>
    </div>
  );
};

export default SingleShipmentStatus;
