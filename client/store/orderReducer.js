import TYPES from "./types";

const orderReducer = (
  state = {
    pendingOrders: [],
    activeOrders: {},
    doneOrders: [],
  },
  action
) => {
  switch (action.type) {
    case TYPES.GET_ORDERS:
      return {
        pendingOrders: action.orders
          ? action.orders.filter((order) => order.status === "pending")
          : [],
        activeOrders: action.orders
          ? action.orders.find((order) => order.status === "active")
          : [],
        doneOrders: action.orders
          ? action.orders.filter((order) => order.status === "done")
          : [],
      };
    case TYPES.SET_ORDER:
      return {
        ...state,
        activeOrders: action.order
          ? action.order.length
            ? action.order.find((order) => order.status === "active")
            : action.order
          : {},
      };
    default:
      return state;
  }
};

export default orderReducer;
