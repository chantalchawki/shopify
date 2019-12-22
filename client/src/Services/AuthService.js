import axios from 'axios';
import jwt_decode from 'jwt-decode';

class AuthService {
  constructor() {
    this.user = null;
  }

  async login(user) {
    try {
      const token = (await axios.post(
        "http://localhost:62248/api/AuthenticationService.svc/login",
        user
      )).data.Result;
      localStorage.setItem("token", token);
      this.checkJWT();
      return true;
    } catch(err) {
      return false;
    }
  }

  async loginWithGoogle(googleToken) {
    try {
      const token = (await axios.post(
        `http://localhost:62248/api/AuthenticationService.svc/loginWithGoogle`,
        googleToken
      )).data.Result;
      localStorage.setItem("token", token);
      this.checkJWT();
      return true;
    } catch(err) {
      return false;
    }
  }
  
  checkJWT() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
  
    try {
      this.user = jwt_decode(token);
    } catch(err) {
      return;
    }
  }
  
  logout() {
    localStorage.removeItem("token");
    this.user = null;
  }
}

export default (new AuthService());
