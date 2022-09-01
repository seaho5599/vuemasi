const state = {
  mbMenuData : [
    {
      link:'#',
      title:'마시그래이',
      subArr:[
        {
          sublink:'#',
          subtitle:'회사소개'
        },
        {
          sublink:'#',
          subtitle:'연혁'
        },
        {
          sublink:'#',
          subtitle:'CEO인사말'
        },
        {
          sublink:'#',
          subtitle:'BI / 비전'
        },
        {
          sublink:'#',
          subtitle:'오시는길'
        }
      ]
    },
    {
      link:'#',
      title:'메뉴',
      subArr:[
        {
          sublink:'#',
          subtitle:'신메뉴'
        },
        {
          sublink:'#',
          subtitle:'커피'
        },
        {
          sublink:'#',
          subtitle:'음료'
        },
        {
          sublink:'#',
          subtitle:'디저트'
        },
        {
          sublink:'#',
          subtitle:'MD상품'
        }
      ]
    },
    {
      link:'#',
      title:'프랜차이즈',
      subArr:[
        {
          sublink:'#',
          subtitle:'가맹안내'
        },
        {
          sublink:'#',
          subtitle:'가맹절차'
        },
        {
          sublink:'#',
          subtitle:'매장인테리어'
        },
        {
          sublink:'#',
          subtitle:'커피 아카데미'
        },
        {
          sublink:'#',
          subtitle:'가맹상담신청'
        }
      ]
    },
    {
      link:'#',
      title:'매장안내',
      subArr:[
        {
          sublink:'#',
          subtitle:'매장안내'
        }
      ]
    },
    {
      link:'#',
      title:'공지사항',
      subArr:[
        {
          sublink:'#',
          subtitle:'공지사항'
        },
        {
          sublink:'#',
          subtitle:'이벤트'
        }
      ]
    },
    {
      link:'#',
      title:'고객의소리',
      subArr:[
        {
          sublink:'#',
          subtitle:'FAQ'
        },
        {
          sublink:'#',
          subtitle:'Q&amp;A'
        },
        {
          sublink:'#',
          subtitle:'케이터링'
        }
      ]
    },
  ],
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
const actions = {};
const mutations = {};
const getters = {
  getMenuData(state){
    return state.mbMenuData
  },
  getFranchData(state){
    return state.franchData
  }

};
export default { state, actions, mutations, getters }