<template>
  <Layout :show-logo="false">

    <div class="fx notification">
      <h1>Subscription successful</h1>
    </div>
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="fx center">
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
    title: "Angularcode - Latest web technology tutorials with working examples"
  }
};
</script>
<style>
</style>