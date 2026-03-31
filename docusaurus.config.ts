import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Traqcare Documentation',
  tagline: 'GPS Tracking & Fleet Management Platform — User Guide & Help Center',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.traqcare.com',
  baseUrl: '/',

  organizationName: 'traqcare',
  projectName: 'traqcare-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Traqcare Updates',
          blogDescription: 'Latest updates, feature releases, and tips for the Traqcare platform.',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly' as const,
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'GPS tracking, fleet management, vehicle tracking, fuel monitoring, geofencing, real-time tracking, Traqcare',
      },
    },
  ],

  themeConfig: {
    image: 'img/traqcare-social-card.png',
    metadata: [
      {name: 'description', content: 'Official documentation for Traqcare GPS Tracking & Fleet Management Platform. Learn to track vehicles, manage fleets, monitor fuel, set up geofences, and more.'},
      {name: 'og:title', content: 'Traqcare Documentation — GPS Tracking & Fleet Management'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'new_features',
      content: 'New: Fuel Chart improvements & Playback enhancements are live! <a href="/blog">Read more</a>',
      backgroundColor: '#1565c0',
      textColor: '#fff',
      isCloseable: true,
    },
    navbar: {
      title: 'Traqcare',
      logo: {
        alt: 'Traqcare Logo',
        src: 'img/logo.svg',
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
        {to: '/blog', label: 'Updates', position: 'left'},
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
            {label: 'Reports', to: '/docs/reports'},
            {label: 'Alerts', to: '/docs/alerts'},
          ],
        },
        {
          title: 'Features',
          items: [
            {label: 'Geofences', to: '/docs/geofences'},
            {label: 'Fuel Management', to: '/docs/fuel-management'},
            {label: 'Device Management', to: '/docs/device-management'},
            {label: 'Mobile App', to: '/docs/mobile/overview'},
          ],
        },
        {
          title: 'Platform',
          items: [
            {label: 'Traqcare Website', href: 'https://traqcare.com'},
            {label: 'Open Web App', href: 'https://track.traqcare.com'},
            {label: 'Android App', href: 'https://play.google.com/store/apps/details?id=com.traqcare.gps_tracking_app'},
            {label: 'iOS App', href: 'https://apps.apple.com/cn/app/traqcare/id6449219819?l=en'},
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
