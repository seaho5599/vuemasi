<template>
  <a href="#" class="mb-bt">
    <span></span>
    <span></span>
    <span></span>
  </a>
  <div class="mb-dim"></div>
  <div class="mb-wrap">

    <a href="#" class="mb-close"></a>

    <div class="mb-sns">
      <ul class="mb-sns-list clearfix">
        <li><a href="#"><img :src="require('@/assets/images/sns_blog.png')" alt="블로그"></a></li>
        <li><a href="#"><img :src="require('@/assets/images/sns_insta.png')" alt="인스타"></a></li>
        <li><a href="#"><img :src="require('@/assets/images/sns_facebook.png')" alt="페이스북"></a></li>
      </ul>
    </div>
    <ul class="mb-menu">
      <li v-for="(item, index) in mbMenuData" :key="index">
        <a :href="item.link">{{item.title}}</a>
        <ul class="mb-submenu">
          <li v-for="(subitem, subindex) in item.subArr" :key="subindex">
            <a :href="subitem.sublink">{{subitem.subtitle}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<script>
  import {
    
    computed,
    onUpdated
  } from 'vue';
  import $ from 'jquery';
  import {
    useStore
  } from 'vuex'

  export default {

    setup() {
      const store = useStore();
      const mbMenuData = computed(() => store.getters.getMenuData)

      

      onUpdated(() => {
      

        // 모바일 메뉴 기능
        // 1. 펼침메뉴 기능
        let mb_mainmenu = $('.mb-menu > li > a');
        let mb_submenu = $('.mb-submenu');

        // 이벤트 바인딩 : 이벤트를 추후에 연결시켜준다.
        $.each(mb_mainmenu, function (index) {
          $(this).click(function (event) {
            // href 를 막아준다.
            event.preventDefault();
            // 클릭하면 현재 포커스 클래스가 있는지 검토
            let temp = $(this).hasClass('mb-menu-focus');
            if (temp) {
              // 포커스 색상 적용해제
              $(this).removeClass('mb-menu-focus');
              //아이콘 모션 해제
              $(this).removeClass('mb-icon-rot');
              // 펼쳐진 해당 서브메뉴를 닫아준다.
              mb_submenu.eq(index).hide();
            } else {
              // 일단 모두 숨겨라
              mb_submenu.hide();
              // 일단 모든 포커스 색상을 해제한다.
              mb_mainmenu.removeClass('mb-menu-focus');
              //아이콘을 원래대로 돌려라
              mb_mainmenu.removeClass('mb-icon-rot');
              // 포커스 색상 적용하기
              $(this).addClass('mb-menu-focus');
              //아이콘을 돌리자
              $(this).addClass('mb-icon-rot');
              // 클릭된 번호만 보여라
              mb_submenu.eq(index).show();
            }

          });
        });
        // 모바일 메뉴 보이기 기능
        let mb_dim = $('.mb-dim'); // 가림막
        let mb_bt = $('.mb-bt'); // 햄버거
        mb_bt.click(function (event) {
          // a 태그의 href 를 막는다.
          event.preventDefault();
          // 배경 보여주기
          mb_dim.show();
          // 메뉴 보여지는 과정
          mb_wrap.addClass('mb-wrap-open');
        });

        // 모바일 메뉴 숨기기 기능
        let mb_close = $('.mb-close');
        let mb_wrap = $('.mb-wrap');
        mb_close.click(function (event) {
          // a 태그의 href 막아준다.
          event.preventDefault();
          // 배경을 숨김다.
          mb_dim.hide();
          // 주메뉴 색상을 제거한다.
          mb_mainmenu.removeClass('mb-menu-focus');
          // 서브메뉴 모두 닫는다.
          mb_submenu.hide();
          // 사라지는 모션 실행
          mb_wrap.removeClass('mb-wrap-open');
        });

        //반응형 처리
        $(window).resize(function () {
          let temp = $(window).width();
          if (temp > 760) {
            mb_dim.hide();
            mb_wrap.removeClass('mb-wrap-open');
            mb_mainmenu.removeClass('mb-menu-focus');
            mb_mainmenu.removeClass('mb-icon-rot');
            mb_submenu.hide();
          }
        });
      })
      
      return {
        mbMenuData
      }
    }
  }
</script>

<style scoped>
  .mb-bt {
    position: fixed;
    left: 20px;
    top: 30px;
    display: none;
    width: 22px;
    height: 21px;
    z-index: 99997;
  }

  .mb-bt::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;
  }

  .mb-bt span {
    position: absolute;
    left: 0;
    top: 9px;

    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;
  }

  .mb-bt::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;
  }

  /* 모바일 가림막 */
  .mb-dim {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100vw;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9998;
  }

  /* 모바일 메뉴내용 */
  .mb-wrap {
    position: fixed;
    left: -320px;
    top: 0;
    display: block;
    z-index: 99999;
    width: 320px;
    height: 100vw;
    background-color: #fff;
    transition: left 0.5s;
  }

  .mb-wrap-open {
    left: 0;

  }

  .mb-close {
    position: absolute;
    right: 20px;
    top: 20px;
    display: block;
    width: 22px;
    height: 21px;
    background: url('@/assets/images/btn_close2.png') no-repeat center;
    z-index: 9;
  }


  .mb-sns {
    position: relative;
    display: block;
    padding: 20px 20px;
  }

  .mb-sns-list {
    position: relative;
    display: block;
  }

  .mb-sns-list li {
    position: relative;
    display: block;
    float: left;
    margin-right: 5px;
  }

  .mb-sns-list li a {
    position: relative;
    display: block;
  }

  .mb-menu {
    position: relative;
    display: block;
  }

  .mb-menu>li {
    position: relative;
    display: block;
    border-bottom: 1px solid #eee;
  }

  .mb-menu>li>a {
    position: relative;
    display: block;
    line-height: 50px;
    color: #222;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 500;
  }

  .mb-menu>li>a::after {
    content: '';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 13px;
    height: 9px;
    background: url('@/assets/images/lnb_bl.png') no-repeat center;
    transition: transform 0.5s;
  }

  .mb-icon-rot::after {
    transform: translateY(-50%) rotate(180deg) !important;
  }

  /* 포커스 유지 */
  .mb-menu-focus {
    color: #4abbc3 !important;
  }

  .mb-submenu {
    position: relative;
    display: none;
    background-color: #f2f2f2;
  }

  .mb-submenu li {
    position: relative;
    display: block;
  }

  .mb-submenu li a {
    position: relative;
    display: block;
    line-height: 40px;
    color: #222;
    font-size: 16px;
    padding-left: 30px;
  }

  @media all and (max-width:760px) {
    .menu>li {
      padding: 0 15px;
    }

    .mb-dim {
      display: none;
    }

    .mb-submenu {
      display: none;
    }

    @media all and (max-width:700px) {
      .mb-bt {
        display: block;
      }
    }
  }
</style>