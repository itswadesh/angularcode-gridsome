<script>
// import Adsense from "~/components/Adsense.vue";
export default {
  data() {
    return {
      formData: {}
    };
  },
  components: {
    // Adsense
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>
<template>
  <div class="rightside">
    <div class="subscription-box">
      <div>
        Subscribe my updates via <b>Email </b>
      </div>
      <div>
        <form
          name="subscribers"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="form-name"
            value="subscribers"
          />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div class="sender-info fx">
            <input
              class="subscribe-email"
              placeholder="youremail@example.com"
              type="email"
              name="email"
              v-model="formData.email"
            />
            <button
              class="button green"
              name="subscribe"
              type="submit"
            >Subscribe</button>
          </div>
        </form>
      </div>
      <!-- <form
          action="https://feedburner.google.com/fb/a/mailverify"
          method="post"
          class="fx"
        ><input
            class="subscribe-email" placeholder="youremail@example.com"
            id="femail"
            name="email"
            type="text"
            
          ><input
            name="uri"
            type="hidden"
            value="angularcode"
          ><input
            name="loc"
            type="hidden"
            value="en_US"
          ><button
            class="button green"
            name="sign up"
            type="submit"
          >Subscribe</button></form> -->
      <!-- </div> -->
      <!-- <div class="marginfive">
        <div>
          <a
            href="https://feeds2.feedburner.com/angularcode"
            title="itswadesh feed"
          ><img
              alt="feed"
              height="26"
              id="fcount"
              src="https://feeds2.feedburner.com/~fc/angularcode?bg=f2a0bb&amp;fg=000000&amp;anim=0&amp;label=Readers"
              width="88"
            ></a>
        </div>
      </div> -->
      <div class="clearboth"></div>

    </div>
    <iframe
      id="twitter-widget-0"
      scrolling="no"
      frameborder="0"
      allowtransparency="true"
      class="twitter-follow-button twitter-follow-button-rendered"
      style="position: static; visibility: visible; width: 212px; height: 20px;"
      title="Twitter Follow Button"
      src="https://platform.twitter.com/widgets/follow_button.2d991e3dfc9abb2549972ce8b64c5d85.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=itswadesh&amp;show_count=true&amp;show_screen_name=true&amp;size=m&amp;time=1573718937027"
      data-screen-name="itswadesh"
    ></iframe>
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcodenx2%2F&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=169430647069214"
      width="340"
      height="220"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"
    ></iframe>
    <a
      target="_blank"
      href="http://preview.codecanyon.net/item/progressive-single-page-ecommerce-app-using-vuejs/full_screen_preview/20596887"
    >
      <img src="https://s3.envato.com/files/236941986/banner.png">
    </a>
    <div class="side_box vcard">
      <h3>Most Popular Posts</h3>
      <ul
        class="section"
        id="addsections7"
      >
        <li
          v-for="edge in $static.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        >
          <a :href="edge.node.path">{{edge.node.title}}</a>
        </li>
      </ul>
    </div>
    <div class="section-links">
      <h3>Categories</h3>
      <div class="spacer"></div>
      <div class="site-reviews f45">
        <ul
          v-for="tag in $static.tags.edges"
          :key="tag.node.id"
        >
          <li><a :href="tag.node.path">{{tag.node.title}}</a></li>
        </ul>
      </div>
      <div class="spacer he1"></div>
    </div>
    <div class="section-links">
      <div class="spacer"></div>
      <div class="site-reviews f45">
        <!-- <Adsense
          class="mb-5"
          ad-client="ca-pub-4530554109887102"
          ad-slot="5568432357"
          ad-style="display:block !important;"
          ad-format="auto"
        >
        </Adsense> -->
      </div>
      <div class="spacer he1"></div>
    </div>
    <!-- <iframe
      src="https://www.youtube.com/embed/KtNsGSonhrA"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/pKhGc993kz4"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/WvcnysbRe8w"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/wfP4tXxwF3A"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/IFKuimfFwy4"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/JujwU3yxAj8"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/KQteovedgJc"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/vbG3vIuNcrc"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/JujwU3yxAj8"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe> -->
    <!-- <div class="mr-25 card pk-4">
      <a
        href="https://www.youtube.com/watch?v=pKhGc993kz4&amp;rel=0"
        data-toggle="lightbox"
      >
        <img
          class="img-fluid"
          src="img/1.jpg"
        >
      </a>
      <div class="pt-5">
        <h6 class="text-warning mb-2">
          <strong>Deploy to heroku:</strong>
        </h6>
        <p class="card-para">Arialshop - The progressive ecommerce app</p>
      </div>

    </div> -->
  </div>
</template>

<static-query>
query {
  tags: allTag {
      edges{
          node{
              id,
              title,
              path
          }
      }
  }
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
          id,
        title
        path
      }
    }
  }
}
</static-query>
<style>
iframe {
  margin-bottom: 20px;
}
ul li {
  list-style: none;
  margin: 10px -10px;
}
ul li a {
  font-size: 0.8rem;
}
.rightside {
  margin-left: 1rem;
  vertical-align: text-top;
  width: 340px;
  margin-right: 1rem;
}
@media only screen and (max-width: 1272px) {
  .rightside {
    display: none;
    margin-left: 0;
  }
}
.side_box {
  padding: 10px;
}
.subscription-box {
  margin-bottom: 1rem;
  line-height: 16px;
}
.section-links {
  margin-top: 1rem;
  line-height: 16px;
}
.subscribe-email {
  padding: 14px 20px;
  width: 219px;
  border: none;
  color: #738a94;
  font-size: 0.75rem;
  line-height: 0.75em;
  font-weight: 400;
  letter-spacing: 0.5px;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  border-radius: 8px;
  transition: border-color 0.15s linear;
  -webkit-appearance: none;
  margin-right: 5px;
}
.subscribe-email:focus {
  outline: none;
}
.button {
  margin-bottom: 0;
}
.p5 {
  padding-top: 5px;
}
.buy {
  display: block;
  overflow: auto;
}
.widget-item-control {
  float: right;
  height: 20px;
  margin-top: -20px;
  position: relative;
  z-index: 10;
}
form {
  margin-top: 1rem;
}
</style>