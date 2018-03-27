<template>
  <div class='desktop clearfix'>
    <div class='top'>
      <span class='circle red'></span>
      <span class='circle yellow'></span>
      <span class='circle green'></span>
      <p class='url'>
        <font-awesome-icon :icon="globeIcon"></font-awesome-icon>
        {{ url }}
      </p>
    </div>
    <div class='body'>
      <a :href='url'>
        <img :src='image'>
      </a>
    </div>
  </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'

export default {
  name: 'desktop-preview',
  components: {
    FontAwesomeIcon
  },
  props: {
    url: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    globeIcon () {
      return faGlobe
    }
  }
}
</script>
<style scoped lang='less'>
.desktop {
  width: 100%;

  .top {
    width: 100%;
    height: 40px;
    padding: 7px;
    border-radius: 4px 4px 0px 0px;
    background: #e8e8e8;
  }

  .url {
    width: 87%;
    height: 26px;
    padding: 2px 8px 0px;
    float: left;
    border-radius: 3px;
    background: #fff;
    font-size: 14px;
    color: #919191;
    margin: 0 0 0 16px;
  }

  .body {
    width: 100%;
    padding: 5px 5px 0 5px;
    background-color: #e8e8e8;
    max-height: 500px;
    overflow: hidden;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}

.circle {
  width: 17px;
  height: 17px;
  float: left;
  border-radius: 100%;
  margin: 6px 0px 0px 8px;

  &.red {
    background-color: #F8605C;
  }

  &.yellow {
    background-color: #FDC041;
  }

  &.green {
    background-color: #35CE4B;
  }
}

@media screen and (max-width: 640px) {
  .desktop {
    .url {
      width: 70%;
    }
  }
}
</style>
