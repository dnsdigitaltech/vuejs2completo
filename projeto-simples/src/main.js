import Vue from 'vue';
import App from './App.vue';
import Announcement from './Announcement.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Article from './Article.vue';

export const eventBus = new Vue();

Vue.component('announcement', Announcement);
Vue.component('appArticle', Article);

new Vue({
  el: '#app',
  render: h => h(App)
})
