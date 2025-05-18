import { createSlice } from "@reduxjs/toolkit";
import TokenStorageService from "../../../shared/lib/TokenService";
import { loginApi } from "../../LoginForm/api";

const initialState = {
  user: null,
};

const actionSetUser = (state, { payload }) => {
  state.user = {
    id: payload._id,
    username: payload.username,
    email: payload.email,
    role: payload.role,
  };
};

export const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    logOutUser() {
      TokenStorageService.clearToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        loginApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          TokenStorageService.setToken(payload.access_token);
          state.user = {
            id: payload._id,
            username: payload.username,
            email: payload.email,
            role: payload.role,
          };
        }
      )
      .addMatcher(loginApi.endpoints.login.matchRejected, () => {
        TokenStorageService.clearToken();
      })

      .addMatcher(loginApi.endpoints.authMe.matchFulfilled, actionSetUser);
  },
});

export const { logOutUser } = accountSlice.actions;
