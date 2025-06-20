export async function createPoll(
  title: string,
  qDescription: string,
  answers: string[],
  qType: string
) {

    const qAnswers = answers.map((a) => {
        return {"description": a}
    })

  const requestBody = JSON.stringify({
    "title": title,
    "question": {
        "type": qType,
        "description": qDescription,
        "possibleAnswers": qAnswers,
    }
  });

  try {
    const response = await fetch("http://localhost:8080/api/polls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
      credentials: "include",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Success: ", data);
    return data
  } catch (err) {
    console.error("Error logging user:", err);
  }
}
