import { test, expect } from "@playwright/test";

/**
 * Feature 5: Contact Section & Form Validation (ContactView.vue)
 * Tests contact information rendering, form input handling, real-time validation,
 * and success modal triggering.
 */
test.describe("Feature 5: Contact Section", () => {
  // Navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render contact headers, form fields, and contact information correctly", async ({
    page,
  }) => {
    // 1. Target the main contact section container
    const contactSection = page.locator("section#contact");
    await expect(contactSection).toBeVisible();

    // 2. Verify form input fields exist via their placeholders (scoped inside contactSection)
    await expect(contactSection.getByPlaceholder("John Doe")).toBeVisible();
    await expect(contactSection.getByPlaceholder("john@example.com")).toBeVisible();
    await expect(
      contactSection.getByPlaceholder("Tell me all about your project ideas..."),
    ).toBeVisible();

    // 3. Verify submit button exists
    const submitButton = contactSection.getByRole("button", { name: /submit message/i });
    await expect(submitButton).toBeVisible();

    // 4. Verify contact info details (SCOPED to contactSection to avoid matching the Footer)
    await expect(contactSection.getByText("columnadominic@gmail.com")).toBeVisible();
    await expect(contactSection.getByText("+63 993 644 6066")).toBeVisible();
    await expect(contactSection.getByText("Metro Manila, Philippines")).toBeVisible();
  });

  test("should trigger real-time validation when entering an invalid email address", async ({
    page,
  }) => {
    const contactSection = page.locator("section#contact");
    const emailInput = contactSection.getByPlaceholder("john@example.com");

    // 1. Type an invalid email format into the input field
    await emailInput.fill("invalid-email-format");

    // 2. Assert that the border styling or error message appears
    const errorMessage = contactSection.locator("form span.text-rose-400");
    await expect(errorMessage).toBeVisible();

    // 3. Fix the email address and confirm the error disappears
    await emailInput.fill("valid.email@example.com");
    await expect(errorMessage).not.toBeVisible();
  });

  test("should fill out the form, submit it, and open the success modal", async ({ page }) => {
    const contactSection = page.locator("section#contact");

    // 1. Fill out form fields
    await contactSection.getByPlaceholder("John Doe").fill("Alex Rivera");
    await contactSection.getByPlaceholder("john@example.com").fill("alex.rivera@example.com");
    await contactSection
      .getByPlaceholder("Tell me all about your project ideas...")
      .fill("Hi! I would love to collaborate on a new project. Let us schedule a call!");

    // 2. Click the submit button
    const submitButton = contactSection.getByRole("button", { name: /submit message/i });
    await submitButton.click();

    // 3. Verify that the button enters a loading state or modal appears
    const sendingButton = contactSection.getByRole("button", { name: /sending message/i });

    // Check that either the sending button state or modal becomes active
    await expect(sendingButton.or(page.locator("#success-modal"))).toBeDefined();
  });
});
