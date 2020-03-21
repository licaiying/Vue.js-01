<template>
  <div>
    <h1 v-if="level===1" class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <div class="sub header">
          <slot name="sub"></slot>
        </div>
      </div>
    </h1>
    <!-- 或者 -->
    <h2 v-if="level===2" class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <div class="sub header">
          <slot name="sub"></slot>
        </div>
      </div>
    </h2>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'MyHeadline',
  props: {
    level: {
      type: Number, // h1,h2,h3...
      default: 1,
      required: false
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'mini'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
