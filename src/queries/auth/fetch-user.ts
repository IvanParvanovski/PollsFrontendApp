export async function fetchUserById(id: string) {
    let response = await fetch(`http://localhost:8080/api/user/${id}`, {
        method: "GET",
        credentials: 'include',
    });

    if (!response.ok) throw new Error("Failed to fetch user");
    let body = await response.json();
    return body.data
}
