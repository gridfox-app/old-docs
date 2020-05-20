module.exports = {
  title: 'Gridfox Support',
  descirption: 'Gridfox Support and Documentation',
  head: [
    ['link', { rel: "shortcut icon", href: "/assets/images/favicon.ico"}],
    ['meta', { name: "theme-color", content: "#346ace"}],
  ],
  themeConfig: {
    logo: '/assets/images/gridfox-icon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Tables', link: '/tables/' },
      { text: 'Screens', link: '/screens/' },
      { text: 'User Groups', link: '/user-management/' },
      { text: 'Using Gridfox', link: '/using-gridfox/' },
      { text: 'Launch App', link: 'https://app.gridfox.com' },
    ],
    sidebar: 'auto'
  }
}