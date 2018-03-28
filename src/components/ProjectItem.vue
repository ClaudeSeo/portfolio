<template>
  <div class='project-item'>
    <div class='item-wrapper'>
      <img :src='image'>
      <div class='info-wrapper'>
        <figure class='item-info'>
          <p class='date'>{{ date }}</p>
          <h2>{{ title }}</h2>
          <div class='contents'>
            <p><strong>{{ description }}</strong></p>
            <ul>
              <li v-for='(content, index) in contents' :key='index'>{{ content }}</li>
            </ul>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'project-item',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    contents: {
      type: Array,
      required: false
    }
  }
}
</script>
<style lang='less' scoped>
.project-item {
  width: 100%;
  max-height: 500px;
  margin-top: 15px;
  border: 1px solid #e8e8e8;

  img {
    width: 100%;
    height: auto;
    max-height: 500px;
  }

  .item-wrapper {
    display: block;
    position: relative;
        width: 100%;
  }

  .info-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .item-info {
    margin: 0;
    background: black;
    position: relative;
    height: 100%;
    top: 0;
    opacity: 0;
    transition: opacity 1s;
    color: #fff;
    padding: 15px 10px;

    &:hover {
      opacity: 0.8;
    }

    .date {
      font-size: 14px;
    }

    h2 {
      font-size: 20px;
    }

    .contents {
      margin-top: 10px;
    }

    ul {
      margin-top: 10px;
    }

    ul > li {
      text-indent: 0px;
    }

    ul > li:before {
      content: "-";
      padding-right: 5px;
    }
  }
}
</style>
