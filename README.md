# Kociak z Bajki*PL - Cat Breeding Website

A modern, SEO-friendly website for a Ragdoll cat breeding business, built with Astro and Decap CMS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── admin/           # Decap CMS admin panel
│   │   ├── config.yml   # CMS configuration
│   │   └── index.html   # Admin entry point
│   └── images/          # Uploaded images
├── src/
│   ├── components/      # Reusable components
│   ├── content/         # Content collections (CMS managed)
│   │   ├── cats/        # Cat profiles (Kototeka)
│   │   ├── litters/     # Litter announcements (Mioty)
│   │   ├── gallery/     # Photo gallery
│   │   └── pages/       # Static pages
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── netlify.toml         # Netlify deployment config
└── package.json
```

## 🎨 Theme

The website uses a "Modern Fairytale" theme with:
- **Primary colors:** Lavender, violet, soft purple
- **Accent color:** Rose gold
- **Fonts:** Cormorant Garamond (headings), Nunito (body)

## 📝 Content Management (CMS)

### Accessing the Admin Panel

1. Deploy to Netlify
2. Enable Netlify Identity in your Netlify dashboard
3. Invite yourself as a user
4. Access the CMS at `yoursite.com/admin/`

### Managing Content

The CMS allows you to manage:

- **Kototeka (Cats):** Add/edit cat profiles with photos, descriptions, pedigree info
- **Mioty (Litters):** Manage litter announcements with kitten details
- **Galeria (Gallery):** Upload and organize photos
- **Strony (Pages):** Edit static page content

### Local CMS Development

To test the CMS locally:

1. Install `npx decap-server`
2. Uncomment the proxy backend in `public/admin/config.yml`
3. Run `npx decap-server` in one terminal
4. Run `npm run dev` in another terminal
5. Access `http://localhost:4321/admin/`

## 🌐 Deployment to Netlify

### First-time Setup

1. Push your code to GitHub
2. Connect the repository to Netlify
3. Netlify will auto-detect Astro and configure the build

### Enable CMS Authentication

1. Go to Netlify Dashboard → Site Settings → Identity
2. Click "Enable Identity"
3. Under "Registration preferences" → select "Invite only"
4. Under "Services" → enable "Git Gateway"
5. Go to Identity tab → Invite users (invite yourself)
6. Check your email and set up your password

### Custom Domain

1. Go to Domain Settings in Netlify
2. Add your custom domain (e.g., `kociakzbajki.pl`)
3. Configure DNS as instructed
4. Enable HTTPS (automatic with Netlify)

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (meta tags, sitemap, structured data)
- ✅ Fast loading (static HTML generation)
- ✅ CMS for easy content management
- ✅ Contact form (Netlify Forms)
- ✅ Photo gallery with lightbox
- ✅ Polish language

## 🔧 Customization

### Changing Colors

Edit the theme colors in `src/styles/global.css`:

```css
@theme {
  --color-lavender-500: #9b8aac;
  --color-rose-gold: #d4a5a5;
  /* ... */
}
```

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import the Layout component
3. Add the page to the navigation in `src/components/Header.astro`

### Adding New Content Types

1. Define the schema in `src/content.config.ts`
2. Add the collection to `public/admin/config.yml`
3. Create the corresponding pages

## 📞 Support

For questions about the website, contact the developer.

---

Built with ❤️ using [Astro](https://astro.build) and [Decap CMS](https://decapcms.org)
