import { ref } from "vue";
// Import your fresh modular component dependency hook
import { useRecaptcha } from "./useRecaptcha";

// 1. Define strict type interfaces matching backend v2 API response payloads
interface VisitorSessionResponse {
  status?: string;
  visitorId?: string;
  token: string;
  requestsRemainingInHour?: number;
}

interface SendEmailResponse {
  status?: string;
  message?: string;
  token: string;
  emailsRemainingInHour?: number;
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

  /**
   * Retrieves an existing visitor session token from browser localStorage,
   * or fetches a new one from the backend if none exists.
   */
  const getOrFetchToken = async (): Promise<string> => {
    let token = localStorage.getItem("visitor_token");

    if (!token) {
      const response = await fetch(`${BASE_URL}/handleVisitorSession`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to initialize visitor state.");
      }

      // Explicitly typecast the JSON payload matching VisitorSessionResponse
      const data = (await response.json()) as VisitorSessionResponse;
      token = data.token;

      // Save token locally
      localStorage.setItem("visitor_token", token);

      // Log session creation and remaining requests allowance
      if (data.requestsRemainingInHour !== undefined) {
        console.log(
          `[Visitor Session] New session initialized. Page refreshes remaining this hour: ${data.requestsRemainingInHour}`,
        );
      }
    }

    return token;
  };

  /**
   * Validates the email address format before sending.
   */
  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = !form.value.email
      ? "Email address is required."
      : !emailPattern.test(form.value.email)
        ? "Please enter a valid email address."
        : "";
  };

  /**
   * Handles reCAPTCHA verification, attaches JWT session header,
   * and dispatches the contact form message to the backend.
   */
  const handleSendMessage = async () => {
    validateEmail();
    if (emailError.value || isSubmitting.value) return;

    isSubmitting.value = true;
    try {
      // 1. Fetch or load local visitor token
      const sessionToken = await getOrFetchToken();

      // 2. Fetch the reCAPTCHA v3 anti-bot token
      const recaptchaToken = await executeVerificationToken("submit_contact");

      // 3. Post contact payload directly to the Firebase Cloud Function
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

      const data = (await response.json()) as SendEmailResponse;

      if (!response.ok) {
        alert(`Error: ${data.message || "An anomaly occurred."}`);
        return;
      }

      // 4. Update stored JWT with new timestamp history sent back by server
      localStorage.setItem("visitor_token", data.token);

      // 5. Console log remaining email allowance for browser debugging
      if (data.emailsRemainingInHour !== undefined) {
        console.log(
          `[Mail Service] Email sent successfully! Remaining email attempts this hour: ${data.emailsRemainingInHour}`,
        );
      } else {
        console.log("[Mail Service] Email sent successfully!");
      }

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
