const app = Vue.createApp({
    data() {
        return {
            fname: "Mohamed",
            lname: "Abdelrazek",
            url: "https://www.google.com",
            age: 25,
            birds: ['parrot', 'eagle', 'crow']
        }
    },

    methods: {
        incrementAge() {
            this.age++
        },
        decrementAge() {
            this.age--
        },
    },
    computed: {
        fullName() {
            return this.fname + " " + this.lname
        }
    }
})

// Use : to bind data to html
// Use @ to bind events to html

app.mount('#app')