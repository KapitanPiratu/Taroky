import { login } from './login.js'

const app = Vue.createApp({
    template: `
        <div>
            <Login />
        </div>
    `
});

app.component('Login', login);
app.mount('#app');