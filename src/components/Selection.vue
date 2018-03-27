<template>
  <ul class='career-project'>
    <li class='active'>Vue.js 도입</li>
    <li>배차 자동화</li>
    <li>사용자 행동 분석 툴 개발</li>
  </ul>
</template>
<script>
</script>
<style scoped lang='less'>
.career-project {
  display: flex;
  list-style-type: none;
  padding: 0;

  li {
  margin: 0 10px;
  border-bottom: 3px solid #56a5ce;
  color: black;
  cursor: pointer;
  }

  li.active {
    color: #56a5ce
  }

  li:first-child {
    margin-left: 0;
  }

  li:last-child {
    margin-right: 0;
  }
}
</style>
