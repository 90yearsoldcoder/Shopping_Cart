import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FeaturedDataProvider } from "./cache/featuredDataProvider.jsx";
import { CartProvider } from "./cache/cartProvider";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FeaturedDataProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </FeaturedDataProvider>
  </React.StrictMode>
);
