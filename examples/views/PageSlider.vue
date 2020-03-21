<template>
  <div>
    <h1>测试my-slider</h1>
    <my-slider
      style="width:250px;height:350px"
      :auto="1500"
      :curIdx="curIdx"
      :list="list"
      @click="handle"
      @change="hChange"
    ></my-slider>

    <br />

    <my-slider style="width:250px;height:350px" :auto="500" :curIdx="3" :list="list"></my-slider>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'PageSlider',
  data () {
    return {
      curIdx: 2, // 开始轮播图的位置

      list: [
        { url: require('./img/1.jpg'), alt: '肖申克的救赎' },
        { url: require('./img/2.jpg'), alt: '阿甘正传' },
        { url: require('./img/3.jpg'), alt: '幸福来敲门' },
        { url: require('./img/4.jpg'), alt: '这个杀手不太冷' },
        { url: require('./img/5.jpg'), alt: '机器人总动员' },
        { url: require('./img/6.jpg'), alt: '忠犬八公' }
      ]
    }
  },
  methods: {
    handle (index) {
      //   console.log(index)
    },
    hChange (idx) {
      //   console.log(idx)
    }
  }
}
</script>

<style scoped lang="less" >
</style>
