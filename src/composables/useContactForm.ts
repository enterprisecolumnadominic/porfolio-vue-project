import { ref } from "vue";
import { useRecaptcha } from "./useRecaptcha";

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

  const { executeVerificationToken } = useRecaptcha(RECAPTCHA_SITE_KEY);

  const getOrFetchToken = async (): Promise<string> => {
    let token = localStorage.getItem("visitor_bearer_token");

    if (!token) {
      const response = await fetch(`${BASE_URL}/handleVisitorSession`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to initialize visitor state.");
      }

      const data = (await response.json()) as VisitorSessionResponse;
      token = data.token;

      // ✅ Save the new token
      localStorage.setItem("visitor_bearer_token", token);

      if (data.requestsRemainingInHour !== undefined) {
        console.log(
          `[Visitor Session] New session initialized. Page refreshes remaining this hour: ${data.requestsRemainingInHour}`,
        );
      }
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
      const sessionToken = await getOrFetchToken();
      const recaptchaToken = await executeVerificationToken("submit_contact");

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

      // ✅ Save the updated token with incremented email counter
      localStorage.setItem("visitor_bearer_token", data.token);

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
