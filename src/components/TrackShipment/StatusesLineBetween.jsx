const StatusesLineBetween = ({ isActive, isShipmentCompleted, left }) => {
  let statusColor = "greyColor";
  if (isActive) {
    statusColor = "secondary";
  } else if (isShipmentCompleted) {
    statusColor = "primary";
  }
  return (
    <span
      className={`h-[2px] w-[148px] bg-${statusColor} absolute bottom-9 ${left}`}
    />
  );
};

export default StatusesLineBetween;
