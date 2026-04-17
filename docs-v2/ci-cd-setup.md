# CI/CD Pipeline Documentation

This document outlines the continuous integration and deployment setup for the
Brain Box project, focusing on automated testing, Storybook deployment, and code
quality assurance.

## Overview

The CI/CD pipeline consists of multiple GitHub Actions workflows that ensure
code quality, run tests, build Storybook, and deploy documentation
automatically.

## Workflows

### 1. Main CI/CD Pipeline (`ci-cd.yml`)

**Triggers:**

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**

#### `test` Job

- Runs type checking (`pnpm typecheck`)
- Runs linting (`pnpm lint`)
- Executes unit tests (`pnpm test:unit`)
- Runs integration tests (`pnpm test:integration`)
- Generates coverage reports
- Uploads coverage to Codecov

#### `storybook` Job

- Builds Storybook static site (`pnpm build-storybook`)
- Uploads build artifacts for testing

#### `storybook-tests` Job

- Runs Storybook test runner (`pnpm storybook:test`)
- Executes accessibility tests (`pnpm storybook:test:a11y`)

#### `deploy-storybook` Job (Main branch only)

- Deploys Storybook to GitHub Pages
- Configured with custom domain: `storybook.brain-box.dev`

#### `chromatic` Job (Main/Develop branches)

- Publishes visual regression tests to Chromatic
- Auto-accepts changes on main branch

### 2. Storybook PR Comments (`storybook-pr.yml`)

**Triggers:**

- Pull request opened, synchronized, or reopened

**Functionality:**

- Builds Storybook for each PR
- Posts comment with direct link to PR-specific Storybook deployment
- Includes list of available component stories

### 3. Code Quality (`quality.yml`)

**Triggers:**

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**

#### `quality` Job

- Code formatting checks
- ESLint validation
- TypeScript type checking
- Dead code detection (knip)
- Unused imports check
- Comprehensive quality gate (`pnpm check:all`)

#### `bundle-analysis` Job

- Analyzes production bundle size
- Monitors `.next/static/` output

#### `performance-check` Job

- Builds and starts production server
- Verifies application starts successfully

### 4. Security & Dependencies (`security.yml`)

**Triggers:**

- Weekly schedule (Mondays 9 AM UTC)
- Manual trigger available

**Jobs:**

#### `security-audit` Job

- Runs `pnpm audit` for security vulnerabilities
- Executes knip for unused dependency detection

#### `dependency-updates` Job

- Checks for outdated dependencies
- Creates GitHub issues for dependency updates
- Automated maintenance tracking

## Deployment Options

### GitHub Pages (Primary)

- Automatic deployment on main branch pushes
- Custom domain support
- Free hosting with GitHub

### Netlify (Alternative)

- Configuration file: `netlify.toml`
- Supports custom headers and redirects
- Easy preview deployments

### Vercel (Alternative)

- Configuration file: `vercel.json`
- Global CDN deployment
- Brazilian region (`gru1`) configured

## Environment Variables

### Required Secrets

- `GITHUB_TOKEN`: Automatically provided by GitHub
- `CHROMATIC_PROJECT_TOKEN`: For visual regression testing
- `CODECOV_TOKEN`: For coverage reporting (optional)

## Local Development

### Storybook Scripts

```bash
# Start Storybook development server
pnpm storybook

# Build Storybook for production
pnpm build-storybook

# Run Storybook tests
pnpm storybook:test

# Run accessibility tests
pnpm storybook:test:a11y
```

### Quality Scripts

```bash
# Run all quality checks
pnpm check:all

# Type checking only
pnpm typecheck

# Linting only
pnpm lint

# Formatting check
pnpm format --check
```

## Component Stories Available

The Storybook deployment includes interactive stories for:

- **Button**: Variants, sizes, effects, states
- **Spinner**: Sizes, colors, loading states
- **Form**: Validation, error handling, field types
- **ButtonGroup**: Layouts, orientations, grouping
- **Logo**: Themes, sizes, contexts
- **ErrorCard**: Error types, actions, tips
- **LoadingPulse**: Indicators, contexts, animations
- **Separator**: Orientations, semantic usage

## Monitoring & Alerts

### Automated Checks

- ✅ Code formatting validation
- ✅ TypeScript compilation
- ✅ ESLint rule compliance
- ✅ Test coverage requirements
- ✅ Bundle size monitoring
- ✅ Accessibility compliance
- ✅ Security vulnerability scanning

### Weekly Maintenance

- 📦 Dependency update notifications
- 🔒 Security audit reports
- 🧹 Dead code detection

## Troubleshooting

### Common Issues

**Storybook build fails:**

- Check Node.js version (20.x required)
- Verify all dependencies are installed
- Check for TypeScript errors in stories

**Tests failing:**

- Run `pnpm test:debug` for detailed output
- Check test environment setup
- Verify mocking configuration

**Deployment issues:**

- Check build logs in GitHub Actions
- Verify secrets are configured
- Check domain DNS settings

### Manual Triggers

All workflows can be triggered manually from the GitHub Actions tab:

1. Go to Actions tab in repository
2. Select desired workflow
3. Click "Run workflow"
4. Choose branch and trigger

## Future Enhancements

- [ ] Add performance regression testing
- [ ] Implement automated visual testing
- [ ] Add end-to-end testing with Playwright
- [ ] Set up staging environment deployment
- [ ] Add automated release creation
- [ ] Implement feature flag management
