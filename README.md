Portfolio Web Application
A modern, high-performance personal portfolio web application built with Vue 3, Tailwind CSS, and Firebase. This project showcases legacy modernization expertise, full-stack capabilities, continuous integration, and automated testing.

Features & Highlights
Frontend Architecture: Built using Vue 3 and styled with Tailwind CSS for a fully responsive, clean, and accessible UI.

Serverless Backend: Powered by Firebase (Hosting, Firestore, and reCAPTCHA v3) for seamless data storage and security.

Automated End-to-End Testing: Configured with Playwright to ensure high reliability and catch UI regressions across major browser engines.

Modern Tooling: Powered by Vite for fast development builds and modules HMR.

Tech Stack
Framework: Vue 3

Build Tool: Vite

Styling: Tailwind CSS

Database & Hosting: Firebase

Testing: Playwright & Vitest

Language: TypeScript / JavaScript

Prerequisites
Make sure you have the following installed on your machine:

Node.js (v18+ recommended)

npm or pnpm / yarn

Project Setup
1. Install Dependencies
Bash
npm install
2. Development Server
Run the local development server with hot-reload:

Bash
npm run dev
3. Build & Type-Check
Check TypeScript types and compile the project for production:

Bash
npm run build
 Testing
End-to-End Tests (Playwright)
Install browser binaries required for Playwright (first-time setup only):

Bash
npx playwright install
Run tests across browsers:

Bash
# Run all end-to-end tests
npm run test:e2e

# Run tests on Chromium only
npm run test:e2e -- --project=chromium

# Run tests in debug mode
npm run test:e2e -- --debug
Unit Tests (Vitest)
Run unit tests:

Bash
npm run test:unit
Code Quality & Formatting
Lint and check formatting across the codebase:

Bash
npm run lint
Deployment
This project is configured to deploy via Firebase Hosting.

Bash
# Build production assets
npm run build

# Deploy to Firebase
firebase deploy
