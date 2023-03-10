import { NotFound } from './notfound.js'
import { LogIn } from './login.js'
import { SignUp } from './signup.js';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {path: '/:pathMatch(.*)*', component: NotFound},
        {path: '/login', component: LogIn},
        {path: '/signup', component: SignUp}
    ]
})

const app = Vue.createApp({
    template: `
        <router-view></router-view>
    `
});

app.use(router)
//app.component('Login', login);
router.push('/login')
app.mount('#app');