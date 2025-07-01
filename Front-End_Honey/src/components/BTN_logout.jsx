// Logout.jsx
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../style/BTNlogout.css'

const BTN_logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("user_role");
    navigate("/"); 
  };

  return (
    <button onClick={handleLogout} className='BtnLogout'>
      Cerrar sesión
    </button>
  );
};

export default BTN_logout;
