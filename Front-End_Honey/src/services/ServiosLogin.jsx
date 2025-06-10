
async function PostApiToken(username, password) {
    try {
        const userData2 = {
                username: username,
                password: password
        };
        console.log(userData2);
        const res = await fetch("http://127.0.0.1:8000/api/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 /* "Authorization": `Bearer ${token}`  */
            },
            body: JSON.stringify(userData2),
        });
        if (!res.ok) {
            const errorData = await res.json();
            console.error("Backend error:", errorData);  // <-- esto ayuda muchísimo
            throw new Error("Error posting user");
        }
        const result = await res.json();
        console.log("respuestas:", result);

        return result;
        
        } catch (error) {
        console.error("Error:", error.message);
        }
}

export default {PostApiToken};






