import axios from "axios";

function getAllOrders() {
  return axios.get("/api/OrdersService.svc/");
}

function getOrder(orderId) {
  return axios.get(`/api/OrdersService.svc/${orderId}`);
}

function createOrder(order) {
  return axios.post("/api/OrdersService.svc/", order);
}

export default {
  getAllOrders,
  getOrder,
  createOrder
};
