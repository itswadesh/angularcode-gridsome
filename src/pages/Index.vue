<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    <div class="fx center">
      <!-- List posts -->
      <div class="posts">
        <PostCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>
      <!-- <RightSidebar /> -->
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
import RightSidebar from "~/components/RightSidebar.vue";

export default {
  components: {
    Author,
    PostCard,
    RightSidebar
  },
  metaInfo: {
    title: "Latest web technology tutorials with working examples",
    meta: [
      { name: "author", content: "Swadesh Behera" },
      {
        key: "description",
        name: "description",
        content:
          "Latest tutorials in web technology with live URL and working code at github"
      },
      {
        property: "og:title",
        content: "Latest web technology tutorials with working examples"
      },
      {
        property: "og:image",
        content: "https://www.angularcode.com/mobile-app-development.jpg"
      },
      {
        property: "og:description",
        content:
          "Latest tutorials in web technology with live URL and working code at github"
      }
    ]
  }
};
</script>