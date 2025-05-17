import { redirect } from "react-router-dom";
import TokenStorageService from "../../shared/lib/TokenService";

import { store } from "../../store/store";
import { loginApi } from "../../feature/LoginForm/api";

export async function meLoader() {
  try {
    if(TokenStorageService.getToken()){
      await store.dispatch(loginApi.endpoints.authMe.initiate());
    }

    return null;
  } catch (e) {
    console.log(e);
    TokenStorageService.clearToken();
    return redirect("auth");
  }
}
