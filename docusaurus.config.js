// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '天空之镜 HevSpecu',
  tagline: '天空之镜 - 提供高速镜像服务、智能工具与技术资源',
  favicon: 'favicon.png',

  // Set the production url of your site here
  url: 'https://hevspecu.hxcn.space',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  organizationName: 'HevSpecu',
  projectName: 'hevspecu-site',

  onBrokenLinks: 'throw',

  // Markdown configuration
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  headTags: [
    // SEO Meta Tags
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '天空之镜 HevSpecu - 提供GitHub加速镜像、DockerHub加速镜像、高速图床服务Gastigado、智能图片管理工具Aiamgine、时序同笺课表管理等优质服务，为开发者提供高效便捷的技术解决方案。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: '天空之镜,HevSpecu,GitHub镜像,DockerHub镜像,加速服务,图床,Gastigado,Aiamgine,时序同笺,SDNUChronoSync,课表管理,开源镜像,开发者工具,技术服务,镜像加速,图片管理',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'HevSpecu',
      },
    },
    // Open Graph / Facebook
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://hevspecu.hxcn.space/',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: '天空之镜 HevSpecu - 高速镜像服务与智能工具平台',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: '提供GitHub加速镜像、DockerHub加速镜像、高速图床服务Gastigado、智能图片管理工具Aiamgine等优质服务，为开发者提供高效便捷的技术解决方案。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://hevspecu.hxcn.space/favicon.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'zh_CN',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale:alternate',
        content: 'en_US',
      },
    },
    // Twitter
    {
      tagName: 'meta',
      attributes: {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'twitter:url',
        content: 'https://hevspecu.hxcn.space/',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'twitter:title',
        content: '天空之镜 HevSpecu - 高速镜像服务与智能工具平台',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'twitter:description',
        content: '提供GitHub加速镜像、DockerHub加速镜像、高速图床服务Gastigado、智能图片管理工具Aiamgine等优质服务。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'twitter:image',
        content: 'https://hevspecu.hxcn.space/favicon.png',
      },
    },
    // 中国社交媒体分享优化
    // QQ移动端分享
    {
      tagName: 'meta',
      attributes: {
        itemprop: 'name',
        content: '天空之镜 HevSpecu - 高速镜像服务与智能工具平台',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        itemprop: 'description',
        content: '提供GitHub加速镜像、DockerHub加速镜像、高速图床服务Gastigado、智能图片管理工具Aiamgine等优质服务。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        itemprop: 'image',
        content: 'https://hevspecu.hxcn.space/favicon.png',
      },
    },
    // 微博分享
    {
      tagName: 'meta',
      attributes: {
        property: 'weibo:title',
        content: '天空之镜 HevSpecu - 高速镜像服务与智能工具平台',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'weibo:description',
        content: '提供GitHub加速镜像、DockerHub加速镜像、高速图床服务等优质服务。',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'weibo:image',
        content: 'https://hevspecu.hxcn.space/favicon.png',
      },
    },
    // Canonical URL
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://hevspecu.hxcn.space/',
      },
    },
    // Theme color
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#0DE4CD',
      },
    },
    // Additional robots meta
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-org/your-project/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-org/your-project/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'favicon.png',
      metadata: [
        {name: 'keywords', content: '天空之镜,HevSpecu,GitHub镜像,DockerHub镜像,加速服务,图床,Gastigado,Aiamgine,时序同笺,SDNUChronoSync'},
        {name: 'description', content: '天空之镜 HevSpecu - 提供GitHub加速镜像、DockerHub加速镜像、高速图床服务等优质服务'},
      ],
      navbar: {
        title: '文档站点',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/projects', label: '项目', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/about', label: '关于', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '项目',
                to: '/projects',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '关于',
                to: '/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HevSpecu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HevSpecu 天空之镜. Built with ❤️`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.vsDark,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
