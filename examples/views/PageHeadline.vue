<template>
  <div>
    <h1>测试my-headline</h1>
    <my-headline :level="1">标题3</my-headline>
    <br />
    <my-headline :level="2" icon="setting" size="huge">标题1--huge</my-headline>
    <br />
    <my-headline :level="3" icon="user" size="tiny">标题3--tiny</my-headline>
    <br />
    <my-headline :level="1" icon="coffee" size="huge">
      标题888
      <div slot="sub">子标题666</div>
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
