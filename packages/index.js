// 导入semantic组件的样式
import 'semantic-ui-css/semantic.css'

import MyButton from './button/button.vue'
import MyHeadline from './headline/headline.vue'

export default {
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('MyHeadline', MyHeadline)
  }
}
