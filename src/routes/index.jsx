import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { PageLayout } from "../shared/ui/PageLayout/PageLayout";
import { Redirect } from "./Redirect";
import { meLoader } from "./lib/meLoader";
import UsersHistory from "../pages/admin/users-history/UsersHistory";

const Login = lazy(() => import("../pages/login/Login"));
const Registration = lazy(() => import("../pages/registration/Registration"));
const Calculator = lazy(() => import("../pages/calculator/Calculator"));
const History = lazy(() => import("../pages/history/History"));
const Factories = lazy(() => import("../pages/admin/factories/Factories"));
const Plants = lazy(() => import("../pages/admin/plants/Plants"));
const UserList = lazy(() => import("../pages/admin/user-list/UserList"));
const About = lazy(() => import("../pages/about/About"));
const HistoryDetails = lazy(() =>
  import("../pages/history-details/HistoryDetails")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        element: <Redirect />,
        children: [
          { path: "login", element: <Login /> },
          { path: "registration", element: <Registration /> },
        ],
      },
      // Authorized Pages
      {
        // element: <h1>Navigate</h1>,
        children: [
          {
            path: "/calculator",
            element: <Calculator />,
          },
          {
            path: "/history/",
            element: <History />,
          },
          {
            path: "/history/:id",
            element: <HistoryDetails />,
          },
          {
            path: "/users-history/",
            element: <UsersHistory />,
          },
          {
            path: "/admin/factories",
            element: <Factories />,
          },
          {
            path: "/admin/plants",
            element: <Plants />,
          },
          {
            path: "/admin/userList",
            element: <UserList />,
          },
          {
            path: "/about",
            element: <About />,
          },
        ].map((config) => ({
          ...config,
          loader: meLoader,
        })),
      },
    ],
  },
]);
