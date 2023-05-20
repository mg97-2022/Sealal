const OrdersTable = ({ orders }) => {
  return (
    <ul className="list-none">
      {Array(10)
        .fill()
        .map((order, idx) => (
          <li
            key={idx}
            className={`w-full h-16 ${idx % 2 ? "bg-lightPink" : "white"}`}
          ></li>
        ))}
    </ul>
  );
};

export default OrdersTable;
