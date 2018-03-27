<template>
  <section class='career'>
    <section class='bg-img'>
      <h1 class='title centered'>ONE MOMENT</h1>
    </section>
    <section class='container'>
      <article>
        <div class='article-top'>
          <h2 class='article-title'>
            웹 서비스 리뉴얼
          </h2>
        </div>
        <div class='article-body'>
          <p>
            기존 Django Jinja2 로 개발된 서비스를 Vue.js (SPA) 로 리뉴얼 작업을 진행했습니다.<br>
            리뉴얼 하기 전 대비 약 2배 이상의 성능 개선 효과를 보였으며, 대부분 서버 부하가 감소되었습니다.<br><br>
            장바구니, 사용자 페이지, 기념일, 정기구독 페이지들을 담당하여 작업했습니다.<br><br>
          </p>
          <a href='https://1moment.co.kr' class="btn btn-primary">홈페이지 바로가기</a>
        </div>
      </article>
    </section>
    <section class='bg-grary'>
      <div class='container'>
        <article>
          <div class='article-top'>
            <h2 class='article-title'>배차 자동화</h2>
          </div>
          <div class='article-body'>
          <p>
            배송 협력사에 운영팀이 수기로 접수하는 방식이 아닌, 제작 시간과 배송거리를 자동으로 계산하여 <br>
            배차하는 시스템을 개발하여 98% 이상의 배차 성공률을 달성했습니다.<br><br>
          </p>
          <a href='http://www.fntoday.co.kr/news/articleView.html?idxno=160263' class="btn btn-primary">관련뉴스</a>
        </div>
        </article>
      </div>
    </section>
    <section class='container'>
      <article>
        <div class='article-top'>
          <h2 class='article-title'>정기구독</h2>
        </div>
        <div class='article-body'>
        <p>
          사용자가 선택한 주기로 자동으로 결제하고 꽃을 배송해주는 서비스 개발했습니다.
        </p>
        <img src='@/assets/img/1moment-subscription.png'>
      </div>
      </article>
    </section>
    <section class='bg-grary'>
      <div class='container'>
        <article>
          <div class='article-top'>
            <h2 class='article-title'>사용자 행동 분석 시스템 개발</h2>
          </div>
          <div class='article-body'>
          <p>
            홈페이지내에서 발생하는 사용자들의 모든 이벤트를 트래킹한 후 분석서버로 전송하여 사용자들의 구매패턴, 재구매 주기 등을 분석합니다.<br>
            분석한 내용들을 D3.js, tui.chart 라이브러리를 사용하여 시각화 하였습니다.<br>
            또한 사용자의 구매 패턴 혹은 연령 성별 등을 토대로 리마케팅하는 기능을 개발했습니다.
          </p>
        </div>
        </article>
      </div>
    </section>
  </section>
</template>
<script>
export default {

}
</script>
<style lang='less' scoped>
section {
  min-height: 100px;
}

.career > section {
  padding-top: 70px;
  padding-bottom: 70px;
}

.bg-grary {
  background-color: #f5f5f5
}

img {
  width: 100%;
  height: auto;
}

.bg-img {
  min-height: 420px;
  position: relative;
  background-position: 50% 50%;
  width: 100%;
  background-size: cover;
  background-image: url('../../assets/img/onemoment-bg.jpg');

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .title {
    color: #fff;
    font-size: 48px;
  }
}
article {
  .article-title {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 300;
  }

  p {
    color: #5e5e5e;
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .bg-img .title {
    font-size: 36px;
  }

  article {
    .article-title {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>
