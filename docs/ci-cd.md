# CI/CD Quality Pipeline

## Purpose

This document describes the continuous integration pipeline for the Playwright TypeScript E2E Framework.

The pipeline is designed to provide fast feedback, enforce TypeScript validation, execute critical smoke coverage, run the complete suite across supported browsers, and preserve diagnostic test artifacts.

## Workflow File

The GitHub Actions workflow is located at:

```text
.github/workflows/playwright.yml