class TokenStorageService {
  constructor() {
    this.storageKeys = {
      access: "access_token",
    };
  }

  getToken() {
    return localStorage.getItem(this.storageKeys.access) || "";
  }

  setToken(access) {
    localStorage.setItem(this.storageKeys.access, access);
  }

  clearToken() {
    localStorage.removeItem(this.storageKeys.access);
  }
}

export default new TokenStorageService();
