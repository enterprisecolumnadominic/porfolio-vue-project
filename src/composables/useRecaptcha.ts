import { onMounted } from "vue";

// 1. Define the specific structural interface for Google's runtime object
interface ReCaptchaInstance {
  ready: (callback: () => void | Promise<void>) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

// 2. Register the interface on the global Window scope safely
declare global {
  interface Window {
    grecaptcha: ReCaptchaInstance;
  }
}

export function useRecaptcha(siteKey: string) {
  onMounted(() => {
    if (!document.getElementById("recaptcha-script")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  });

  /**
   * Triggers the invisible verification score check and returns a fresh token
   */
  const executeVerificationToken = async (actionName: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      if (typeof window === "undefined" || !window.grecaptcha) {
        reject(new Error("reCAPTCHA protection script failed to load. Please refresh."));
        return;
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(siteKey, { action: actionName });
          resolve(token);
        } catch (err) {
          reject(err);
        }
      });
    });
  };

  return {
    executeVerificationToken,
  };
}
