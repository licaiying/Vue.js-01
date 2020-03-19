<template>
  <div>
    <button class="ui button" :class="cClass">
      <template v-if="animated">
        <!-- 必须判断是否有动画，如果有，还需判断是哪种动画 -->
        <!-- $slots:可以获得所有的动画类型 -->
        <div v-if="$slots.hidden" class="hidden content">
          <slot name="hidden"></slot>
        </div>
        <div v-if="$slots.visible" class="visible content">
          <slot name="visible"></slot>
        </div>
      </template>
      <template v-else>
        <i v-if="icon" class="icon" :class="icon"></i>
        <slot>我是默认的内容</slot>
      </template>
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
    },
    bkgColor: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    animated: {
      type: String,
      default: ''
    }
  },
  created () {
    // console.log(this.$slots)  // 可以获得所有的动画类型
  },
  computed: {
    cClass () {
      var classArr = [this.size]
      this.bkgColor && classArr.push('inverted' + ' ' + this.bkgColor)
      this.disabled && classArr.push('disabled')
      this.loading && classArr.push('loading')
      this.animated && classArr.push(`animated ${this.animated}`)
      return classArr.join(' ')
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
