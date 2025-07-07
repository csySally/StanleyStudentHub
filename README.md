# Stanley College - Student Hub

## Preview Link

This preview version of the Stanley College Student Hub website is currently hosted under my personal domain:

👉 https://chenshengya.com/studenthub/

The project is deployed using GitHub Pages, which provides static site hosting.

### Known Limitation: 404 on Page Refresh

Because GitHub Pages is a static file server and does not support client-side routing (used by React Router), refreshing a subpage (e.g., /studenthub/it-support) will result in a 404 error.

This is not a bug in the project itself. It’s a known limitation of how GitHub Pages handles routing for single-page applications (SPA).

**If you encounter a 404 after refreshing a subpage, simply: **

1. Go back to the main homepage:
   👉 https://chenshengya.com/studenthub/
2. Navigate to the desired page from menu.

## 🖥️ How to Open This React Webpage on Your Computer (Windows)

## This is a web application built using React. You can view and interact with it on your local browser by following a few simple steps

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
npm start
```

## Google Calendar Integration Setup

### Get Calendar ID

1. Create a dedicated Google Calendar

- Go to Google Calendar
- On the left panel, click the "+" next to “Other calendars” → Create new calendar
- Name it something like Stanley Events Calendar
- Save it
- Create events under this calendar

2. Make the calendar public

- Go to the calendar’s Settings
- Under “Access permissions for events” → Check Make available to public
- Copy the Calendar ID under “Integrate calendar”
- Format looks like: c_xxxxxxxxxxxxxxxxxxxxxxxxxxx@group.calendar.google.com

### Why this is not set up using a Stanley College staff account

Due to admin-level restrictions on our Stanley Google Workspace:
• Calendar access and sharing options are limited;
• Staff-created calendars cannot be made publicly visible to everyone (outside the organization).

To allow public access (so the events can be seen by external visitors without logging in), I used a personal Google account to create and share the calendar.

Once Stanley’s admin permissions are updated, this integration can be migrated to an official calendar account.
