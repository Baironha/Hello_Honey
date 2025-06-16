



import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access_token");
    navigate("/Login"); // Redirigir después de eliminar el token
  };

  return <button onClick={handleLogout}>Cerrar Sesión</button>;
};

export default Logout;
