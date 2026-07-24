import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';

import { defineConfig, devices } from '@playwright/test';

import { getEnvironment } from './config/environment';

if (existsSync('.env')) {
  loadEnvFile('.env');
}

const environment = getEnvironment();

export default defineConfig({
  testDir: './tests',

  outputDir: 'test-results',

  fullyParallel: true,

  forbidOnly: Boolean(process.env.CI),

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],

    [
      'html',
      {
        open: 'never',
        outputFolder: 'playwright-report',
      },
    ],

    [
      'junit',
      {
        outputFile:
          'test-results/junit/results.xml',
      },
    ],
  ],

  use: {
    baseURL: environment.baseUrl,

    testIdAttribute: 'data-test',

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',

      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});