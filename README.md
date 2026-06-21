# Real Deal Studios

A multi-page marketing website for **Real Deal Studios**, a South African web design studio providing affordable, professional websites for artists, musicians, and other creative professionals.

The website is built using **static HTML, CSS, and vanilla JavaScript** — with no frameworks, build tools, or external dependencies required.

## Website Structure

Main navigation flow:

`INDEX.html` → `ABOUT.html` → `SERVICES.html` → `CONTACT.html`

Additional page:

`AUTH.html` — authentication/marketing entry page.

---

# Pages

| File            | Purpose                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INDEX.html`    | Sign-in / sign-up page. This page is self-contained and currently includes its own `<style>` and `<script>` sections instead of using the shared `STYLE.css` and `SCRIPT.js` files. |
| `AUTH.html`     | Marketing homepage featuring the main hero section ("Your Art Deserves a Stage") and call-to-action content.                                                                        |
| `ABOUT.html`    | Introduces the studio mission, explains the value of professional websites, and highlights key statistics.                                                                          |
| `SERVICES.html` | Displays available services including web design, redesigns, SEO, domain & hosting, and maintenance.                                                                                |
| `CONTACT.html`  | Contains the contact form, WhatsApp integration, studio information, and floating WhatsApp button.                                                                                  |

> **Note:** `INDEX.html` and `AUTH.html` currently have their roles reversed compared to the navigation structure. The navigation treats `INDEX.html` as the homepage, but the actual marketing homepage content exists inside `AUTH.html`.

---

# Tech Stack

* **HTML5** — Semantic structure and accessibility features including ARIA labels for navigation and landmarks.
* **CSS3** — Custom properties (`:root` variables), CSS Grid, Flexbox, animations, and responsive layouts.
* **Vanilla JavaScript** — Handles interactive functionality without external libraries or frameworks.
* **Google Fonts** — Bebas Neue, DM Sans, and Space Mono.
* **Font Awesome CDN** — Used for WhatsApp icons on `CONTACT.html`.

---

# Project Structure

```
.
├── INDEX.html             # Sign-in / sign-up page
├── AUTH.html              # Marketing homepage
├── ABOUT.html
├── SERVICES.html
├── CONTACT.html
├── STYLE.css              # Shared stylesheet (all pages except INDEX.html)
├── SCRIPT.js              # Shared JavaScript functionality
│
├── about.png
├── contact.png            # Currently unused
├── deal.png
├── office.png
├── real.png
├── services.png
├── studioimage.png
└── team-photo.png
```

---

# Running Locally

This is a static website, meaning no backend, database, or build process is required.

### Option 1: Open directly

Open:

```
INDEX.html
```

in your browser.

### Option 2: Run a local server (recommended)

Using Python:

```bash
python3 -m http.server 8000
```

Then open:

```
http://localhost:8000
```

---

# Features

* Responsive design for desktop, tablet, and mobile devices.
* Custom hamburger menu for screens below 900px.
* Animated page content using `fade-up` CSS animations.
* Automatic active navigation link highlighting.
* Simulated contact form submission with loading and success states.
* Client-side sign-in/sign-up experience with password strength validation.
* Floating WhatsApp contact button.
* Animated scrolling services ticker across marketing pages.

---

# Known Improvements

The following items should be addressed before production launch:

### 1. Homepage Navigation Issue

The navigation currently points "Home" to `INDEX.html`, but the actual marketing homepage is located in `AUTH.html`.

**Suggested fix:**
Rename files or swap responsibilities so the homepage and authentication pages match their intended purpose.

---

### 2. Duplicate JavaScript Logic

`INDEX.html` does not load `SCRIPT.js` and instead contains its own JavaScript.

This creates duplicate functionality that may become difficult to maintain.

**Suggested fix:**
Move shared functionality into `SCRIPT.js` and load it across all pages.

---

### 3. Authentication System

The sign-in/sign-up functionality is currently only a front-end simulation.

There is:

* No database
* No user accounts
* No authentication service
* No session management

**Suggested improvement:**
Connect the forms to a backend service or authentication provider before launch.

---

### 4. Unused Image Asset

`contact.png` currently exists in the project but is not being used.

**Suggested improvement:**
Either remove the file or integrate it into `CONTACT.html`.

---

### 5. Form Submission

The contact and authentication forms currently simulate successful submissions using JavaScript timers.

They do not send real emails or store user information.

**Suggested improvement:**
Connect forms to a backend, email service, or database.

---

### 6. Duplicate Responsive CSS

`INDEX.html` contains responsive CSS rules that overlap with `STYLE.css`.

This means future design changes may need to be updated in multiple places.

**Suggested improvement:**
Move all styling into `STYLE.css` for easier maintenance.

---

# License

License information has not been decided yet.

Possible options:

* MIT License (open source)
* All Rights Reserved (private/proprietary project)

---

© 2026 Real Deal Studios
128 New Road, Midrand, Johannesburg, South Africa
