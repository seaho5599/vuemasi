<template>
      <section class="franchiser">
      <div class="inner">
        <div class="franchiser-top">
          <h2>MASIGRAY <b>Franchiser</b></h2>
          <span>마시그래이 신규 매장</span>
        </div>
        <ul class="franchiser-list clearfix">
          <li  v-for="(item, index) in franchDataArr" :key="index">
          <FranchList :link="item.link" :img="item.img" :title="item.title"/>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
import FranchList from '@/components/FranchList.vue'
import { useStore } from 'vuex'
import {computed} from 'vue'
export default {
  components:{
    FranchList
    },
  setup(){
    const store = useStore();
    const franchDataArr = computed(() => store.getters.getFranchData)
    store.dispatch('fetchFranch')

    return{
      franchDataArr
      }
  }
  
}
</script>

<style scoped>
/* franchiser */
.franchiser {
  position: relative;
  display: block;
  background: url('@/assets/images/main-store-bg.png') no-repeat center;
  background-size: cover;
  padding: 100px 0;
}

.franchiser .inner {
  position: relative;
  display: block;

}

.franchiser-top {
  position: relative;
  display: block;
}

.franchiser h2 {
  position: relative;
  display: block;
  font-size: 40px;
  color: #69ccd0;
  font-weight: 300;
  text-align: center;
}

.franchiser h2 b {
  font-weight: 500;
}

.franchiser span {
  position: relative;
  display: block;
  font-size: 20px;
  color: #666;
  text-align: center;
}

.franchiser-list {
  position: relative;
  display: block;
  margin-top: 40px;
}

.franchiser-list li {
  position: relative;
  display: block;
  float: left;
  width: 22%;
  margin-right: 4%;
}

.franchiser-list li:last-child {
  margin-right: 0;
}

.franchiser-list li a {
  position: relative;
  display: block;
  text-align: center;
}

.franchiser-list li a img {
  width: auto;
  height: 324px;
}

.franchiser-list li a span {
  position: relative;
  display: block;
  margin-top: 20px;
  color: #fff;
  text-align: center;
  font-size: 20px;
}

/* 프렌차이즈 반응형 영역 */
@media all and (max-width:1000px) {
  .franchiser {
    padding: 10vw 0;
  }

  .franchiser-top h2 {
    font-size: 30px;
  }

  .franchiser-top span {
    font-size: 15px;
  }

  .franchiser-list {
    margin-top: 4vw;
  }

  .franchiser-list li a img {
    height: 32.4vw;
  }

  .franchiser-list li a span {
    margin-top: 2vw;
    font-size: 15px;
    white-space: nowrap;
  }
}
</style>