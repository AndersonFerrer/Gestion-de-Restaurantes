import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.routing";

export default function App() {
  return <RouterProvider router={router} />;
}
