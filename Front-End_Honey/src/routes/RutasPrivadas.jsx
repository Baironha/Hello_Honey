

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access_token");
    navigate("/Login"); 
  };

  return <button onClick={handleLogout}>NO ESTAS AUTORIZADO <br />
  INICIA SESION</button>;
};

export default Logout;





