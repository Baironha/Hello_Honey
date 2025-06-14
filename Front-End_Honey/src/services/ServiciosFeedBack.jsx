/* 
import Cookies from "js-cookie";

const API_URL = "http://127.0.0.1:8000/api/auth_user/";
const Token= Cookies.get("access_token")
 */


async function getUsers() {
    try {
        const response = await fetch('hhttp://127.0.0.1:8000/api/feedback_usuarios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getUsers };

//////////LLAMADO POST//////////

async function postUsers(nombre_usu,email_usu,texto,rating,fecha) {
    try {
        
        const userData = { 
            nombre_usu,
            email_usu,
            texto,
            rating,
            fecha
        };

        console.log(userData )

        const response = await fetch("http://127.0.0.1:8000/api/feedback_usuarios/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                /* 'Authorization': `Bearer ${Token}` */
            },
            body: JSON.stringify(userData)
        });

     
        const mensage = await response.json();
        console.log('Mensaje de error de BackEnd:' + mensage);
        return mensage
        

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postUsers}

//////////////LLAMADO UPDATE/////////////


async function updateUsers(nombre, email,fecha,texto,id) 
{
    try {
        
        const userData = { 
            nombre, 
            email,
            fecha,
            texto

        
        };


        


        const response = await fetch("http://127.0.0.1:8000/api/feedback_usuarios/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                /* 'Authorization': `Bearer ${Token}` */
            },
            body: JSON.stringify(userData)
        });

        
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateUsers}



//////////////LLAMADO DELETE/////////////


async function deleteUser(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/feedback_usuarios/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                /* 'Authorization': `Bearer ${Token}` */
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default { deleteUser, getUsers, postUsers, updateUsers};