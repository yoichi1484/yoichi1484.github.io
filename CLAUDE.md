# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic website built using the **al-folio** Jekyll theme. The site is automatically built and deployed via GitHub Actions to GitHub Pages whenever changes are pushed to the `main` branch.

## Build and Development Commands

### Local Development

**Using Docker (Recommended):**
```bash
docker compose pull
docker compose up
```
The site will be available at `http://localhost:8080`.

**Legacy (without Docker, no longer officially supported):**
```bash
bundle install
bundle exec jekyll serve
```
The site will be available at `http://localhost:4000`.

### Building for Production

```bash
export JEKYLL_ENV=production
bundle exec jekyll build
```

The built site will be in the `_site/` directory.

### CSS Purging

To remove unused CSS classes:
```bash
npm install -g purgecss
purgecss -c purgecss.config.js
```

### Code Formatting

```bash
npm install
npx prettier --write .
```

## Deployment Architecture

- **Deployment Method:** GitHub Actions automatically deploys to GitHub Pages
- **Trigger:** Pushes to `main` or `master` branch (workflow defined in `.github/workflows/deploy.yml`)
- **Build Process:**
  1. GitHub Action checks out the code
  2. Sets up Ruby 3.3.5 and Python 3.13
  3. Installs ImageMagick for image processing
  4. Runs `bundle exec jekyll build`
  5. Purges unused CSS
  6. Deploys the `_site/` folder to the `gh-pages` branch
  7. GitHub Pages serves the site from `gh-pages` branch

**IMPORTANT:** The `gh-pages` branch is auto-generated. Never manually edit it.

## Key Configuration Files

- `_config.yml` - Main Jekyll configuration (site URL, theme settings, plugins, etc.)
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `package.json` - NPM dependencies (Prettier for code formatting)
- `Gemfile` - Ruby dependencies (Jekyll and plugins)

## Content Structure

- `_pages/` - Static pages (about, CV, etc.)
- `_posts/` - Blog posts in Markdown
- `_projects/` - Project descriptions
- `_bibliography/papers.bib` - Publications (BibTeX format)
- `_data/cv.yml` - CV data (fallback if `assets/json/resume.json` not found)
- `assets/` - Images, PDFs, JavaScript, CSS
- `_sass/` - Sass stylesheets

## Jekyll Plugins in Use

Key plugins (see `_config.yml` for full list):
- `jekyll-scholar` - Bibliography and citations management
- `jekyll-imagemagick` - Responsive image generation
- `jekyll-jupyter-notebook` - Jupyter notebook support
- `jekyll-paginate-v2` - Pagination
- `jekyll-minifier` - HTML/CSS/JS minification
- `jekyll-terser` - JavaScript minification

## Custom Plugins

Custom Ruby plugins in `_plugins/`:
- `cache-bust.rb` - Cache busting for assets
- `external-posts.rb` - External blog post integration
- `google-scholar-citations.rb` - Google Scholar citation counts
- And others for specialized functionality

## Important Notes

### Safe Development Practices

1. **Always test locally before pushing to main** - Pushing to `main` triggers automatic deployment to production
2. **Use Docker for local development** - Ensures consistency with the production environment
3. **The site is published at:** `https://yoichi1484.github.io`
4. **Google Analytics is enabled** with tracking ID: `G-XSH9P77NYP`

### Working with Publications

- Edit `_bibliography/papers.bib` to add/modify publications
- Publications are automatically sorted by year (descending)
- Supported fields: `pdf`, `abstract`, `code`, `arxiv`, `doi`, `html`, and more
- Place PDF files in `assets/pdf/` and reference them in the BibTeX entry

### Working with Blog Posts

- Create new posts in `_posts/` with format: `YYYY-MM-DD-title.md`
- Front matter must include: `layout`, `title`, `date`
- Supports math (MathJax), code highlighting, images, videos, and more

### Image Processing

- ImageMagick is required and automatically creates responsive WebP images
- Configured widths: 480px, 800px, 1400px
- Source images go in `assets/img/`

### Styling and Theming

- Theme color is configurable in `_sass/_themes.scss` via `--global-theme-color`
- Supports light/dark mode toggle
- Uses Bootstrap for responsive layout
