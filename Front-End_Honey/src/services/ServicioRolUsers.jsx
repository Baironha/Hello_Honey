async function getUsers() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/UserGroup/', {
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

async function postUsers(username,email,password,rol) {
    try {
        
        const userData = { 
            username,
            password,
            email,
            rol
        };



        const response = await fetch("http://127.0.0.1:8000/api/auth_group/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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

export default {postUsers, getUsers};
