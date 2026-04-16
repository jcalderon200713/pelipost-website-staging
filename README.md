# Pelipost Website Staging

**Live staging site:** https://jcalderon200713.github.io/pelipost-website-staging/

---

## For the Marketing Team: How to Edit This Site

You don't need any developer tools. Everything happens in your browser on GitHub.com.

### Step 1: Find the file you want to edit

| What you want to change | File to edit |
|---|---|
| Homepage | `index.html` |
| Products page | `products.html` |
| For Facilities page | `facilities.html` |
| Our Story page | `story.html` |
| Shared styles (colors, spacing, fonts) | `style.css` or `base.css` |
| Animations & mobile menu logic | `app.js` |

### Step 2: Edit the file on GitHub

1. Go to the file on GitHub (click the filename above)
2. Click the **pencil icon** (✏️) in the top-right of the file view
3. Make sure you're on the **`staging`** branch (it should be by default)
4. Make your changes — or paste in code from ChatGPT
5. Click **"Commit changes"** (green button)
6. Add a short description of what you changed
7. Click **"Commit directly to the `staging` branch"**

### Step 3: See your changes live

Wait about 60 seconds, then refresh the staging site:
https://jcalderon200713.github.io/pelipost-website-staging/

Your changes are live. That's it.

---

## Using ChatGPT to Make Changes

### Best practice: Give ChatGPT the full file

1. Open the file on GitHub
2. Click the **"Copy raw file"** button (📋 icon)
3. Paste the entire file contents into ChatGPT
4. Tell ChatGPT what you want to change
5. ChatGPT will give you the updated file
6. Go back to GitHub, click the pencil icon, **select all** (Ctrl+A / Cmd+A), and **paste** the new version
7. Commit the change

### Tips for talking to ChatGPT

- **Be specific:** "Change the hero headline to 'Send Love, Not Just Mail'" works better than "make the homepage better"
- **Reference sections:** "In the testimonials section, add a new review from David L."
- **For style changes:** "Make the 'Request a Demo' button bigger" or "Change the orange color to a deeper amber"
- **Always paste the full file** — don't try to describe what's in it

---

## Page URLs

| Page | Staging URL |
|---|---|
| Homepage | [/pelipost-website-staging/](https://jcalderon200713.github.io/pelipost-website-staging/) |
| Products | [/pelipost-website-staging/products.html](https://jcalderon200713.github.io/pelipost-website-staging/products.html) |
| For Facilities | [/pelipost-website-staging/facilities.html](https://jcalderon200713.github.io/pelipost-website-staging/facilities.html) |
| Our Story | [/pelipost-website-staging/story.html](https://jcalderon200713.github.io/pelipost-website-staging/story.html) |

---

## Branch Rules

| Branch | Purpose | Who can edit | Auto-deploys? |
|---|---|---|---|
| `staging` | Team edits & review | Everyone | ✅ Yes — GitHub Pages |
| `main` | Approved / production-ready | Joe only (via PR) | No |

**The rule:** Edit freely on `staging`. When Joe approves, he merges to `main`.

---

## File Structure

```
pelipost-site/
├── index.html          ← Homepage
├── products.html       ← Products Hub
├── facilities.html     ← For Facilities
├── story.html          ← Our Story
├── base.css            ← CSS variables, colors, spacing
├── style.css           ← Component styles (nav, footer, cards, etc.)
├── app.js              ← Animations, mobile menu, scroll effects
└── assets/
    ├── logo-black.webp     ← Nav logo
    ├── logo-white.webp     ← Footer logo
    ├── founders.png        ← Joe & Becky photo
    ├── hero-phone.png      ← Phone mockup
    ├── app-store.webp      ← App Store badge
    ├── google-play.webp    ← Google Play badge
    ├── favicon.png         ← Browser tab icon
    └── ...                 ← Other images
```

## Brand Quick Reference

- **Tagline:** Mail and Connection, Simplified
- **Font:** DM Sans (loaded from Google Fonts)
- **Primary color:** Dark Teal `#13526f`
- **CTA color:** Orange `#ffa400`
- **Facility sections:** Navy Slate `#0a2e45`
- **Never use the word "inmate"** — say "incarcerated loved one" or "loved one"
