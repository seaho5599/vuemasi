<template>
  <ModalView />
  <div class="wrap">
    <GoTop />
    <FixMenu />
    <MobileMenu />
    <HeaderView />
    <VisualView />
    <ItemsView />
    <BeverateView />
    <FranchView />
    <SnsView />
    <FooterView />
  </div>
</template>

<script>
  import ModalView from '@/components/ModalView.vue'
  import GoTop from '@/components/GoTop.vue';
  import FixMenu from '@/components/FixMenu.vue';
  import MobileMenu from '@/components/MobileMenu.vue';
  import HeaderView from '@/components/HeaderView.vue';
  import VisualView from '@/components/VisualView.vue';
  import ItemsView from '@/components/ItemsView.vue';
  import BeverateView from '@/components/BeverateView.vue';
  import FranchView from '@/components/FranchView.vue';
  import SnsView from '@/components/SnsView.vue';
  import FooterView from '@/components/FooterView.vue';
  // 공통으로 관리되는 state 를 참조한다.
  // 여기서는 ations를 호출하는 용도로 사용.
  // vuex를 참조하는 객체를 접근하려고 하면
  // 아래 구문으로 접근한다.
  import {
    useStore
  } from 'vuex'

  export default {
    name: 'App',
    components: {
      ModalView,
      GoTop,
      FixMenu,
      MobileMenu,
      HeaderView,
      VisualView,
      ItemsView,
      BeverateView,
      FranchView,
      SnsView,
      FooterView
    },
    setup() {
      // 외부에 있는 menu.json 파일을 불러오기 위해서
      // actions 를 활용한다
      const store = useStore();
      // actions 의 메소드(function)를 사용할때
      // store.dispatch('메소드명')
      console.log('step1 : despatch')
      store.dispatch('fetchMenudata')
      
      

      return {
        
      }
    }
  }
</script>

<style>
  @charset 'utf-8';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: top;
    border: 0;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }

  body {
    font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 1.6;
    color: #888;
    overflow-x: hidden;
  }

  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }
</style>