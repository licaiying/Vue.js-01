# lcy-vue

## 使用
``````
import UI from 'ui-lcy-vue'
import 'ui-lcy-vue/lib/ui-lcy-vue.css'
Vue.use(UI)
``````
## 示例代码
``````
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

``````

