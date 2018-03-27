<template>
  <section class='career'>
    <section class='bg-color'>
      <h1 class='title centered'>ATEAM VENTURES</h1>
    </section>
    <section class='container'>
      <article>
        <div class='article-top'>
          <h2 class='article-title'>
            Shapengine 웹 서비스 개발
          </h2>
        </div>
        <div class='article-body'>
          <p>
            3D 프린터를 보유한 사람이 프린터를 등록하고 공유해두면, 출력자가 원하는 프린터를 선택해 제품을 출력하고 배송을 받을 수 있는 서비스를 개발했습니다.<br>
            Django, Flask, Node.js 를 사용해 개발했으며 관리자 페이지, 모델 출력 가격 산출, 3D 모델 뷰어 라이브러리, Cloud Storage, Socket.io 를 이용한 실시간 채팅 시스템 개발을 담당했습니다.<br><br>
          </p>
          <iframe width='100%' height='500' src="https://www.youtube.com/embed/VUdyt-MN7uM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </article>
    </section>
    <section class='bg-grary'>
      <div class='container'>
        <article>
          <div class='article-top'>
            <h2 class='article-title'>Creatable Labs 웹사이트 개발</h2>
          </div>
          <div class='article-body'>
          <p>
            워드프레스를 사용하여 자사 보급형 프린터(D2) 를 판매하는 사이트를 개발했습니다.<br>
            서비스 소개, 상품 페이지, 주문 및 결제 모듈 연동을 담당했으며, 기술 포럼 및 백업 시스템을 구축했습니다.<br><br>
          </p>
          <a href='https://creatablelabs.com' class="btn btn-primary">홈페이지 바로가기</a>
            <a href='https://forum.creatablelabs.com' class="btn btn-primary">기술포럼 바로가기</a>
        </div>
        </article>
      </div>
    </section>
    <section class='container'>
      <article>
        <div class='article-top'>
          <h2 class='article-title'>3D 프린터 리모트 컨트롤러 개발</h2>
        </div>
        <div class='article-body'>
        <p>
          3D 프린터와 컴퓨터를 연결하여 웹에서 3D 프린터를 제어하는 컨트롤러 소프트웨어를 개발했습니다.<br>
          Shapengine 과 연동하여 프린터 소유자에게 주문이 들어오면 최적화된 옵션으로 자동 슬라이싱되어 프린팅하도록 개발했습니다.
        </p>
      </div>
      </article>
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

.bg-color {
  min-height: 420px;
  position: relative;
  background-position: 50% 50%;
  width: 100%;
  background-color: #02c1f7;

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
