import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Home from './Home.vue';
import Contato from './Contato.vue';
import About from './About.vue';

Vue.component('appHome', Home);
Vue.component('appContato', Contato);
Vue.component('appAbout', About);

new Vue({
  el: '#app',
  render: h => h(App)
})
