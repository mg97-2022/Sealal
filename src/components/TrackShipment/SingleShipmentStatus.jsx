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
    <div className="flex flex-col items-center w-[80px] md:w-[100px] lg:w-[135px]">
      <span
        className={`w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] rounded-[50%] flex items-center justify-center mb-4 md:mb-6 lg:mb-8 ${statusBg}`}
      >
        {icon}
      </span>
      <span className={`mb-1 ${statusColor}`}>
        {unChecked ? (
          <CircleUncheckedIcon className="scale-75 md:scale-100" />
        ) : (
          <CircleCheckedIcon className="scale-75 md:scale-100" />
        )}
      </span>
      <span className={`text-xs lg:text-sm text-center first-letter:capitalize ${statusColor}`}>
        {LangUtils.FetchWord(status)}
      </span>
    </div>
  );
};

export default SingleShipmentStatus;
