import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

//使用路由
let app = createApp(App);

app.use(router);
app.mount('#app')

