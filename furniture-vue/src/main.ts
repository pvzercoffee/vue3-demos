
import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/global.css'
import {createPinia} from 'pinia'
import router from './router';



//创建pinia
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount('#app')
