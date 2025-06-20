export async function getPolls() {
    try {
        const response = await fetch('http://localhost:8080/api/polls', {
            method: 'GET',
            credentials: 'include'
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed: ${response.status} - ${errorText}`)
        }

        const data = await response.json();
        console.log('Success: ', data)
        return data
    } catch (err) {
        console.error("Error logging user:", err)
    }    
}
