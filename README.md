# Personal Site Starter (Free + No Backend)

A minimal, mobile-friendly starter for a personal website. Pure HTML/CSS/JS — perfect for GitHub Pages (free).

## How to use

1. **Download** this folder (or the ZIP).
2. Open `index.html` in your browser to preview locally.
3. Edit text: replace "Your Name", add your links, and update project cards.
4. Optional: tweak styles in `style.css` and small behavior in `script.js`.

## Publish for free (GitHub Pages)

### A. Create a GitHub repo
- Sign in to GitHub and create a repository named **`<your-username>.github.io`** for a personal site (e.g., `sanalpaulose.github.io`), **or** any name if you want a subpath like `/my-site`.
- Keep it **Public**.

### B. Upload your files
- Easiest: Drag-and-drop the files into the GitHub web UI, commit.
- Or via command line:
  ```bash
  git init
  git add .
  git commit -m "Initial site"
  git branch -M main
  git remote add origin https://github.com/<your-username>/<repo>.git
  git push -u origin main
  ```

### C. Enable Pages
- Go to **Settings → Pages**.
- For a `<username>.github.io` repo: it auto-publishes from `main`.
- For any other repo: set **Build and deployment** source to **Deploy from a branch**, branch `main`, folder `/root`.
- Wait a minute; your site will appear at:
  - `https://<your-username>.github.io/` (personal site), or
  - `https://<your-username>.github.io/<repo>/` (project site).

### D. Update
- Edit locally → commit → push. GitHub deploys automatically.

## Customize ideas (free)
- Replace the placeholder photo with your own image in `/images/` (create the folder); update the `<img>` src.
- Add more project cards.
- Create new sections: Blog, Notes, Now.
- Add a `CNAME` only if you later buy a custom domain (optional).

## FAQ
- **Do I need hosting?** No. GitHub Pages is free for static sites.
- **Will this cost money?** No, unless you buy a custom domain later.
- **Can I add a contact form?** Without a backend, use a `mailto:` link or a free form service (watch quotas/limits).
