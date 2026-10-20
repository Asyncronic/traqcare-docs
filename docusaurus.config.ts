import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // Appended to every page title ("Playback | Traqcare Docs"), so keep it short.
  title: 'Traqcare Docs',
  tagline: 'Complete user guide for the Traqcare GPS tracking platform by Skywonder GPS. Real-time vehicle tracking, fleet reports, fuel monitoring, geofencing, alerts, and mobile app documentation.',
  favicon: 'img/favicon-96x96.png',

  future: {
    v4: true,
  },

  url: 'https://docs.traqcare.com',
  baseUrl: '/',
  // Pages are served at /docs/x/; links, canonicals and the sitemap must use the same form (no redirect hop).
  trailingSlash: true,

  organizationName: 'traqcare',
  projectName: 'traqcare-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: true,
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      require.resolve('./plugins/seo-postbuild.js'),
      {
        siteName: 'Traqcare Docs',
        publisher: {'@type': 'Organization', name: 'Skywonder', url: 'https://skywondergps.com'},
        faqRoutes: ['/docs/faq/'],
        sectionLabels: {
          'getting-started': 'Getting started',
          'live-tracking': 'Live tracking',
          playback: 'Playback',
          'routes-and-trips': 'Routes and trips',
          alerts: 'Alerts',
          geofences: 'Geofences',
          'points-of-interest': 'Points of interest',
          reports: 'Reports',
          'fuel-management': 'Fuel management',
          'video-surveillance': 'Video surveillance',
          'device-management': 'Device management',
          'maintenance-and-expenses': 'Maintenance and expenses',
          'user-management': 'User management',
          reseller: 'Reseller',
          settings: 'Settings',
          'support-and-tickets': 'Support and tickets',
          mobile: 'Mobile app',
          faq: 'FAQ',
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Step lists that resume after a screenshot keep their numbers (see src/css/docs-ui.css).
          rehypePlugins: [require('./plugins/rehype-ol-start.js')],
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          exclude: ['internal/**'],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Traqcare Platform Updates & GPS Tracking News',
          blogDescription: 'Latest feature releases, GPS tracking tips, fleet management best practices, and platform updates from Traqcare by Skywonder GPS.',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: ['./src/css/custom.css', './src/css/docs-ui.css'],
        },
        sitemap: {
          changefreq: 'weekly' as const,
          priority: 0.5,
          // Tools and blog listing pages, not content.
          ignorePatterns: ['/search/**', '/blog/tags/**', '/blog/archive/**', '/blog/authors/**', '/blog/page/**'],
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    // ── Google Search Console Verification ──
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'RZHlutp-d1VgjxB1VdH3LGx9au7BsGgUmDXQnhpPqTU',
      },
    },
    // ── SEO Meta Tags ──
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'GPS tracking, fleet management, vehicle tracking, fuel monitoring, geofencing, real-time tracking, Traqcare, Skywonder GPS, fleet analytics, route playback, driver management, GPS tracking software, fleet tracking app, vehicle monitoring system, fuel theft detection, geofence alerts, mobile GPS tracker, OBD tracker, asset tracking, IoT tracking platform',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Skywonder GPS — skywondergps.com',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'publisher',
        content: 'Skywonder GPS',
      },
    },
    // ── GEO / AEO — AI Crawler Hints ──
    {
      tagName: 'meta',
      attributes: {
        name: 'ai-content-description',
        content: 'Traqcare is a GPS tracking and fleet management platform by Skywonder GPS (skywondergps.com). It offers real-time vehicle tracking, route playback, 16+ fleet reports, fuel monitoring with theft detection, geofencing, alerts, driver management, and camera surveillance. Available as web app at track.traqcare.com and mobile apps for iOS and Android.',
      },
    },
    // ── Structured Data — Organization ──
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Skywonder GPS',
        alternateName: 'Traqcare',
        url: 'https://skywondergps.com',
        logo: 'https://docs.traqcare.com/img/logo-dark.png',
        sameAs: [
          'https://skywondergps.com',
          'https://track.traqcare.com',
          'https://play.google.com/store/apps/details?id=com.traqcare.gps_tracking_app',
          'https://apps.apple.com/cn/app/traqcare/id6449219819?l=en',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          url: 'https://skywondergps.com',
          contactType: 'customer service',
        },
      }),
    },
    // ── Structured Data — SoftwareApplication ──
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Traqcare GPS Tracking',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android, iOS',
        description: 'Real-time GPS tracking and fleet management platform with vehicle monitoring, route playback, fuel analytics, geofencing, alerts, and comprehensive fleet reports.',
        url: 'https://track.traqcare.com',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.traqcare.gps_tracking_app',
        author: {
          '@type': 'Organization',
          name: 'Skywonder GPS',
          url: 'https://skywondergps.com',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Contact Skywonder GPS for pricing',
        },
        featureList: [
          'Real-time GPS vehicle tracking',
          'Route playback and history',
          '16+ fleet management reports',
          'Fuel consumption monitoring and theft detection',
          'Geofencing with entry/exit alerts',
          'Driver management and scoring',
          'Camera and video surveillance',
          'Mobile app for iOS and Android',
          'Multi-tenant reseller architecture',
          'White-label branding support',
        ],
      }),
    },
    // ── Structured Data — WebSite with SearchAction (AEO) ──
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Traqcare Documentation',
        url: 'https://docs.traqcare.com',
        description: 'Official documentation and user guide for the Traqcare GPS Tracking & Fleet Management Platform by Skywonder GPS.',
        publisher: {
          '@type': 'Organization',
          name: 'Skywonder GPS',
          url: 'https://skywondergps.com',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://docs.traqcare.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
    // ── Structured Data — BreadcrumbList ──
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Skywonder GPS',
            item: 'https://skywondergps.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Traqcare',
            item: 'https://traqcare.com',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Documentation',
            item: 'https://docs.traqcare.com',
          },
        ],
      }),
    },
    // ── llms.txt link for AI discoverability ──
    {
      tagName: 'link',
      attributes: {
        rel: 'author',
        href: '/llms.txt',
        type: 'text/plain',
      },
    },
    // No site-wide canonical here: Docusaurus writes the right one on every page, and a fixed one pointed every page at the home page.
  ],

  themeConfig: {
    image: 'img/logo-dark.png',
    metadata: [
      // ── Core SEO ──
      {name: 'description', content: 'Official documentation for Traqcare GPS Tracking & Fleet Management Platform by Skywonder GPS. Learn to track vehicles in real-time, manage fleets, monitor fuel, set up geofences, configure alerts, and use the mobile app. 16+ report types, driver management, camera surveillance, and white-label support.'},
      {name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'},
      // ── Open Graph ──
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Traqcare Documentation — GPS Tracking & Fleet Management by Skywonder GPS'},
      {property: 'og:description', content: 'Complete user guide for Traqcare GPS tracking platform. Real-time tracking, fleet reports, fuel monitoring, geofencing, alerts, and mobile app — by Skywonder GPS.'},
      {property: 'og:url', content: 'https://docs.traqcare.com'},
      {property: 'og:site_name', content: 'Traqcare Documentation'},
      {property: 'og:image', content: 'https://docs.traqcare.com/img/logo-dark.png'},
      {property: 'og:locale', content: 'en_US'},
      // ── Twitter Cards ──
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Traqcare GPS Tracking Documentation'},
      {name: 'twitter:description', content: 'Official docs for Traqcare fleet management platform by Skywonder GPS. Vehicle tracking, reports, fuel monitoring, geofencing, and mobile app guide.'},
      // ── GEO tags ──
      {name: 'application-name', content: 'Traqcare GPS Tracking'},
      {name: 'apple-mobile-web-app-title', content: 'Traqcare Docs'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    // Screenshots open full size on click.
    zoom: {
      selector: '.theme-doc-markdown img',
      background: {light: 'rgb(255, 255, 255)', dark: 'rgb(18, 23, 31)'},
      config: {margin: 24},
    },
    navbar: {
      title: 'Traqcare Docs',
      logo: {
        alt: 'Traqcare GPS Tracking Platform',
        src: 'img/traqcare-icon.png',
        href: '/',
        width: 32,
        height: 32,
        style: {borderRadius: '6px'},
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mobileSidebar',
          position: 'left',
          label: 'Mobile App',
        },
        {
          type: 'doc',
          docId: 'faq',
          position: 'left',
          label: 'FAQ',
        },
        {to: '/blog/', label: 'Updates', position: 'left'},
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://track.traqcare.com',
          label: 'Open App',
          position: 'right',
          className: 'navbar-app-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started'},
            {label: 'Live Tracking', to: '/docs/live-tracking'},
            {label: 'Reports & Analytics', to: '/docs/reports'},
            {label: 'Alerts & Geofencing', to: '/docs/alerts'},
            {label: 'Fuel Management', to: '/docs/fuel-management'},
            {label: 'FAQ', to: '/docs/faq'},
          ],
        },
        {
          title: 'Platform',
          items: [
            {label: 'Traqcare Web App', href: 'https://track.traqcare.com'},
            {label: 'Android App (Google Play)', href: 'https://play.google.com/store/apps/details?id=com.traqcare.gps_tracking_app'},
            {label: 'iOS App (App Store)', href: 'https://apps.apple.com/cn/app/traqcare/id6449219819?l=en'},
            {label: 'Device Management', to: '/docs/device-management'},
            {label: 'Mobile App Guide', to: '/docs/mobile/overview'},
          ],
        },
        {
          title: 'Company',
          items: [
            {label: 'Contact Support', href: 'https://track.traqcare.com/ticket'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Traqcare. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
