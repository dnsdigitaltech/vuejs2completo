import Vue from 'vue'
import App from './App.vue'
import Announcement from './Announcement.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('announcement', Announcement);

new Vue({
  el: '#app',
  render: h => h(App)
})
