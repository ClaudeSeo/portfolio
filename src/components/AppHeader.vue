<template>
  <header class='clearfix'>
    <div class='container'>
      <a href='/' class='avatar'>
        <img src='@/assets/img/avatar.jpeg'>
      </a>
      <div class='info'>
        <h1 id='name'>
          <a href='/'>서동명</a>
        </h1>
        <p class='description'>
          ehdaudtj@gmail.com
        </p>
      </div>
      <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/#about'>About</router-link>
        <router-link to='/#career'>Career</router-link>
        <router-link to='/#project'>Project</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'app-header'
}
</script>
<style scoped>
header {
  padding: 20px 0;
}
nav {
  float: right;
  margin-top: 23px;
  font-size: 18px;
  font-weight: 200;
}
nav a {
  margin-left: 20px;
  text-align: center;
}
.info {
  float: left;
}
.avatar {
  width: 70px;
  height: 70px;
  float: left;
  margin-right: 15px;
}
.avatar img {
  max-width: 100%;
  border-radius: .25rem;
}
#name {
  margin: 0;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 1px;
}
.description {
  margin: -5px 0 0 0;
  font-size: 16px;
}

@media only screen and (max-width: 768px) {
  header {
    text-align: center;
  }
  .avatar {
    float: none;
    display: block;
    margin: 0 auto;
  }
  .info {
    float: none;
  }
  nav {
    float: none;
  }
}
</style>
