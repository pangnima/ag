import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 라우터 등록

import '@/assets/reset.css';

const myApp = createApp(App)
myApp.use(router)
myApp.mount('#app');
