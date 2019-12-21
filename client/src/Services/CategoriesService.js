import axios from "axios";

function getAllCategories() {
  return axios.get("http://localhost:62248/api/CategoriesService.svc");
}

export default {
  getAllCategories
};
