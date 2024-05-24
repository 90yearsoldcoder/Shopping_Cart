import App from "./App";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Menu from "./pages/menu";
import Detail from "./pages/detail";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "cart", element: <Cart /> },
      { path: "detail/:id", element: <Detail /> },
    ],
  },
];

export default routes;
