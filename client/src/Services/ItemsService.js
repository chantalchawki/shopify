import axios from "axios";

function createItem(item) {
  return axios.post("http://localhost:62248/api/ItemsService.svc/", item);
}

function getAllItems() {
  return axios.get("http://localhost:62248/api/ItemsService.svc/");
}

function getItem(itemId) {
  return axios.get(`http://localhost:62248/api/ItemsService.svc/${itemId}`);
}

function deleteItem(itemId) {
  return axios.delete(`http://localhost:62248/api/ItemsService.svc/${itemId}`);
}

function UpdateItem(item) {
  return axios.patch(`http://localhost:62248/api/ItemsService.svc/${item.Id}`, item);
}

export default {
  createItem,
  getAllItems,
  getItem,
  deleteItem,
  UpdateItem
};
