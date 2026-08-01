import { test, expect } from "@playwright/test";

/**
 * Feature 2: Home Hero Section (HomeView.vue)
 * Tests headline rendering, profile image visibility, and call-to-action buttons.
 */
test.describe("Feature 2: Home Hero Section", () => {
  // Automatically navigate to the homepage before every test case
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the home section container and availability badge", async ({ page }) => {
    // 1. Locate the main home section by its ID
    const homeSection = page.locator("section#home");
    await expect(homeSection).toBeVisible();

    // 2. Verify the status badge text is displayed
    const statusBadge = page.getByText(/available for freelance work/i);
    await expect(statusBadge).toBeVisible();
  });

  test("should display the primary headline, paragraph, and profile image", async ({ page }) => {
    // 1. Verify the main <h1> title text
    const mainHeading = page.getByRole("heading", {
      level: 1,
      name: /modernizing legacy systems/i,
    });
    await expect(mainHeading).toBeVisible();

    // 2. Verify the biography paragraph is present
    const bioParagraph = page.getByText(/experienced software developer with 5\+ years/i);
    await expect(bioParagraph).toBeVisible();

    // 3. Verify the profile illustration image loads using its alt attribute
    const profileImg = page.getByAltText("Hero illustration profile");
    await expect(profileImg).toBeVisible();
  });

  test('should configure the "View My Resume" call-to-action link correctly', async ({ page }) => {
    // Locate the resume link by its visible text
    const resumeLink = page.getByRole("link", { name: /view my resume/i });

    // Verify it is visible and has correct attributes for downloading/viewing a PDF
    await expect(resumeLink).toBeVisible();
    await expect(resumeLink).toHaveAttribute("href", "/resume.pdf");
    await expect(resumeLink).toHaveAttribute("target", "_blank");
  });

  test('should navigate to #contact when clicking "Let\'s Talk"', async ({ page }) => {
    // Locate the contact CTA link
    const contactLink = page.getByRole("link", { name: /let's talk/i });

    // Verify link exists and points to #contact
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute("href", "#contact");

    // Click the button and check that the URL hash updates
    await contactLink.click();
    await expect(page).toHaveURL(/.*#contact/);
  });
});
