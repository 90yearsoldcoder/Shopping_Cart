import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./cache/cartProvider";
import { MenuCacheProvider } from "./cache/menuCache.jsx";
import { DetailCacheProvider } from "./cache/detailCache.jsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuCacheProvider>
      <CartProvider>
        <DetailCacheProvider>
          <RouterProvider router={router}></RouterProvider>
        </DetailCacheProvider>
      </CartProvider>
    </MenuCacheProvider>
  </React.StrictMode>
);
