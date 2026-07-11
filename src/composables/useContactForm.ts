import { ref } from "vue";
// Import your fresh modular component dependency hook
import { useRecaptcha } from "./useRecaptcha";

// 1. Define strict type interfaces for backend API response payloads
interface VisitorSessionResponse {
  token: string;
}

interface SendEmailResponse {
  message?: string;
  token: string;
}

export function useContactForm() {
  const form = ref({ name: "", email: "", message: "" });
  const isSubmitting = ref(false);
  const isModalOpen = ref(false);
  const emailError = ref("");

  const BASE_URL = "https://us-central1-house-proj-fff2a.cloudfunctions.net";
  const RECAPTCHA_SITE_KEY = "6LdcMU0tAAAAADlYXbA1nEtzwTZWIwSiTgYe8uSR";

  // Initialize your brand new clean security link layer sub-module
  const { executeVerificationToken } = useRecaptcha(RECAPTCHA_SITE_KEY);

  const getOrFetchToken = async (): Promise<string> => {
    let token = localStorage.getItem("visitor_token");
    if (!token) {
      const response = await fetch(`${BASE_URL}/handleVisitorSession`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to initialize visitor state.");

      // Explicitly typecast the JSON payload instead of leaving it as implicit 'any'
      const data = (await response.json()) as VisitorSessionResponse;
      token = data.token;
      localStorage.setItem("visitor_token", token);
    }
    return token;
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = !form.value.email
      ? "Email address is required."
      : !emailPattern.test(form.value.email)
        ? "Please enter a valid email address."
        : "";
  };

  const handleSendMessage = async () => {
    validateEmail();
    if (emailError.value || isSubmitting.value) return;

    isSubmitting.value = true;
    try {
      // 1. Fetch local session cookie/token criteria
      const sessionToken = await getOrFetchToken();

      // 2. Fetch the clean external anti-bot string token using our new linked hook file
      const recaptchaToken = await executeVerificationToken("submit_contact");

      // 3. Post data payload structures directly to the Firebase engine
      const response = await fetch(`${BASE_URL}/sendEmailViaSmtp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          ...form.value,
          recaptchaToken: recaptchaToken,
        }),
      });

      // Explicitly typecast the JSON payload here as well
      const data = (await response.json()) as SendEmailResponse;
      if (!response.ok) {
        alert(`Error: ${data.message || "An anomaly occurred."}`);
        return;
      }

      localStorage.setItem("visitor_token", data.token);
      isModalOpen.value = true;
      form.value = { name: "", email: "", message: "" };
    } catch (error: unknown) {
      console.error("Transmission breakdown:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Could not establish connection to the mail distribution server.";

      alert(errorMessage);
    } finally {
      isSubmitting.value = false;
    }
  };

  const handleCloseModal = () => {
    isModalOpen.value = false;
  };

  return {
    form,
    isSubmitting,
    isModalOpen,
    emailError,
    validateEmail,
    handleSendMessage,
    handleCloseModal,
  };
}
