# Munana Health website

The official Munana Health informational website, covering specialist gynaecological care, medical education, Dr Joseph Shava's professional profile and contact information.

## Work on the website in Codespaces

1. Open the repository on GitHub.
2. Select **Code**, then **Codespaces**, then **Create codespace on main**.
3. In the Codespaces terminal, run `npm run dev`.
4. Open the forwarded **Munana Health preview** on port 3000.

The website files are inside `dist/`:

- `dist/index.html` contains the page content.
- `dist/styles.css` controls the design and responsive layout.
- `dist/script.js` controls the mobile navigation and footer year.
- `dist/assets/` contains the logo and photographs.

## Publish changes

Changes pushed to the `main` branch are automatically published through GitHub Pages. The publishing workflow is stored in `.github/workflows/deploy-pages.yml`.

Before committing, run:

```bash
npm run check
```
