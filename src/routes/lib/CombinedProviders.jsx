import { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "../../store/store";

import { router } from "../index";

export function CombinedProviders() {
  return (
    // <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h1>Loading</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
    // </StrictMode>
  );
}
