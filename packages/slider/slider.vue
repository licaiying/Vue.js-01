<template>
  <div class="slider" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="hClick">
    <div class="slider-content">
      <!-- 轮播图在切换时，使用vue 提供的动画方案(transition-group)，让切换过程更温合一些 -->
      <transition-group name="fade">
        <div
          class="slider-item"
          v-show="index===currentindex"
          v-for="(item,index) in list"
          :key="item.url"
        >
          <img :src="item.url" :alt="item.alt" />
        </div>
      </transition-group>
    </div>
    <!-- 左右按钮 -->
    <span class="btn btn_left" @click="hPrev"></span>
    <span class="btn btn_right" @click="hNext"></span>

    <!-- 左侧标题区域 -->
    <div class="txt">{{list[currentindex].alt}}</div>

    <!-- 小圆点区域 -->
    <ol class="indirector">
      <li
        v-for="(item,index) in list"
        :key="index"
        :class="{current:index===currentindex}"
        @mouseenter="currentindex=index"
      ></li>

      <!-- <li class="current"></li> -->
    </ol>
  </div>
</template>

<script>
export default {
  name: 'MySlider',
  props: {
    // 轮播列表
    list: {
      type: Array,
      required: true
    },
    // 当前开始播放是哪一张图
    curIdx: {
      type: Number,
      default: 0,
      required: false
    },
    // 自动播放的毫秒数
    auto: {
      type: Number,
      required: false,
      default: 0 // 默认不开启自动播放
    }
  },
  data () {
    return {
      // 自定义数据项来接收curIdx属性。
      // 因为在组件内部，不允许改props值的
      currentindex: this.curIdx,

      timer: null // 设置定时器
    }
  },
  watch: {
    // 当图片切换变化，抛出一个change事件供用户使用
    currentindex () {
      this.$emit('change', this.currentindex)
    }
  },
  created () {
    this.move()
  },
  methods: {
    // 控制自动轮播的函数----------------------------
    move () {
      if (this.auto) {
        this.timer = setInterval(() => {
          this.hNext()
        }, this.auto)
      }
    },
    // 左侧按钮的点击事件-------------------------
    hPrev () {
      // 切换上一张
      this.currentindex = this.currentindex - 1
      // 防止越界
      if (this.currentindex === -1) {
        this.currentindex = this.list.length - 1
      }
    },
    // 右侧按钮的点击事件--------------------------
    hNext () {
      // 切换下一张
      this.currentindex = this.currentindex + 1
      // 防止越界
      if (this.currentindex === this.list.length) {
        this.currentindex = 0
      }
    },
    // 鼠标进入
    mouseEnter () {
      clearInterval(this.timer) // 清除定时器
    },
    // 鼠标离开
    mouseLeave () {
      this.move() // 重启定时器，开始自动轮播
    },
    // 抛出事件,供用户使用---------------------------------
    hClick () {
      this.$emit('click', this.currentindex)
    }
  }
}
</script>

<style>
/* 轮播图切换时的动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slider .slider-content,
.slider img {
  width: 100%;
  height: 100%;
}
.slider {
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
.slider .slider-content {
  overflow: hidden;
  position: relative;
}
.slider .slider-content .slider-item {
  position: absolute;
  top: 0;
  left: 0;
}
.slider img {
  width: 100%;
}
.slider .btn,
.slider .txt,
.slider .indirector {
  position: absolute;
}
.slider .btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s;
}
.slider .btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.slider .btn:before,
.slider .btn:after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 23px;
  transform: rotateZ(60deg);
  transform-origin: 0px center;
  transition: all 0.2s;
}
.slider .btn:after {
  transform: rotateZ(-60deg);
}
.slider .btn:hover:before {
  transform: rotateZ(45deg);
  background-color: red;
}
.slider .btn:hover:after {
  transform: rotateZ(-45deg);
  background-color: red;
}

.slider .btn.btn_right:before,
.slider .btn.btn_right:after {
  transform-origin: right center;
}

.slider .btn.btn_left {
  left: 20px;
}
.slider .btn.btn_right {
  right: 20px;
}

.slider .txt {
  text-indent: 1em;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.slider .indirector {
  bottom: 10px;
  right: 1em;
}
.slider .indirector li {
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.slider .indirector li {
  transition: transform 0.2s;
}
.slider .indirector .current {
  background-color: #369;
  transform: scale(1.2);
}
</style>
