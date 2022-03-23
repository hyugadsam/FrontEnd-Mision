import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const $ = require('jquery')
window.$ = $    //Agregar global
import 'bootstrap';

createApp(App).use(store).use(router).mount('#app');
