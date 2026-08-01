import { test, expect } from "@playwright/test";

/**
 * Feature: Navigation Bar (TheNavbar.vue)
 * Tests layout visibility, link attributes, and click navigation.
 */
test.describe("Feature: Navigation Bar", () => {
  // Navigate to the root homepage before each test case
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display the navbar container and logo image", async ({ page }) => {
    // 1. Verify the <nav> element exists and is visible
    const navbar = page.locator("nav");
    await expect(navbar).toBeVisible();

    // 2. Verify the logo link by its accessibility label "Return to top"
    const logoLink = page.getByRole("link", { name: /return to top/i });
    await expect(logoLink).toBeVisible();

    // 3. Verify the logo image is present using its alt text
    const logoImg = page.getByAltText("Vue logo");
    await expect(logoImg).toBeVisible();
  });

  test("should render all navigation links with correct href destinations", async ({ page }) => {
    // Locate each link by its visible accessible text
    const homeLink = page.getByRole("link", { name: /^home$/i });
    const aboutLink = page.getByRole("link", { name: /^about$/i });
    const experienceLink = page.getByRole("link", { name: /^experience$/i });
    const hireMeLink = page.getByRole("link", { name: /hire me/i });

    // Verify all links are visible on the page
    await expect(homeLink).toBeVisible();
    await expect(aboutLink).toBeVisible();
    await expect(experienceLink).toBeVisible();
    await expect(hireMeLink).toBeVisible();

    // Verify href attributes match the template anchors
    await expect(homeLink).toHaveAttribute("href", "#");
    await expect(aboutLink).toHaveAttribute("href", "#about");
    await expect(experienceLink).toHaveAttribute("href", "#experience");
    await expect(hireMeLink).toHaveAttribute("href", "#contact");
  });

  test("should update the URL hash when navigation links are clicked", async ({ page }) => {
    // Click "About" link and verify URL updates to contain #about
    await page.getByRole("link", { name: /^about$/i }).click();
    await expect(page).toHaveURL(/.*#about/);

    // Click "Experience" link and verify URL updates to contain #experience
    await page.getByRole("link", { name: /^experience$/i }).click();
    await expect(page).toHaveURL(/.*#experience/);

    // Click "Hire me" button link and verify URL updates to contain #contact
    await page.getByRole("link", { name: /hire me/i }).click();
    await expect(page).toHaveURL(/.*#contact/);
  });
});
