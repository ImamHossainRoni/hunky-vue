import { createApp } from 'vue'
import App from './App.vue'

// import routers from "@/systems/routers";
import rt from './systems/routers'

import router from './systems/routers'


createApp(App).use(router).use(rt).mount('#app')
