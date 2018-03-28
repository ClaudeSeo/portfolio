<template>
  <section class='container'>
    <article id='about'>
      <div class='article-header'>
        <h1>About</h1>
        <div class='small-bar'></div>
      </div>
      <p>
        언제 어디서든 자기계발에 힘쓰는 개발자 입니다.<br>
        새로운 기술에 관심이 많으며, 협업하길 좋아하고 좋은 코드를 만들어내려고 노력합니다.<br>
        Back-End 개발을 주로 하며, Front-End 개발에도 관심이 많아 다양한걸 시도해봅니다.<br>
        현재는 Vue.js 에 관심이 많습니다.<br><br>
        고등학교 때 개발을 제대로 접해 안드로이드 어플리케이션 개발을 시작으로 현재는 Back-End 개발자로 재직 중입니다.<br>
      </p>
    </article>
    <article id='career'>
      <div class='article-header'>
        <h1>Career</h1>
        <div class='small-bar'></div>
      </div>
      <div class='row career-proejct'>
        <div class='col-sm-12 col-md-8'>
          <desktop-preview
            url='https://1moment.co.kr'
            :image='require("../assets/img/1moment.png")'></desktop-preview>
        </div>
        <div class='col-sm-12 col-md-4'>
          <h3 class='career-title'>원모먼트</h3>
          <p class='career-attributions'>
            Back-End 개발<span class='bullet'>•</span>
            Front-End 개발<span class='bullet'>•</span>
            사용자 행동 분석 툴 개발
          </p>

          <p>기존 Django Jinja2 로 되어있는 서비스 전체를 Vue.js(SPA)를 도입하여 리뉴얼 했습니다.</p>
          <ul>
            <li>Vue.js(SPA) 최초 도입</li>
            <li>비동기 처리로 서비스 속도 및 사용자 경험 개선</li>
            <li>Front-End E2E 테스트 코드 작성</li>
            <li>기술 스택: Vue.js, Bootstrap4, Bootstrap3, vue-resource</li>
          </ul>
          <router-link :to='{name: "OnemomentPage"}' class="btn btn-primary">
            상세보기 <font-awesome-icon :icon="arrowRightIcon"></font-awesome-icon>
          </router-link>
        </div>
      </div>
      <div class='row career-proejct'>
        <div class='col-sm-12 col-md-8'>
          <desktop-preview
            url='https://shapengine.com'
            :image='require("../assets/img/shapengine.png")'></desktop-preview>
        </div>
        <div class='col-sm-12 col-md-4'>
          <h3 class='career-title'>ATEAM VENTURES</h3>
          <p class='career-attributions'>
            Back-End 개발<span class='bullet'>•</span>
            Front-End 개발<span class='bullet'>•</span>
            3D 프린터 리모트 컨트롤러 개발
          </p>
          <p>사내 서비스 개발, 쇼핑몰 개발 및 온라인 3D 프린팅 서비스를 개발했었습니다.</p>
          <ul>
            <li>Creatable Labs 쇼핑몰 개발</li>
            <li>3D 프린터 정품 인증 서비스 개발</li>
            <li>온라인 3D 프린팅 서비스 (Shapengine) 개발</li>
            <li>회사 홈페이지 (Wordpress) 개발</li>
            <li>3D Model Viewer 개발</li>
          </ul>
          <router-link :to='{name: "AteamVenturePage"}' class="btn btn-primary">
            상세보기 <font-awesome-icon :icon="arrowRightIcon"></font-awesome-icon>
          </router-link>
        </div>
      </div>
    </article>
    <article id='project'>
      <div class='article-header'>
        <h1>Project</h1>
        <div class='small-bar'></div>
      </div>
      <div class='row'>
        <div class='col-sm-12 col-md-4' v-for='index in [0, 1, 2]' :key='index'>
          <project-item
            v-for='(project, index) in getProjects(index)'
            :key='index'
            :image='project.image'
            :title='project.title'
            :description='project.description'
            :date='project.date'
            :contents='project.contents'></project-item>
        </div>
      </div>
    </article>
  </section>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight'
import DesktopPreview from '@/components/DesktopPreview'
import ProjectItem from '@/components/ProjectItem'

