import axios from "axios";

function register(user) {
  return axios.post("http://localhost:62248/api/UsersService.svc/", { user });
}

function login(user) {
  return axios.post(
    "http://localhost:62248/api/AuthenticationService.svc/login",
    {
      user
    }
  );
}

function getUser(userId) {
  return axios.get(`http://localhost:62248/api/UsersService.svc/${userId}`);
}
export default {
  register,
  login,
  getUser
};
