module.exports = {
  siteName: 'Angularcode',
  siteUrl: 'https://www.angularcode.com',
  siteDescription: 'Latest web technology tutorials with working examples.',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Angularcode',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Angularcode',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: 'author.jpg', // must be provided
        msTileImage: '',
        msTileColor: '#666600'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-49421899-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark: {
          plugins: [
            ['@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders': ['Youtube', 'Twitter', 'Gist'],
            }],
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  }
}
