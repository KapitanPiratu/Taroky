const SignUp = {
    template: `
        <div>
            <h1>Sign Up</h1>
            nickname <br>
            <input v-model="nickname" type="text"> <br>
            email <br>
            <input v-model="email" type="text"> <br>
            password <br>
            <input v-model="password" type="text"> <br> <br>
            <button @click="signup">Sign Up</button> <br>
            <router-link to="/login">back to login</router-link>
        </div>
    `,
    methods: {
        async signup(){
            const res = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nickname: this.nickname,
                    email: this.email,
                    password: this.password
                })
            })

        }
    }
}

export { SignUp }