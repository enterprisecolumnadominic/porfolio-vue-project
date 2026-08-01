import { test, expect } from "@playwright/test";

/**
 * Feature 6: Footer Component (TheFooter.vue)
 * Tests social media links, security attributes, email mailto link, and copyright notice.
 */
test.describe("Feature 6: Footer Section", () => {
  // Navigate to the root homepage before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the footer container and copyright notice", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Verify the copyright notice text
    const copyright = footer.getByText(/2026 columna\.dominic\. All rights reserved/i);
    await expect(copyright).toBeVisible();
  });

  test("should render external social media links with secure attributes", async ({ page }) => {
    const footer = page.locator("footer");

    // Define expected social links with their corresponding aria-labels and URLs
    const socialLinks = [
      { name: "LinkedIn Profile", href: "https://www.linkedin.com/in/dominic-c-957a60168/" },
      { name: "Twitter X Profile", href: "https://x.com/yourprofile" },
      { name: "Instagram Profile", href: "https://instagram.com/yourprofile" },
      { name: "Facebook Profile", href: "https://facebook.com/yourprofile" },
    ];

    for (const social of socialLinks) {
      // Locate link using its aria-label (e.g. aria-label="LinkedIn Profile")
      const link = footer.getByRole("link", { name: social.name });

      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", social.href);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("should render the footer email link with mailto attribute", async ({ page }) => {
    const footer = page.locator("footer");

    // Scoped specifically to <footer> so Playwright ignores the <p> tag in ContactView
    const emailLink = footer.getByRole("link", { name: "columnadominic@gmail.com" });

    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", "mailto:enterprise.columna.dominic@gmail.com");
  });
});
