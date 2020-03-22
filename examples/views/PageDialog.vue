<template>
  <div>
    <h1>测试my-dialog</h1>
    <button @click="isShow=!isShow">切换显示与隐藏</button>
    <my-dialog v-model="isShow" title="绝句·古木阴中系短篷" content="123" @no="close1" @yes="close2">
      <div slot="body">
        <h4>[宋]志南</h4>
        <p>古木阴中系短篷，</p>
        <p>杖藜扶我过桥东。</p>
        <p>沾衣欲湿杏花雨，</p>
        <p>吹面不寒杨柳风。</p>
      </div>
    </my-dialog>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'PageDialog',
  data () {
    return {
      isShow: false // 对话框默认不显示
    }
  },
  methods: {
    close1 () {},
    close2 () {}
  }
}
</script>

<style scoped lang="less" >
</style>
