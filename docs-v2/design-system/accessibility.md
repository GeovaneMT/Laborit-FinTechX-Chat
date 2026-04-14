# Accessibility Guidelines

Laborit adheres to **WCAG 2.1 Level AA** accessibility standards to ensure our
application is usable by everyone, including people with disabilities.

## Accessibility Standards

### WCAG 2.1 Level AA Compliance

Laborit targets compliance with:

- **Perceivable** — Information and user interface components must be
  perceivable
- **Operable** — User interface components and navigation must be operable
- **Understandable** — Information and user interface operation must be
  understandable
- **Robust** — Content must be robust enough to be interpreted reliably by
  assistive technologies

## Principles

### 1. Perceivable

#### Contrast Ratios

Minimum contrast requirements:

| Element            | Ratio | Standard |
| ------------------ | ----- | -------- |
| Normal text        | 4.5:1 | WCAG AA  |
| Large text (18pt+) | 3:1   | WCAG AA  |
| UI components      | 3:1   | WCAG AA  |

**Safe Color Combinations:**

- `text-slate-900` on `bg-white` (21:1 ✅)
- `text-slate-50` on `bg-slate-900` (18:1 ✅)
- `text-green-700` on `bg-green-50` (8:1 ✅)
- `text-slate-500` on `bg-white` (4.6:1 ⚠️ Secondary only)

**Test Contrast:**

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)

#### Alternative Text

```tsx
// ✅ Good — Descriptive alt text
<img src="hero.jpg" alt="Team discussing project roadmap in meeting" />

// ❌ Poor — Generic or missing alt text
<img src="hero.jpg" alt="image" />
<img src="hero.jpg" />

// Icons with semantic meaning
<button aria-label="Close modal">
  <TimeIcon className="w-6 h-6" />
</button>
```

### 2. Operable

#### Keyboard Navigation

All functionality must be accessible via keyboard:

```tsx
// ✅ Good — Keyboard accessible
<button onClick={handleDelete}>Delete</button>

// ❌ Poor — Not keyboard accessible
<div onClick={handleDelete}>Delete</div>

// Accessible link
<a href="/page" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
  Link text
</a>
```

#### Focus Management

```tsx
// ✅ Good — Visible focus indicator
<button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  Click me
</button>

// Dark mode focus
<button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900">
  Click me
</button>

// Skip to main content link
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute">
  Skip to main content
</a>
```

#### Focus Order

Ensure logical tab order through components:

```tsx
// ✅ Good — Natural HTML order
<form>
  <label htmlFor="name">Name</label>
  <input id="name" type="text" />

  <label htmlFor="email">Email</label>
  <input id="email" type="email" />

  <button type="submit">Submit</button>
</form>

// If needed, use tabIndex (sparingly)
<div>
  <button tabIndex={1}>First</button>
  <button tabIndex={2}>Second</button>
</div>
```

#### Skip Links

```tsx
// Provide skip navigation for keyboard users
<header>
  <a href="#main" className="sr-only focus:not-sr-only">
    Skip to main content
  </a>
  {/* Navigation here */}
</header>

<main id="main">
  {/* Main content */}
</main>
```

### 3. Understandable

#### Semantic HTML

```tsx
// ✅ Good — Semantic markup
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content</p>
  </article>
</main>

<footer>
  <p>&copy; 2026 Laborit</p>
</footer>

// ❌ Poor — Non-semantic markup
<div className="header-wrapper">
  <div className="nav-container">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</div>
```

#### Form Labels

```tsx
// ✅ Good — Explicit label association
<div>
  <label htmlFor="email">Email address</label>
  <input id="email" type="email" required />
</div>

// ✅ Good — Descriptive help text
<div>
  <label htmlFor="password">Password</label>
  <input id="password" type="password" aria-describedby="pwd-hint" />
  <small id="pwd-hint">At least 8 characters</small>
</div>

// ❌ Poor — No label
<input type="email" placeholder="Email" />

// ❌ Poor — Placeholder as only label
<input type="email" placeholder="Enter your email" />
```

#### Error Messages

```tsx
// ✅ Good — Linked error message
<div>
  <label htmlFor="username">Username</label>
  <input
    id="username"
    type="text"
    aria-describedby="username-error"
    aria-invalid={hasError}
  />
  {hasError && (
    <p id="username-error" role="alert" className="text-red-600 mt-1">
      Username must be at least 3 characters
    </p>
  )}
</div>

// ✅ Good — Form validation with role="alert"
<div role="alert" className="bg-red-50 border border-red-200 p-4 rounded">
  <h4 className="font-semibold text-red-900">Please fix these errors:</h4>
  <ul className="mt-2 space-y-1 text-red-800">
    <li>Email is required</li>
    <li>Password must be at least 8 characters</li>
  </ul>
</div>
```

