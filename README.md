# Stanley College Student Hub

The Stanley College Student Hub is a web-based platform designed to centralize student support resources and event information.
This project was developed as part of an internship to modernize the existing Student Hub by _Shengya Chen_ (chenshengya1225@gmail.com) from May 2025 to July 2025.

## Features

- Modern UI built with React and Vite
- Events & Activities dynamically fetched from Google Calendar API
- Google Sheets integration for easy content updates

## Tech Stack

_Frontend_: React (Vite), CSS
_Hosting_: GitHub Pages (for preview)
_External Integrations_:

- Google Calendar API (events)
- Google Sheets + Apps Script (dynamic content)
- Google Drive (document storage)

## Preview Link

This preview version of the Stanley College Student Hub website is currently hosted under Shengya's personal domain:

👉 https://chenshengya.com/studenthub/

The project is deployed using GitHub Pages, which provides static site hosting.

### Known Limitation: 404 on Page Refresh

Because GitHub Pages is a static file server and does not support client-side routing (used by React Router), refreshing a subpage (e.g., /studenthub/it-support) will result in a 404 error.

This is not a bug in the project itself. It’s a known limitation of how GitHub Pages handles routing for single-page applications (SPA).

**If you encounter a 404 after refreshing a subpage, simply: **

1. Go back to the main homepage:
   👉 https://chenshengya.com/studenthub/
2. Navigate to the desired page from menu.

## Setup and Local Development

### Step 1: Install Node.js

1. Go to: https://nodejs.org/
2. Click the **green button** to download the **LTS version**
3. After downloading, double-click the installer and follow the steps (just keep clicking “Next”) until it's fully installed

---

### Step 2: Download the Project Files

1. You are already at the GitHub Page
2. Click the green **"Code"** button and choose **"Download ZIP"**
3. After downloading, **right-click the ZIP file** and choose **"Extract All..."**

---

### Step 3: Run the Project Locally

1. Open the folder you just extracted
2. Hold the **Shift** key and **right-click** inside the folder → choose **“Open PowerShell window here”** or **"Open in Terminal"**
3. In the black terminal window, type the following commands one by one and press **Enter** after each:

```bash
npm install
npm run dev
```

## Known Issues

- No mobile responsiveness (desktop-only design)
- Image links from social media may expire (use stable hosting)
- Slower load times due to live Google Sheets fetch

## Future Development

- Implement responsive design for mobile and tablets
- Integrate meeting room booking (requires admin API access)
- Add Freshdesk support system (via clean embedded widget or hyperlink)
- Improve content management (consider lightweight backend or CMS)
- Continue developing the new yellow/green UI on the _visualization-improvements_ branch
