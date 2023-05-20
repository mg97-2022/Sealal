import { useState } from "react";
import ProfilePageHeader from "../ProfilePageHeader";
import OrdersTabs from "./OrdersTabs";
import OrdersTable from "./OrdersTable";

const ordersStatuses = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  RECOVERY: "RECOVERY",
};

const ORDERS_STATUSES_LIST = [
  {
    id: ordersStatuses.ALL,
    status: "all",
  },
  {
    id: ordersStatuses.COMPLETED,
    status: "completed",
  },
  {
    id: ordersStatuses.PENDING,
    status: "pending",
  },
  {
    id: ordersStatuses.CANCELLED,
    status: "cancelled",
  },
  {
    id: ordersStatuses.RECOVERY,
    status: "recovery",
  },
];

const Orders = () => {
  const [activeOrdersStatus, setActiveOrdersStatus] = useState(
    ordersStatuses.ALL
  );

  const changeActiveOrdersStatusHandler = (status) =>
    setActiveOrdersStatus(status);

  return (
    <div>
      <ProfilePageHeader heading="myOrders" />
      <div>
        <OrdersTabs
          ordersStatuses={ORDERS_STATUSES_LIST}
          activeOrdersStatus={activeOrdersStatus}
          onChangeActiveOrdersStatus={changeActiveOrdersStatusHandler}
        />
        <OrdersTable />
      </div>
    </div>
  );
};

export default Orders;
