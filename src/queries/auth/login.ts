async function login(username: string, password: string) {
    try { 
        const response = await fetch('http://localhost:8080/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}),
            credentials: "include" 
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed: ${response.status} - ${errorText}`)
        }

        const data = await response.json();
        console.log('Success: ', data);
    } catch (err) {
        console.error("Error logging user:", err);
    }
}

export { login }