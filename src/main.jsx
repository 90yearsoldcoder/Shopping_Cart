import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FeaturedDataProvider } from "./cache/featuredDataProvider.jsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FeaturedDataProvider>
      <RouterProvider router={router}></RouterProvider>
    </FeaturedDataProvider>
  </React.StrictMode>
);
