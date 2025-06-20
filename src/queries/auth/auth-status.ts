export async function authStatus() {
  try {
    const res = await fetch('http://localhost:8080/auth/status', {
      method: 'GET',
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error('Network error!');
    }

    const data = await res.json();

    if (data.authenticated) {
      console.log('User is authenticated as:', data.username);
      return {
        authenticated: true,
        username: data.username,
      };
    } else {
      console.log('User is not authenticated');
      return {
        authenticated: false,
        username: null,
      };
    }
  } catch (error) {
    console.error('Auth check failed:', error);
    return {
      authenticated: false,
      username: null,
    };
  }
}