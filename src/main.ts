import { createApp } from 'vue'
import { createPinia } from 'pinia'
import uk from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import App from './App.vue'
import router from './router'

uk.use(Icons)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
