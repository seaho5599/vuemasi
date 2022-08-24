<template>
  <li :id="id">
    <a :href="link">
      <img :src="require(img)" alt="">
      <span>{{title}}</span>
    </a>
  </li>
</template>

<script>
  export default {
    props:['id','link','img','title']
  }
</script>

<style>

</style>