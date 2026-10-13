import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Overall timeout per test (ms)
  timeout: 120_000,

  // Default expect() timeout (ms)
  expect: {
    timeout: 10_000,
  },

  // Parallelization and CI behavior
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporters
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  // Shared options for all tests
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },

    // Capture options for debugging failures
    screenshot: 'only-on-failure',     // screenshot automatically saved on failure
    video: 'retain-on-failure',        // retain video only when test fails
    trace: 'on-first-retry',          // create trace.zip on first retry

    // Navigation and action timeouts (0 = no limit for actions)
    actionTimeout: 30_000,
    navigationTimeout: 30_000,

    // Avoid slowing CI runs; set slowMo only for local debugging (0 here)
    launchOptions: {
      slowMo: 0,
    },
  },

  // Projects (browsers)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // add other projects if needed
  ],

  // Keep HTML report generation
  outputDir: 'test-results/',
});