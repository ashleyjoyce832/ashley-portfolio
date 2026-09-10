# Ashley Joyce Portfolio Site

A static, single-page portfolio built with plain HTML/CSS/JS. No build step, no dependencies to install. Open `index.html` in a browser and it works.

## Files

```
index.html      : all page content and structure
styles.css      : all styling
script.js       : mobile nav toggle, typewriter hero effect, footer year, carousel arrows
assets/images/  : photos, graphics, and video poster frames
assets/videos/  : the client reels, already included and playable
assets/pdfs/    : drop your PDFs here (see list below)
```

## 1. Two quick placeholder fixes

Open `index.html` and search for these two spots, then swap in your real info:

- `mailto:your.email@example.com` (Contact section) to your real email
- `https://www.linkedin.com/in/your-linkedin-handle` (Contact section) to your real LinkedIn URL

## 2. Notes on the current structure

- **Hero / landing**: typewriter animation on your name plus a 10-photo scrapbook border built from the images you picked (Brilliant flatlay and magazines, Chi Omega bid day / collections / grid / license plate, both Australia magazine covers, the skincare shot, and the butterflies graphic). The outer four hide below 1400px so nothing crowds.
- **About / Get to Know Me**: now uses your real headshot.
- **Clean Beauty Research**: soft pink background so the whole capstone reads as one section. Market Research product audit (L'Oréal Paris vs. ILIA, EWG scores, inline SVG chart), The Basics, Key Findings, then Brilliant with your real product mockups, logo, photoshoot and campaign visuals, plus the DCC and Skinny Confidential references beside the influencer list.
- **Agency Habitat**: cover photo, internship summary, and four scrolling carousels of your real client reels: Juus, Greenlight, Skincare & Trend, and Local Clients & Habitat's Socials (17 clips total, including Wok Star, Fort Worth Optometry, Van Leeuwen for The Hill, Bumble Bee Yoga, Add Some Color, Conversation Behind the Aesthetics, and Flying Away).
- **Work**: J.O. Agency email + social, Chi Omega (real photos, the style guide, and all six top reels with view counts), Sunsible (campaign posters + the Instagram posts plan), Online Communities research, Roxo media relations, plus four new cards: Cook Children's health communications, Roxo leadership + the North Texas LEAD rebrand, the Airbnb.org Ukraine crisis-comms case study, and the "Care As You Carry" maternal health concept.
- **Writing**: J.O. Agency blog, Cook Children's Halloween article, two Fort Worth Business Press pieces, TCU study abroad blog.
- **Passions**: three experience cards (CorePower fitness instruction with video, boutique retail and marketing at Frock Shop and an athleisure boutique, with the giveaway campaign and two clips, and Ash Bash Designs banners), then the Mapbox hometown map and the Sydney travel magazine with its real covers.
- Every section has a floating arrow at its bottom edge that jumps to the next.
- Site-wide rule: no em dashes anywhere in the copy.

## 3. Still needs files from you

These spots show a labeled placeholder box until you drop the file into `assets/images/` with the exact filename:

| Filename | Where |
|---|---|
| `email-newsletters.jpg` | Work, J.O. Agency email marketing |
| `social-strategy.jpg` | Work, J.O. Agency social strategy |
| `media-relations.jpg` | Work, media relations (see note below) |
| `hometown-map.jpg` | Passions, Mapbox map screenshot |
| `google-trends-chart.jpg` | Clean Beauty Research, Key Findings |
| `market-size-chart.jpg` | Clean Beauty Research, Key Findings |

**Note on the Don Artemio / Día de los Muertos images:** the "PR & Marketing JO" folder wouldn't transfer because the "&" in the folder name breaks the file bridge. Rename it to "PR and Marketing JO" and I can pull those in.

Also still open: the podcast audio and the Tecovas research report both went missing from the connected folders mid-transfer, and three Instagram links from the Habitat section aren't yet matched to specific clips.

## 4. PDFs

Drop these into `assets/pdfs/` with these exact filenames:

| Filename | Where it's linked |
|---|---|
| `ashley-joyce-resume.pdf` | About section, "Download résumé" button |
| `clean-beauty-research-report.pdf` | Clean Beauty Research, "Download report" button |
| `generational-myths-report.pdf` | Work, Online Communities research |
| `dia-de-los-muertos-press-release.pdf` | Work, media relations |
| `fort-worth-business-press-brand-strategy.pdf` | Writing, Fort Worth Business Press |
| `fort-worth-business-press-digital-campaigns.pdf` | Writing, Fort Worth Business Press |

If you don't have a PDF for a link yet, either drop it in later (the link just 404s until then) or delete that `<a>` from `index.html`.

## 5. Hosting it

This is a plain static site, so any of these work:

- **GitHub Pages** (free, matches your other project sites): create a repo, push these files, enable Pages in repo settings.
- **Netlify / Vercel**: drag-and-drop the whole folder onto their dashboard.
- **Your own domain**: upload via FTP or your hosting control panel. Just keep the `assets/` folder structure intact relative to `index.html`.

**A note on file size**: the videos are real files, re-encoded from HEVC to H.264 so they play in every browser. That puts the zip around 30 MB. If that's ever a problem, `assets/videos/` is the thing to swap for lighter versions or links.
