<template>
  <div class="ui horizontal divider header">
      <i v-if="icon" class="icon" :class="icon"></i>
      <slot>默认内容</slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'MyDivider',
  props: {
    icon: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
