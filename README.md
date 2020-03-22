# lcy-vue

## 使用
```
import UI from 'ui-lcy-vue'
import 'ui-lcy-vue/lib/ui-lcy-vue.css'
Vue.use(UI)

```

## 按钮组件 MyButton  示例代码
```
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

```

## 轮播图组件 MySlider  示例代码
```
  <my-slider
    style="width:250px;height:350px"
    :auto="1500"
    :curIdx="curIdx"
    :list="list"
    @click="handle"
    @change="hChange"
    >
  </my-slider>

```

## 对话框组件 MyDialog  示例代码
```
  <my-dialog v-model="isShow" title="绝句·古木阴中系短篷" content="123" @no="close1" @yes="close2">
    <div slot="body">
      <h4>[宋]志南</h4>
      <p>古木阴中系短篷，</p>
      <p>杖藜扶我过桥东。</p>
      <p>沾衣欲湿杏花雨，</p>
      <p>吹面不寒杨柳风。</p>
    </div>
  </my-dialog>

```

## 标题组件 MyHeadline  示例代码
```
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
  
```

## 分隔条组件 MyDivider  示例代码
```
  <my-divider icon="coffee">用户内容1</my-divider>
  <br>
  <my-divider icon="search">用户内容2</my-divider>
  <br>
  <my-divider></my-divider>

```


