import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./cache/cartProvider";
import { MenuCacheProvider } from "./cache/menuCache.jsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuCacheProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </MenuCacheProvider>
  </React.StrictMode>
);
