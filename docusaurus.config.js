module.exports = {
  title: 'pe•ple documentation',
  tagline: 'The Community Plugin for Growth',
  url: 'https://havepeople.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/images/favicon.png',
  organizationName: 'pe-ple',
  projectName: 'landing-page',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️',
      },
    },
    navbar: {
      title: '👩‍💻',
      logo: {
        alt: 'pe•ple',
        src: 'images/logo-padded.svg',
        href: '/docs/',
      },
      items: [
        {
          href: '/',
          label: 'Homepage',
          position: 'right',
        },
        {href: 'https://havepeople.com/?people', label: 'Demo', position: 'right'},
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pe-ple/landing-page/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
