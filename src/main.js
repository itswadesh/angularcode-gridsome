// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  Vue.use(VueDisqus)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.script.push(
    // {
    //   'data-ad-client': 'ca-pub-4530554109887102',
    //   type: 'text/javascript',
    //   src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   async: true
    // },
    {
      type: 'text/javascript',
      src: '//code.tidio.co/bbqdjxermhlxw1szfobabtweql1ahm8j.js',
      async: true
    }
  )
}