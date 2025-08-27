import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Motues\'s Note',
  favicon: 'favicon/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://note.motues.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Motues', // Usually your GitHub org/user name.
  projectName: 'NotePage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap',
      type: 'text/css',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Pacifico',
      type: 'text/css',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Meddon',
      type: 'text/css',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Motues\'s Note',
      // logo: {
      //   alt: 'Logo',
      //   src: 'img/Motues.jpg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '笔记',
        },
        {
          to: 'https://blog.motues.top',
          label: '博客',
          position: 'left',
        },
        {
          to: 'https://github.com/Motues',
          position: 'right',
          className: 'github-icon'
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Made with ❤️ by <a href="https://Motues.top">Motues</a>. <br/> Powered by <a target="_blank" href="https://docusaurus.io/">Docusaurus</a> and <a target="_blank" href="https://pages.github.com/">GitHub</a>. <br/> © 2024 - ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
