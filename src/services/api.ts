// src/services/api.ts

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://us-central1-house-proj-fff2a.cloudfunctions.net";

export const verifyVisitorSession = async (): Promise<void> => {
  try {
    const savedToken = localStorage.getItem("visitor_bearer_token");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (savedToken) {
      headers["Authorization"] = `Bearer ${savedToken}`;
    }

    const response = await fetch(`${API_BASE_URL}/handleVisitorSession`, {
      method: "POST",
      headers: headers,
    });

    if (response.status === 429) {
      alert("Security Alert: You reached the maximum allowance of 20 refreshes per hour!");
      return;
    }

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Visitor token verified. Remainder this hour:", data.requestsRemainingInHour);

    // Only save the token on first load if it doesn't already exist locally
    if (data.token && !localStorage.getItem("visitor_bearer_token")) {
      localStorage.setItem("visitor_bearer_token", data.token);
    }
  } catch (err) {
    console.error("Session validation rejected:", err);
  }
};