export default {
  components: {
    DesktopPreview,
    FontAwesomeIcon,
    ProjectItem
  },
  computed: {
    arrowRightIcon () {
      return faArrowRight
    }
  },
  methods: {
    getProjects (num) {
      return this.projects.filter((elem, index) => {
        return index % 3 === num
      })
    }
  },
  data () {
    return {
      projects: [
        {
          title: 'ArtArchive',
          date: '2017.07 ~ 2018.03',
          description: '예술 작품들의 다양한 정보들을 기록해두는 서비스',
          image: '//via.placeholder.com/500x300?text=ArtArchive',
          contents: [
            'Back-End 개발',
            'Front-End 개발'
          ]
        },
        {
          title: '와일드 일랙트램',
          date: '2017.09 ~ 2018.02',
          description: '저압전기를 사용하는 모노레일을 제어, 관제하는 서비스',
          image: require('../assets/img/electram.png'),
          contents: [
            '관제 시스템 Back-End 및 모노레일 제어 시스템 개발'
          ]
        },
        {
          title: '우리동네 특성화고',
          date: '2017.09 ~ 2018.02',
          description: '특성화고등학교 정보들을 정리해서 제공해주는 서비스',
          image: require('../assets/img/wedongne.png'),
          contents: []
        },
        {
          title: '뉴스테이지',
          date: '2017.04',
          description: 'IT 뉴스 모음집 서비스',
          image: require('../assets/img/newstage.png'),
          contents: [
            'Back-End 개발',
            'Front-End 개발',
            'Back-End 스택: Python, Flask',
            'Front-End 스택: Vue.js'
          ]
        },
        {
          title: '만선',
          date: '2016.09 ~ 2017.03',
          description: '한국의 독립 음악, 출판물 등의 디지털 컨텐츠를 판매하는 온라인 스토어',
          image: require('../assets/img/maansun.png'),
          contents: [
            'Back-End 개발',
            'https://maansun.com'
          ]
        },
        {
          title: '핫도그',
          date: '2015.06',
          description: '여행을 갈 때 집에 남아있는 반려동물을 위해 근처 애견호텔을 찾아주는 어플리케이션',
          image: require('../assets/img/hotdog.png'),
          contents: [
            '안드로이드 어플리케이션 개발',
            'Back-End 개발',
            'Back-End 스택: PHP, MariaDB',
            'Client 스택: Android'
          ]
        },
        {
          title: '현자타임',
          date: '2014.11',
          description: '헤어짐의 아픔을 겪는 사람들에게 위로의 메시지를 보내주는 어플리케이션',
          image: require('../assets/img/hyunja.png'),
          contents: [
            '안드로이드 어플리케이션 개발',
            'Back-End 개발',
            'Back-End 스택: PHP, MySQL',
            'Client 스택: Android'
          ]
        },
        {
          title: '전기안전 미리미리',
          date: '2014.07 ~ 08',
          description: '전기 안전과 관련되어 다양한 정보와 사례를 제공해주는 서비스',
          image: require('../assets/img/mirimiri.png'),
          contents: [
            '안드로이드 어플리케이션 개발',
            'Back-End 개발',
            'Back-End 스택: PHP, MySQL',
            'Client 스택: Android'
          ]
        },
        {
          title: '리얼 꿀팁',
          date: '2014.05 ~ 10',
          description: '페이스북의 다양한 페이지들의 정보를 모아서 공유하는 서비스',
          image: require('../assets/img/realhoneytip.png'),
          contents: [
            '안드로이드 어플리케이션 개발',
            'Back-End 개발',
            'Back-End 스택: PHP, MySQL',
            'Client 스택: Android'
          ]
        },
        {
          title: '힐링팟',
          date: '2014.03 ~ 10',
          description: '사용자가 익명으로 메시지를 작성하여 전송하면 받은이의 꽃밭에 씨앗이 심어지고, 일정시간 동안 꾸준히 관리해주면 꽃이 자라 메시지가 나오는 서비스',
          image: require('../assets/img/healingpot.png'),
          contents: [
            '안드로이드 어플리케이션 개발',
            'Back-End 개발',
            'Back-End 스택: PHP, MySQL',
            'Client 스택: Android'
          ]
        },
        {
          title: 'K-POP TOP 100 Music Player',
          date: '2013.11',
          description: 'SK Planet 오픈API를 사용하여 최신 인기곡 100곡을 선정한 뒤, Youtube로 연동해주는 서비스',
          image: require('../assets/img/kpop.png'),
          contents: [
            '안드로이드 어플리케이션 개발',
            '앱스토어에 업로드하여 운영',
            'Client 스택: Android'
          ]
        },
        {
          title: '으르렁',
          date: '2013.11',
          description: 'GPS를 기반으로 숙박업소를 검색 해주는 서비스',
          image: require('../assets/img/growl.png'),
          contents: [
            '안드로이드 어플리케이션 개발',
            'Client 스택: Android'
          ]
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
article {
  margin-bottom: 50px;
}

.article-header {
  display: inline-block;
  margin-bottom: 16px;
}

.article-header h1 {
  font-size: 36px;
  font-weight: 500;
  margin: 0;
}

#career {
  .career-title {
    font-size: 30px;
    line-height: 1.3;
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 0;
  }
  .career-attributions {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .career-proejct {
    margin-bottom: 60px;
  }
}

.small-bar {
  width: 100%;
  height: 1px;
  position: relative;
  border-bottom: 5px solid black;
}
ul {
  list-style-type: circle;
  -webkit-padding-start: 1em;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
}
ul li {
  margin-top: 5px;
}
</style>
