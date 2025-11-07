import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createVuestic} from "vuestic-ui"
import "vuestic-ui/css"
import "material-design-icons-iconfont/dist/material-design-icons.min.css"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createVuestic({
    config: {
        colors: {
            variables: {
                // Default colors
                primary: "#23e066",
                secondary: "#002c85",
                success: "#40e583",
                info: "#2c82e0",
                danger: "#e34b4a",
                warning: "#ffc200",
                gray: "#babfc2",
                dark: "#34495e",
            },
        },
    },
}))
app.use(createPinia())
app.use(router)

app.mount('#app')
