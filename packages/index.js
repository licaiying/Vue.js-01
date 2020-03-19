import MyButton from './button/button.vue'
import MyHeadline from './headline/headline.vue'

export default {
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('MyHeadline', MyHeadline)
  }
}
