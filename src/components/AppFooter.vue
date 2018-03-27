<template>
  <footer class='clearfix'>
    <div class='container'>
      <div class='footer-left'>
        <p>© 2018 DongMyeong Seo. All rights reserved.</p>
      </div>
      <nav class='footer-social'>
        <ul>
          <li>
            <a href='https://github.com/seodongmyeong'>
              <font-awesome-icon :icon="githubIcon" size='2x'></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href='http://fb.com/c1audeseo'>
              <font-awesome-icon :icon="facebookIcon" size='2x'></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href='https://kr.linkedin.com/in/dongmyeong-seo-19703a110'>
              <font-awesome-icon :icon="linkedinIcon" size='2x'></font-awesome-icon>
            </a>
          </li>
          <li>
            <a href='mailto:ehdaudtj@gmail.com'>
              <font-awesome-icon :icon="atIcon" size='2x'></font-awesome-icon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faAt from '@fortawesome/fontawesome-free-solid/faAt'

export default {
  name: 'app-footer',
  components: {
    FontAwesomeIcon
  },
  computed: {
    githubIcon () {
      return faGithub
    },
    facebookIcon () {
      return faFacebook
    },
    linkedinIcon () {
      return faLinkedin
    },
    atIcon () {
      return faAt
    }
  }
}
</script>
<style scoped>
footer {
  margin-top: 75px;
}
.container {
  padding: 40px 0px 50px;
  border-top: 1px solid #e5e5e5;
}
.footer-left {
  float: left;
}
.footer-social {
  float: right;
}
p, a {
  text-align: center;
  color: #ababab;
}
li {
  display: inline-block;
  margin-left: 16px;
}
@media only screen and (max-width: 768px) {
  .footer-left,
  .footer-social {
    float: none;
    text-align: center;
  }
  .footer-social {
    margin-top: 10px;
  }
}
</style>
