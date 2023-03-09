const login = {
    template: `
        <div>
            <input v-model="user" type="text">
            <input v-model="password" type="text">
            <button @click="login">Log In</button>
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

export { login }