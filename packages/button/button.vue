<template>
  <div>
    <button class="ui button">
      <slot>我是默认的内容</slot>
    </button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'MyButton',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
