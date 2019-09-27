<template>
    <form>
        <v-text-field
                v-model="login"
                :counter="10"
                label="Логин"
                data-vv-name="login"
                required
        ></v-text-field>
        <v-text-field
                v-model="password"
                label="Пароль"
                type="password"
                data-vv-name="password"
                required
        ></v-text-field>
        <v-btn class="mr-4" @click="submit">Войти</v-btn>
    </form>
</template>

<script>
    export default {
        name: "loginPage",
        mounted(){
            // console.log('created login component');
            // console.log(this.$store.getters['cart/test']);
        },
        data(){
            return {
                login: '',
                password: ''
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('auth/login', {login: this.login, password: this.password}).then((data)=> {
                    if(data) {
                        console.log("isAuthLocal");
                        console.log(this.isAuthLocal);

                        this.$router.push('/')
                    }
                });

                console.log('submit');
            }
        },

        computed: {
            isAuthLocal () {
                return this.$store.getters['auth/isAuth']
            }
        }

    };
</script>