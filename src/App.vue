<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang='less'>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@import 'assets/css/reset.css';

body {
  font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  line-height: 1.2;
}

.clearfix:before,
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #56a5ce;
}
a:hover {
  text-decoration: underline;
}
.btn {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}
.btn-primary {
  background-color: #56a5ce;
  box-shadow: 0px 3px 0px #368ebb;
  color: #fff;
  border: 0;
}
p, li {
  font-size: 16px;
  line-height: 167%;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
</style>
