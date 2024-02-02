/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import { VueGtag } from 'vue-gtag'

Vue.config.productionTip = false;
 Vue.use(
    VueGtag, 
    { config: 
        { id: G-S2PBW4V6YE } });
         new Vue({ render: h => h(App), 
        }).$mount('#app');


// Composables
import { createApp } from 'vue'
import './index.css'
const app = createApp(App)

registerPlugins(app)

app.mount('#app')
