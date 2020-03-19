<template>
  <div class="about">
    <my-headline></my-headline>
    <my-button></my-button>
    <br />
    <my-button size="large" icon="tty" bkgColor="orange" disabled>我是自定义的内容1</my-button>
    <br />
    <my-button size="small" icon="deaf" bkgColor="green">我是自定义的内容2</my-button>
    <br />
    <my-button size="massive" icon="sign language" bkgColor="violet" @click="hClick()">我是自定义的内容1</my-button>
    <br />
    <my-button size="small" icon="volume up" bkgColor="purple" @click="hClick()">我是自定义的内容2</my-button>
    <br />
    <my-button size="large" icon="video" bkgColor="olive" loading>我是自定义的内容1</my-button>
    <br />
    <my-button size="massive" icon="coffee" bkgColor="blue">我是自定义的内容2</my-button>
    <br />
    <my-button animated="vertical">
      <div slot="hidden">$10000</div>
      <div slot="visible">
        <i class="shop icon"></i>不要错过哈
      </div>
    </my-button>
    <br />
    <my-button animated="fade">
      <div slot="hidden">$10000</div>
      <div slot="visible">
        <i class="shop icon"></i>不要错过哈
      </div>
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    hClick () {
      alert(789456123)
    }
  }
}
</script>
