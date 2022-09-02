import axios from 'axios'

const state = {
  mbMenuData : [],
  franchData :[]
};
const actions = {
  // 메뉴 데이터 json 로딩
  fetchMenudata( { commit } ){
  // 외부 json 파일 로딩
    axios.get('/data/menu.json')
    .then(response => {
      // 서버 또는 파일이 결과가 있을때
      // console.log("axios: ", response.data);
      // console.log('step 2 : axis ', response.data);
      // mutation을 실행한다.
      commit('MENU_DATA_INIT', response.data);
      // context.commit();
    })
    .catch(err => console.log(err))
  },
  fetchFranch({commit}){
    axios.get('/data/franchdata.json')
    .then(response => {
      commit('FRANCH_INIT', response.data);
    })
  }
};
const mutations = {
  MENU_DATA_INIT(state, payload){
    state.mbMenuData = payload
    // console.log('step3 : mutation:', payload)
  },
  FRANCH_INIT(state, payload){
    state.franchData = payload
  }
};
const getters = {
  getMenuData(state){
    console.log('step4 : getters', state.mbMenuData)
    return state.mbMenuData
      
  },
  getFranchData(state){
    return state.franchData
  }
  
};
export default { state, actions, mutations, getters }