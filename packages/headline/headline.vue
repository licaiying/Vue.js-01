
    <!-- <h2 v-if="level===2" class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <div class="sub header">
          <slot name="sub"></slot>
        </div>
      </div>
    </h2> -->

<script type="text/javascript">
export default {
  name: 'MyHeadline',
  // 定义属性来接收用户的输入
  props: {
    level: {
      type: Number, // h1,h2,h3...
      default: 1,
      required: false
    },
    icon: {
      type: String,
      required: false,
      default: '' // 默认没有图标
    },
    size: {
      type: String,
      required: false,
      default: 'medium' // 默认为medium
    }
  },
  data () {
    return {}
  },
  render (h) {
    //  <h2 class="ui header">
    //   <i class="settings icon"></i>
    //   <div class="content">
    //     默认插槽的内容
    //     <div class="sub header">具名插槽的内容</div>
    //   </div>
    // </h2>
    // level ,icon,size,sub
    // 判断是否有icon
    let icon = null
    let content = null

    if (this.icon) {
      icon = h('i', { class: 'icon ' + this.icon })
    }

    // 生成第二个子元素content
    // 是否有具名插槽
    if (this.$slots.sub) {
      // 是有副标题的
      // 创建副标题
      const subContent = h('div', { class: 'sub header' }, [this.$slots.sub])
      // 内容包含两个部分：默认插槽 + 具名插槽
      content = h('div', { class: 'content' }, [
        this.$slots.default,
        subContent
      ])
    } else {
      content = h('div', { class: 'content' }, [this.$slots.default])
    }

    // 图标i 要是h标签的子元素，所以要设置参数3
    return h(
      'h' + this.level,
      {
        class: 'ui header ' + this.size
      },
      [icon, content]
    )
  }
}
</script>

<style scoped lang="less" >
</style>
