<template>
  <div class="hello">
    {{userName}}!
  </div>
</template>

<script>
  export default {
    name: 'hello',
    props: {
      userName: String
    }
  }
</script>

<style>
  .hello {
    color: red;
  }
</style>
