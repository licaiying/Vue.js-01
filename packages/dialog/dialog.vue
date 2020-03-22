<template>
  <div class="ui dimmer modals page" :class="{'active':isShow}">
    <div class="ui standard modal" :class="{'active':isShow}" style="top: 60px;">
      <i class="close icon" @click="hClose"></i>
      <div class="header">{{title}}</div>
      <div class="content">
        <div class="description">
          <slot name="body">{{content}}</slot>
        </div>
      </div>
      <div class="actions">
        <div class="ui black button" @click="hNo">{{noTxt}}</div>
        <div class="ui positive right labeled icon button" @click="hYes">
          {{yesTxt}}
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'MyDialog',
  // 通过父组件中v-model传入
  props: {
    value: {
      type: Boolean,
      default: false,
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    content: {
      type: String,
      default: '',
      required: false
    },
    noTxt: {
      type: String,
      default: '取消',
      required: false
    },
    yesTxt: {
      type: String,
      default: '确认',
      required: false
    }
  },
  watch: {
    value () {
      this.isShow = this.value
    }
  },
  methods: {
    // 点击叉号按钮关闭对话框
    hClose () {
      this.isShow = false
      this.$emit('input', this.isShow)
    },
    // 取消按钮
    hNo () {
      this.hClose()
      this.$emit('no')
    },
    // 确认按钮
    hYes () {
      this.hClose()
      this.$emit('yes')
    }
  },
  data () {
    return {
      // 由于后期要修改显示/隐藏，我们不能直接在prop中修改，所以这里添加一个数据项 isSHow
      isShow: this.value
    }
  }
}
</script>

<style scoped lang="less" >
</style>
