<template>
  
    <a class="franlist " 
      :href="link">
      <img :src='require(`@/assets/images/${img}`)' alt="">
      <span>{{title}}</span>
    </a>
  
</template>

<script>
  export default {
    props:['link','img','title']
  }
</script>

<style>

.franlist {
  position: relative;
  display: block;
  text-align: center;
}

.franlist img {
  width: auto;
  height: 324px;
}

.franlist span {
  position: relative;
  display: block;
  margin-top: 20px;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
@media all and (max-width:1000px){
  .franlist img {
    height: 32.4vw;
  }

  .franlist span {
    margin-top: 2vw;
    font-size: 15px;
    white-space: nowrap;
  }
}

</style>