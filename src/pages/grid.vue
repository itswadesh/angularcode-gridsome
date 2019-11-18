<template>
  <div class="wrapper">
    <!-- <div class="box a">
      <p> </p>
    </div> -->
    <div class="box b">
      <p>Content</p>
    </div>
    <div class="box c">
      <p>Right</p>
    </div>
    <!-- <div class="box e">
      <p></p>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.box {
  background-color: lightblue;
}
/* .a {
  grid-column: 1 / 2;
} */
/* .b {
  grid-column: 2 / 4;
}
.c {
  grid-column: 4 / 5;
} */
/*.e {
  grid-column: 6 / 7;
} */
</style>