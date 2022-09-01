import { createStore } from 'vuex';
// 모든 Vue 화면에서 공유되어질 state(데이터)관리 목적
import masiStore from './modules/masiStore'
export default createStore({
  // 데이터를 모아서 관리하는 객체 
  modules:{
    masiStore
  }
});