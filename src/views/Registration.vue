<template>
    <v-row>
        <v-col
            :cols="4"
            offset-md="4"
            class="verticallyCenter"
        >
            <form>
                <v-text-field
                    v-model="fullName"
                    :counter="10"
                    label="ФИО"
                    data-vv-name="fullName"
                    required
                ></v-text-field>
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
                <v-text-field
                        v-model="repeatPassword"
                        label="Повторить пароль"
                        type="password"
                        data-vv-name="repeatPassword"
                        required
                ></v-text-field>
                <v-btn class="mr-4" @click="submit">Регистрация</v-btn>
            </form>
        </v-col>
    </v-row>
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
                fullName: '',
                login: '',
                password: '',
                repeatPassword: ''
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('auth/registration', {fullName: this.fullName, login: this.login, password: this.password}).then((data)=> {
                    if(data) {
                        console.log('registration');
                        this.$router.push('/')
                    }
                });
            }
        },

        computed: {
            isAuthLocal () {
                return this.$store.getters['auth/isAuth']
            }
        }

    };
</script>
<style scoped>
</style>