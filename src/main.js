import {createApp} from 'vue'
import App from './App.vue'
import components from  '@/components/UI'

const app = createApp(App);

//Регистрация UI-компонентов. Избавляет от необходимости регистрировать UI-компоненты в каждом конкретном компоненте.
components.forEach(component => {
    app.component(component.name, component);
})
app.mount('#app')
