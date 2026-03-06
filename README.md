# IGNITX — Instagram Console Toolkit

> A free, open-source browser console toolkit for Instagram power users.  
> No extensions. No login required. No data leaves your browser.  
> Made by **[Keremify](https://github.com/keremify)**

---

## ⚡ What is IGNITX?

IGNITX is a collection of powerful JavaScript scripts you paste directly into your browser's Developer Console while on Instagram. It gives you control over your account that Instagram's native UI doesn't offer — all without installing anything, creating an account, or trusting a third-party app with your credentials.

Everything runs locally in your browser. No servers. No tracking. No data collection.

---

## 🛠️ Tools & Features

### 👥 Follow Tools

| # | Tool | Description |
|---|------|-------------|
| 01 | **Non-Followers Detector** | Scans your full following list and outputs everyone who doesn't follow you back, with profile links. |
| 02 | **Follow a User's Followings** | Bulk follow everyone a target account follows. Built-in delays keep actions human-like. |
| 03 | **Mass Unfollow Non-Followers** | Automatically unfollows non-followers. Supports a whitelist to protect accounts you want to keep. |
| 04 | **Export Followers / Following to CSV** | Downloads your complete followers or following list as a `.csv` file with usernames, names, and profile URLs. |

### ❤️ Engagement Tools

| # | Tool | Description |
|---|------|-------------|
| 05 | **Like Tagged Posts of a User** | Automatically likes all posts a target user is tagged in, up to your set limit. |
| 06 | **Like Posts by Hashtag** | Likes the most recent posts under any hashtag to drive niche engagement back to your profile. |

### 📊 Analytics Tools

| # | Tool | Description |
|---|------|-------------|
| 07 | **Engagement Rate Calculator** | Analyzes any public account's last 12 posts and returns avg likes, avg comments, and a rated ER%. |
| 08 | **Ghost Follower Finder** | Cross-references your follower list against your recent post likers to surface inactive/bot followers. |
| 09 | **Banned Hashtag Checker** | Checks a list of hashtags against Instagram's API and flags any that are banned or restricted. |

---

## 🚀 How to Use

1. Open **[instagram.com](https://instagram.com)** and make sure you're logged in
2. Press `F12` or `Ctrl+Shift+J` (Windows) / `⌘+⌥+I` (Mac) to open DevTools
3. Click the **Console** tab
4. If you see a warning about pasting, type `allow pasting` and press Enter first
5. Copy any script from the IGNITX website, paste it into the console, and press **Enter**
6. If an error occurs after waiting for 1 minutes, try to close your AdBlockers.

---

## 📋 Action Limits (Important)

To keep your account safe, never exceed these limits. Instagram tracks behavior patterns and will issue temporary or permanent blocks if you do.

| Action | Max per Hour | Max per Day |
|--------|-------------|------------|
| ❤️ Likes | 60 | 500 |
| ➕ Follows | 100 | 200 |
| ➖ Unfollows | 100 | 200 |
| 🔁 Follow + Unfollow combined | 100 | 200 total |

> **Note:** Read-only tools (detector, export, analytics) have no limits — they don't perform any write actions.

---

## ⚠️ Safety Rules

- **Never run two action scripts at the same time** — parallel actions compound your rate and trigger bot detection
- **New accounts (under 3 months) should use read-only tools only** — new accounts are flagged far more aggressively
- **Wait at least 1 hour between sessions** — even if you didn't hit the limit, Instagram tracks behavioral patterns over time
- **If you receive an action block, stop and wait** — pushing through a temporary block escalates it to a permanent ban
- **Test on a secondary account first** before running action tools on your main account

---

## ⚖️ Disclaimer

IGNITX is an independent open-source project created for **educational and personal productivity purposes only**.

- Not affiliated with, endorsed by, or connected to **Instagram** or **Meta** in any way
- Use of automation tools may violate [Instagram's Terms of Service](https://help.instagram.com/581066165581870)
- By using any script in this repository, **you accept full responsibility** for any consequences to your account
- The developer (**Keremify**) assumes **no liability** for account restrictions, bans, or data loss

---

## 🗂️ Project Structure

```
ignitx/
└── index.html      # The entire app — single self-contained file
└── README.md       # This file
```

---

## 🌐 Live Site

👉 **[Soon](https://instagram.com/keremify)**

---

## 📄 License

MIT License — free to use, modify, and distribute with attribution.

---

<div align="center">
  Made with ⌨️ by <strong>Keremify</strong> &nbsp;·&nbsp; Not affiliated with Instagram or Meta &nbsp;·&nbsp; Use responsibly
</div>
