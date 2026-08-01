import { test, expect } from "@playwright/test";

/**
 * Feature 3: About Section (AboutView.vue)
 * Tests section headers, dynamic card rendering, profile portrait, and story text.
 */
test.describe("Feature 3: About Section", () => {
  // Automatically navigate to the homepage before every test case
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the about section container and main section headers", async ({ page }) => {
    // 1. Verify the <section id="about"> element exists in the DOM
    const aboutSection = page.locator("section#about");
    await expect(aboutSection).toBeVisible();

    // 2. Verify the primary section heading <h2> "About Me"
    const sectionHeading = page.getByRole("heading", { level: 2, name: /about me/i });
    await expect(sectionHeading).toBeVisible();

    // 3. Verify the tagline text rendered below the header
    const tagline = page.getByText(/transforming a lifelong passion for software/i);
    await expect(tagline).toBeVisible();
  });

  test("should render dynamic cards from aboutData.json", async ({ page }) => {
    // 1. Target all card containers inside the grid layout
    const cards = page.locator("section#about .grid > div");

    // 2. Ensure at least one card is mounted and visible
    await expect(cards.first()).toBeVisible();

    // 3. Verify that cards were generated from your JSON dataset
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test("should display profile portrait, quality badge, and engineering narrative", async ({
    page,
  }) => {
    // 1. Verify the profile portrait image using its accessibility alt text
    const portraitImg = page.getByAltText("My Profile Portrait Picture");
    await expect(portraitImg).toBeVisible();

    // 2. Verify the badge text "Continuous Delivery & Quality"
    const qualityBadge = page.getByText(/continuous delivery & quality/i);
    await expect(qualityBadge).toBeVisible();

    // 3. Verify the "My Engineering Journey" sub-heading
    const journeyHeading = page.getByRole("heading", { name: /my engineering journey/i });
    await expect(journeyHeading).toBeVisible();

    // 4. Verify key story text inside the engineering biography paragraph
    const narrativeText = page.getByText(
      /software development has never been just about writing lines of code/i,
    );
    await expect(narrativeText).toBeVisible();
  });
});
