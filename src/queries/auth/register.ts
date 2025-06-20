
export async function registerNewUser(username: string, password: string) {
  try {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Success:", data);    
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
  }
}
