import { useToken } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
export default function PublicRoutes() {
  const { token } = useToken();
  if (token) return <Navigate to="/menu" />;
  else
    return (
      <section className="w-full h-screen">
        <Outlet />
      </section>
    );
}
