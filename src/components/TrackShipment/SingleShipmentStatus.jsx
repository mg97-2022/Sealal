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
  let statusColor = "greyColor";
  if (isActive) {
    statusColor = "secondary";
  } else if (isShipmentFailed) {
    statusColor = "redColor";
  } else if (isShipmentCompleted) {
    statusColor = "primary";
  }
  return (
    <div className="flex flex-col items-center w-[135px]">
      <span
        className={`w-[76px] h-[76px] rounded-[50%] flex items-center justify-center mb-8 bg-${statusColor}`}
      >
        {icon}
      </span>
      <span className={`mb-1 text-${statusColor}`}>
        {unChecked ? <CircleUncheckedIcon /> : <CircleCheckedIcon />}
      </span>
      <span className={`text-sm first-letter:capitalize text-${statusColor}`}>
        {LangUtils.FetchWord(status)}
      </span>
    </div>
  );
};

export default SingleShipmentStatus;
