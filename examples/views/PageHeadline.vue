<template>
  <div>
    <h1>测试my-headline</h1>
    <my-headline :level="1" icon="coffee" size="huge">
      标题123
      <div slot="sub">子标题456</div>
    </my-headline>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'PageHeadline',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
