import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// import { NotFoundScreen } from "shared/ui/not-found-screen";

import { PageLayout } from "../shared/ui/PageLayout/PageLayout";
// import { authLoader } from "./authLoader";
import { Redirect } from "./Redirect";

const Login = lazy(() => import("../pages/login/Login"));
const Registration = lazy(() => import("../pages/registration/Registration"));
const Calculator = lazy(() => import("../pages/calculator/Calculator"));
const History = lazy(() => import("../pages/history/History"));
const Factories = lazy(() => import("../pages/admin/factories/Factories"));
const Plants = lazy(() => import("../pages/admin/plants/Plants"));
const Tariffs = lazy(() => import("../pages/admin/tariffs/Tariffs"));
const About = lazy(() => import("../pages/about/About"));

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
            path: "/history",
            element: <History />,
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
            path: "/admin/tariffs",
            element: <Tariffs />,
          },
          {
            path: "/about",
            element: <About />,
          },
        ].map((config) => ({
          ...config,
          //   loader: authLoader,
        })),
      },
    ],
  },
]);
