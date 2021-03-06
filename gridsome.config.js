module.exports = {
  siteName: 'Angularcode',
  siteUrl: 'https://www.angularcode.com',
  titleTemplate: '%s',
  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Angularcode Programming Blog',
          feed_url: 'https://www.angularcode.com/rss.xml',
          site_url: 'https://www.angularcode.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://www.angularcode.com' + node.path,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
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
        icon: 'static/logo.png', // must be provided
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