#### Language Declaration

```tsx
// ✅ Good — Language specified
<html lang="en">
  <head>
    <title>Laborit</title>
  </head>
  <body>
    {/* Content */}
  </body>
</html>

// Portuguese language
<html lang="pt-BR">
  {/* Content in Portuguese */}
</html>
```

### 4. Robust

#### ARIA Attributes

Use ARIA only when semantic HTML isn't sufficient:

```tsx
// ✅ Good — Semantic HTML (preferred)
<button>Close</button>

// ✅ Acceptable — ARIA when needed
<div onClick={close} role="button" tabIndex={0} aria-label="Close dialog">
  X
</div>

// Accessible toggle
<button
  aria-pressed={isActive}
  onClick={toggle}
  aria-label="Toggle notifications"
>
  {isActive ? 'On' : 'Off'}
</button>

// Accessible modal
<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
  <h2 id="dialog-title">Delete Item</h2>
  <p>Are you sure?</p>
  <button>Cancel</button>
  <button>Delete</button>
</div>

// Live region for status updates
<div aria-live="polite" aria-atomic="true" role="status">
  {statusMessage}
</div>
```

#### Semantic Role Usage

```tsx
// Navigation
<nav aria-label="Main navigation">
  {/* Navigation items */}
</nav>

// Search
<div role="search">
  <input type="search" aria-label="Search products" />
  <button>Search</button>
</div>

// Tabs
<div role="tablist">
  <button role="tab" aria-selected={activeTab === 0}>Tab 1</button>
  <button role="tab" aria-selected={activeTab === 1}>Tab 2</button>
</div>

<div role="tabpanel">
  {/* Tab content */}
</div>
```

## Component Accessibility Checklist

### Forms

- [ ] All inputs have associated `<label>` elements
- [ ] Form groups are wrapped in `<fieldset>` when appropriate
- [ ] Required fields are marked with `required` attribute and visual indicator
- [ ] Error messages are linked via `aria-describedby`
- [ ] Form submission failures show errors with `role="alert"`
- [ ] CAPTCHA alternatives are provided (if used)

### Navigation

- [ ] Keyboard users can skip to main content
- [ ] Link text is descriptive (not "click here")
- [ ] Navigation menu is keyboard accessible
- [ ] Current page indicator is marked with `aria-current="page"`
- [ ] Dropdowns are keyboard accessible with arrow keys

### Images & Media

- [ ] All images have descriptive `alt` text
- [ ] Decorative images have empty `alt=""` and `aria-hidden="true"`
- [ ] Videos have captions or transcripts
- [ ] Audio has transcripts
- [ ] Color is not the only way information is conveyed

### Modal Dialogs

- [ ] Focus is managed when modal opens/closes
- [ ] Keyboard users can close with Escape key
- [ ] Dialog has proper ARIA labels (`role="dialog"`, `aria-labelledby`)
- [ ] Focus is trapped within modal
- [ ] Background content is inert when modal is open

### Tables

```tsx
// ✅ Good — Accessible table
<table>
  <caption>Sales data for 2026</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>
```

### Links

```tsx
// ✅ Good — Descriptive link text
<a href="/features">Learn more about our features</a>

// ❌ Poor — Generic link text
<a href="/features">Learn more</a>
<a href="/features">Click here</a>

// External links
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External site (opens in new window)
</a>
```

## Testing for Accessibility

### Automated Tools

1. **axe DevTools** — Browser extension for automated testing
2. **WAVE** — Web Accessibility Evaluation Tool
3. **Lighthouse** — Chrome DevTools built-in audit
4. **ESLint Plugins** — `eslint-plugin-jsx-a11y` for development

### Manual Testing

- Keyboard-only navigation (Tab, Enter, Arrow keys)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast verification
- Focus indicator visibility
- Form label associations
- Error message clarity

### Screen Reader Testing

```bash
# NVDA (Windows) — Free
# https://www.nvaccess.org/download/

# VoiceOver (macOS) — Built-in
# Cmd + F5 to enable

# JAWS (Windows) — Commercial
# https://www.freedomscientific.com/products/software/jaws/

# TalkBack (Android) — Built-in
```

## Resources

### Documentation

- [WCAG 2.1 Specification](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Tools

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Learning

- [WebAIM Articles](https://webaim.org/)
- [The Accessibility Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)

## Accessibility Governance

1. **Audit regularly** — Use automated tools in CI/CD pipeline
2. **Manual review** — Include accessibility in code reviews
3. **Test with users** — Include people with disabilities in testing
4. **Educate team** — Share accessibility resources and best practices
5. **Iterate** — Continuously improve based on feedback

---

**Last Updated:** April 14, 2026 | **Standard:** WCAG 2.1 Level AA
