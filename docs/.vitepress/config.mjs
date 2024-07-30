import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Deplware Scripts",
  description: "JavaScript Web APIs for Deplware Integration",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Public Keys', link: 'https://deplware.com' },
      { text: 'Scripts', items: [
        { text: 'Analytics', link: '/analytics' },
        { text: 'Feedback', link: '/feedback' },
        { text: 'Release notes', link: '/release-notes' },
        { text: 'License', link: '/license' },
        { text: 'Activity', link: '/activity' },
        { text: 'Pricing table', link: '/pricing-table' },
      ] },
    ],

    sidebar: [
      {
        text: 'Analytics',
        items: [
          { text: 'Get Started', link: '/analytics' },
          { text: 'Install', link: '/analytics/install' },
          { text: 'Usage', link: '/analytics/install' },
          { text: 'Trigger', link: '/analytics/install' },
          { text: 'Customize', link: '/analytics/install' },
        ]
      },
      {
        text: 'Analytics',
        items: [
          { text: 'Get Started', link: '/analytics' },
          { text: 'Install', link: '/analytics/install' },
          { text: 'Usage', link: '/analytics/install' },
          { text: 'Trigger', link: '/analytics/install' },
          { text: 'Customize', link: '/analytics/install' },
        ]
      },
      {
        text: 'Analytics',
        items: [
          { text: 'Get Started', link: '/analytics' },
          { text: 'Install', link: '/analytics/install' },
          { text: 'Usage', link: '/analytics/install' },
          { text: 'Trigger', link: '/analytics/install' },
          { text: 'Customize', link: '/analytics/install' },
        ]
      },
      {
        text: 'Analytics',
        items: [
          { text: 'Get Started', link: '/analytics' },
          { text: 'Install', link: '/analytics/install' },
          { text: 'Usage', link: '/analytics/install' },
          { text: 'Trigger', link: '/analytics/install' },
          { text: 'Customize', link: '/analytics/install' },
        ]
      },
      {
        text: 'Analytics',
        items: [
          { text: 'Get Started', link: '/analytics' },
          { text: 'Install', link: '/analytics/install' },
          { text: 'Usage', link: '/analytics/install' },
          { text: 'Trigger', link: '/analytics/install' },
          { text: 'Customize', link: '/analytics/install' },
        ]
      },
      {
        text: 'Analytics',
        items: [
          { text: 'Get Started', link: '/analytics' },
          { text: 'Install', link: '/analytics/install' },
          { text: 'Usage', link: '/analytics/install' },
          { text: 'Trigger', link: '/analytics/install' },
          { text: 'Customize', link: '/analytics/install' },
        ]
      },
      {
        text: 'Analytics',
        items: [
          { text: 'Get Started', link: '/analytics' },
          { text: 'Install', link: '/analytics/install' },
          { text: 'Usage', link: '/analytics/install' },
          { text: 'Trigger', link: '/analytics/install' },
          { text: 'Customize', link: '/analytics/install' },
        ]
      },
      {
        text: 'Analytics',
        items: [
          { text: 'Get Started', link: '/analytics' },
          { text: 'Install', link: '/analytics/install' },
          { text: 'Usage', link: '/analytics/install' },
          { text: 'Trigger', link: '/analytics/install' },
          { text: 'Customize', link: '/analytics/install' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/deplware/scripts' },
    ]
  }
})
