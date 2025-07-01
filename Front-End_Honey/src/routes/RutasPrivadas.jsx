// PrivateRoutes.jsx
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoutes = ({ children }) => {
  const token = Cookies.get("access_token");
  const rol = Cookies.get("user_role");

  if (!token) return <Navigate to="/Login" />;

  if (rol === "admins") {
    return children; 
  } else if (rol === "empleado") {
    return <Navigate to="/empleados" />;
  } else if (rol === "usuario") {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/Login" />;
  }
};

export default PrivateRoutes;
