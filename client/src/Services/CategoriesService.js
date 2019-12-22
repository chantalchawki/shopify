import axios from "axios";
let axiosDefaults = require("axios/lib/defaults");
axiosDefaults.baseURL = "http://localhost:62248";

function getAllCategories() {
  return axios.get("/api/CategoriesService.svc");
}

export default {
  getAllCategories
};
