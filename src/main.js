import {createApp} from 'vue'
import App from './App.vue'
import components from  '@/components/UI'
import router from "@/router/router";
import directives from "@/directives";
import store from "@/store";

const app = createApp(App);

//Регистрация UI-компонентов. Избавляет от необходимости регистрировать UI-компоненты в каждом конкретном компоненте.
components.forEach(component => {
    app.component(component.name, component);
})
directives.forEach(directive => {
    app.directive(directive.name, directive);
})


app
    .use(router)
    .use(store)
    .mount('#app');
