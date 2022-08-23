<template>
  <div class="wrap">
    <GoTop />
    <FixMenu />
    <MobileMenu :mbmenudata="mbMenuData"/>
    <HeaderView :gnbmenu="gnbMenu"/>
    <VisualView />
    <ItemsView />
    <BeverateView />
    <FranchView />
    <SnsView />
    <FooterView />
  </div>
</template>

<script>
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

export default {
  components: {
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
  setup(){
    const mbMenuData = [
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
    ]
  const gnbMenu = [
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
    ]
    return{
      mbMenuData,gnbMenu
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

/* 공통(재사용) */
.inner {
  position: relative;
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* float를 해제 */
.clearfix::after {
  content: '';
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}
</style>
