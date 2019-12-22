import axios from "axios";

function register(user) {
  return axios.post("/api/UsersService.svc/", user);
}

function getUser(userId) {
  return axios.get(`/api/UsersService.svc/${userId}`);
}

function UpdateUser(user) {
  return axios.patch(`/api/UsersService.svc/${user.Id}`, user);
}
export default {
  register,
  getUser,
  UpdateUser
};
