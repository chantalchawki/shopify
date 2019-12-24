import axios from "axios";

function getAllCategories() {
  return axios.get("/api/CategoriesService.svc/");
}

export default {
  getAllCategories
};
