<template>
  <div>
    <button class="ui button" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <slot>我是默认的内容</slot>
    </button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'MyButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        // console.log(val) // 'mini', 'tiny', 'small', 'medium'.....
        // 只要传入 size属性，就会进入到这个函数中，如返回true,则表示生效,如返回false，则表示不允许
        // 如果传入的size是：mini,medium,huge,massive.... 就ok,否则就返回false
        return [
          'mini',
          'tiny',
          'small',
          'medium',
          'large',
          'big',
          'huge',
          'massive'
        ].includes(val)
      }
    },
    icon: {
      type: String,
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
