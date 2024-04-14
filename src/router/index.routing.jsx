import { Navigate, createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../layouts/Login";
import Menu from "../pages/Menu/Menu";
import Pedidos from "../pages/Pedidos/Pedidos";
import Pagos from "../pages/Pagos/Pagos";
import Informes from "../pages/Informes/Informes";
import Mesas from "../pages/Mesas/Mesas";
import PedidosEnMesa from "../pages/PedidosEnMesa/PedidosEnMesa";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoutes />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes />,

    children: [
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "mesas",
        element: <Mesas />,
      },
      {
        path: "informes",
        element: <Informes />,
      },
      {
        path: "pedidos",

        element: <Pedidos />,
      },
      {
        path: "pagos",
        element: <Pagos />,
      },
      {
        path: "pedidos-en-mesa",
        element: <PedidosEnMesa />,
      },

      { path: "/", element: <Navigate to="/menu" /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);
