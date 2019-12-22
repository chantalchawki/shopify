import axios from "axios";

function createItem(item) {
  return axios.post("/api/ItemsService.svc/", item);
}

function getAllItems() {
  return axios.get("/api/ItemsService.svc/");
}

function getItem(itemId) {
  return axios.get(`/api/ItemsService.svc/${itemId}`);
}

function deleteItem(itemId) {
  return axios.delete(`/api/ItemsService.svc/${itemId}`);
}

function UpdateItem(item) {
  return axios.patch(`/api/ItemsService.svc/${item.Id}`, item);
}

export default {
  createItem,
  getAllItems,
  getItem,
  deleteItem,
  UpdateItem
};
