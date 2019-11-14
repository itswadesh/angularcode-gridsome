<template>
  <div class="posts">
    <div
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
    >
      <a :href="edge.node.path">{{edge.node.title}}</a>
    </div>
  </div>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Angularcode - Latest web technology tutorials with working examples"
  }
};
</script>
