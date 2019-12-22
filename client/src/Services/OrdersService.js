import axios from "axios";

function getAllOrders() {
  return axios.get("http://localhost:62248/api/OrdersService.svc/");
}

function getOrder(orderId) {
  return axios.get(`http://localhost:62248/api/OrdersService.svc/${orderId}`);
}

function createOrder(order) {
  return axios.post("http://localhost:62248/api/OrdersService.svc/", order);
}

export default {
  getAllOrders,
  getOrder,
  createOrder
};
