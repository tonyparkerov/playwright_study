# Playwright Testing Project

This repository contains automated tests using Playwright, a modern end-to-end testing framework for web applications.

## Prerequisites

- Node.js (latest LTS version recommended)
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:tonyparkerov/playwright_study.git
   cd playwright_study
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install required browsers:
   ```bash
   npx playwright install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

5. Configure your environment variables in `.env`:
   - `BASE_URL`: Your application's base URL
   - `HTTP_CREDENTIALS_USERNAME`: Username for HTTP authentication
   - `HTTP_CREDENTIALS_PASSWORD`: Password for HTTP authentication

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in UI mode:
```bash
npx playwright test --ui
```

Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

## Project Structure

```
├── tests/          # Test files
├── playwright.config.ts  # Playwright configuration
└── .env.example    # Example environment variables
```

## Documentation

For more information about Playwright, visit:
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-playwright)

## Contributing

Feel free to submit issues and pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).