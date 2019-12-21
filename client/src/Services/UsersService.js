import axios from "axios";

function register(user) {
  return axios.post("http://localhost:62248/api/UsersService.svc/", user);
}

function getUser(userId) {
  return axios.get(`http://localhost:62248/api/UsersService.svc/${userId}`);
}

function UpdateUser(user) {
  return axios.patch(`http://localhost:62248/api/UsersService.svc/${user.Id}`, user);
}
export default {
  register,
  getUser,
  UpdateUser
};
