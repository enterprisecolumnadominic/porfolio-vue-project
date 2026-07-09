// src/services/api.ts

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://us-central1-house-proj-fff2a.cloudfunctions.net";

export const verifyVisitorSession = async (): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/handleVisitorSession`, {
      method: "POST",
      credentials: "include", // Required to pass HttpOnly cookies cross-origin
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 429) {
      alert("Security Alert: You reached the maximum allowance of 100 refreshes!");
      return;
    }

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Visitor profile confirmed:", data);
  } catch (err) {
    console.error("Session validation rejected:", err);
  }
};
