const LogIn = {
    template: `
        <div>
            <h1>Log In</h1>
            nickname or email <br>
            <input v-model="user" type="text"> <br>
            password <br>
            <input v-model="password" type="text"> <br> <br>
            <button @click="login">Log In</button> <br> 
            <router-link to="/signup">sign up</router-link>
        </div>
    `,
    methods: {
        async login(){
            const res = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: this.user,
                    password: this.password
                })
            })

        }
    }
}

export { LogIn }