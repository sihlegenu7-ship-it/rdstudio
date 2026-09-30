# Real Deal Studios

A polished multi-page marketing website for Real Deal Studios, a South African creative studio focused on helping artists, musicians, and entrepreneurs build credible online brands.

The project is built with static HTML, CSS, and JavaScript to deliver a fast, lightweight, and responsive front-end experience without a framework or build pipeline.

---

## Overview

Real Deal Studios provides affordable, professional website design and digital support for creatives who want a strong online presence without the complexity or cost of a traditional agency.

This project includes:

- A branded landing/authentication experience
- Dedicated About, Services, and Contact pages
- Responsive navigation and mobile menu behavior
- Form interactions and polished marketing sections
- Custom visual styling consistent with the studio brand

---

## Project Structure

```text
rdstudio/
├── index.html                  # Landing/auth entry page
├── auth.html                   # Alternative auth/entry flow
├── pages/
│   ├── about.html              # Studio story and mission
│   ├── services.html           # Service offerings
│   └── contact.html            # Contact form and business details
├── src/
│   ├── css/
│   │   └── style.css           # Shared styling system
│   ├── js/
│   │   └── script.js           # Shared interactions and page behavior
│   └── assets/
│       └── images/             # Site graphics and imagery
├── README.md
└── .gitignore
```

---

## Technologies Used

- HTML5 for structure and content
- CSS3 for layout, responsiveness, and visual design
- Vanilla JavaScript for navigation, form interactions, and transitions
- Google Fonts for the branding typography
- Font Awesome for the WhatsApp support icon

---

## Pages Included

| Page | Purpose |
| --- | --- |
| index.html | Landing/authentication-style home experience |
| auth.html | Alternate entry/access page |
| pages/about.html | Studio overview, mission, and value proposition |
| pages/services.html | Service list and marketing content |
| pages/contact.html | Contact information and inquiry form |

---

## Local Development

This is a static website, so no installation or build step is required.

### Option 1: Open directly

Open the project folder in a browser and launch the home page:

```text
index.html
```

### Option 2: Run a local server

From the project root, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Features

- Fully responsive layout for desktop and mobile
- Custom brand styling with warm editorial tones
- Animated hero and content transitions
- Interactive mobile navigation menu
- Floating WhatsApp contact call-to-action
- Contact and auth form UI interactions
- Clean multi-page structure for easier maintenance

---

## Notes

This project is currently a front-end UI and marketing website. It does not yet include a real backend authentication system, database, or live form processing.

Future improvements could include:

- Real user authentication
- Backend-driven form submissions
- CMS or content management integration
- SEO enhancements and metadata refinement

---

## License

This project is currently intended for internal/private use unless otherwise specified.

---

© 2026 Real Deal Studios
128 New Road, Midrand, Johannesburg, South Africa
