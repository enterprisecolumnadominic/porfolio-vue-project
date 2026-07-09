// src/services/api.ts

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://us-central1-house-proj-fff2a.cloudfunctions.net";

export const verifyVisitorSession = async (): Promise<void> => {
  try {
    // 1. Retrieve the token from localStorage if it exists
    const savedToken = localStorage.getItem("visitor_bearer_token");

    // 2. Prepare request headers
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // 3. Attach the token using the textbook Bearer format if available
    if (savedToken) {
      headers["Authorization"] = `Bearer ${savedToken}`;
    }

    const response = await fetch(`${API_BASE_URL}/handleVisitorSession`, {
      method: "POST",
      // REMOVED: credentials: "include" is no longer needed since we are not using cookies!
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Visitor profile confirmed statelessly:", data);

    // 4. Save the returned token back to localStorage for the next refresh
    if (data.token) {
      localStorage.setItem("visitor_bearer_token", data.token);
    }
  } catch (err) {
    console.error("Session validation rejected:", err);
  }
};
