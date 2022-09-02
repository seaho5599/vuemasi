import axios from 'axios'

const state = {
  mbMenuData : [],
  franchData :[
    {
      
      link: '#',
      img: require('@/assets/images/shop1.jpg'),
      title: '합천점'
    },
    {
      
      link: '#',
      img: require('@/assets/images/shop2.jpg'),
      title: '신천점'
    },
    {
      
      link: '#',
      img: require('@/assets/images/shop3.jpg'),
      title: '복현푸르지오점'
    },
    {
      
      link: '#',
      img: require('@/assets/images/shop4.jpg'),
      title: '대곡점'
    },
  ]
};
const actions = {
  // 메뉴 데이터 json 로딩
  fetchMenudata( { commit } ){
  // 외부 json 파일 로딩
    axios.get('/data/menu.json')
    .then(response => {
      // 서버 또는 파일이 결과가 있을때
      // console.log("axios: ", response.data);
      console.log('step 2 : axis ', response.data);
      // mutation을 실행한다.
      commit('MENU_DATA_INIT', response.data);
      // context.commit();
    })
    .catch(err => console.log(err))
  }
};
const mutations = {
  MENU_DATA_INIT(state, payload){
    state.mbMenuData = payload
    console.log('step3 : mutation:', payload)
  }
};
const getters = {
  getMenuData(state){
    console.log('step4 : getters')
    return state.mbMenuData
      
  },
  getFranchData(state){
    return state.franchData
  }
  
};
export default { state, actions, mutations, getters }