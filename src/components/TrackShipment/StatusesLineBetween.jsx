const StatusesLineBetween = ({ isActive, isShipmentCompleted, left }) => {
  let statusColor = "greyColor";
  if (isActive) {
    statusColor = "secondary";
  } else if (isShipmentCompleted) {
    statusColor = "primary";
  }
  return (
    <span
      className={`h-[2px] w-[100px] md:w-[114px] lg:w-[148px] bg-${statusColor} absolute bottom-12 lg:bottom-9 ${left}`}
    />
  );
};

export default StatusesLineBetween;
