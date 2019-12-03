<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo() {
    return {
      title:
        this.$page.tag.title +
        " - Tutorials about Angular, ReactJS, PHP, NodeJS, VueJS",
      meta: [
        {
          name: "description",
          content:
            this.$page.tag.title +
            " - Angularcode Programming Blog - Tutorials about Angular, ReactJS, PHP, NodeJS, VueJS"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>

