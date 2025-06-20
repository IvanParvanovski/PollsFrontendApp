async function logout() {
    try {
        const response = await fetch('http://localhost:8080/logout', {
            method: "POST",
            credentials: "include"
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed: ${response.status} - ${errorText}`)
        }

        return response
    } catch (err) {
        console.error("Error loging out")

        return err;
    }
}

export { logout }