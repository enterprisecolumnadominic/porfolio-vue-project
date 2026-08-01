import { test, expect } from "@playwright/test";

/**
 * Feature 4: Work Experience Section (ExperienceView.vue)
 * Tests section headers, dynamic data rendering, and card structures.
 */
test.describe("Feature 4: Work Experience Section", () => {
  // Navigate to the root homepage before each test case
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the experience section and main header", async ({ page }) => {
    // 1. Verify the main <section id="experience"> wrapper exists
    const experienceSection = page.locator("section#experience");
    await expect(experienceSection).toBeVisible();

    // 2. Verify the section heading <h2> "Work Experience"
    const heading = page.getByRole("heading", { level: 2, name: /work experience/i });
    await expect(heading).toBeVisible();

    // 3. Verify the tagline rendered right below the header
    const tagline = page.getByText(/a timeline of continuous growth/i);
    await expect(tagline).toBeVisible();
  });

  test("should render the dynamic experience cards from JSON data", async ({ page }) => {
    // 1. Target all the card containers within the experience section.
    // We use the '.group' CSS class because it's uniquely applied to your card wrappers in the v-for loops.
    const cards = page.locator("section#experience .group");

    // 2. Ensure at least the first card is visible on the screen
    await expect(cards.first()).toBeVisible();

    // 3. Verify that Vue generated at least one card from your JSON file
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test("should correctly structure the elements inside an experience card", async ({ page }) => {
    // Focus specifically on the first card generated on the page
    const firstCard = page.locator("section#experience .group").first();

    // 1. Verify a job title (h3) is present inside the card
    const jobTitle = firstCard.locator("h3");
    await expect(jobTitle).toBeVisible();

    // 2. Verify the custom green progress bar renders inside the card
    // We target the inner div using its specific emerald background class
    const progressBar = firstCard.locator(".bg-emerald-500");
    await expect(progressBar).toBeVisible();
  });
});
