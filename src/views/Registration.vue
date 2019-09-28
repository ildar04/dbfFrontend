<template>
    <v-row
        align="center"
        justify="center"
        class="form-style"
    >
        <v-col
        cols="12"
        sm="8"
        md="6"
        >
        <v-card class="elevation-12">
            <v-toolbar
            color="primary"
            dark
            flat
            >
            <v-toolbar-title>Регистрация</v-toolbar-title>
            <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
            <v-form>
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
            </v-form>
            </v-card-text>
            <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="" class="mr-4" @click="switchToAuth">Авторизация</v-btn>
            <v-btn color="primary" class="mr-4" @click="submit">Зарегистрироваться</v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "loginPage",
        mounted(){
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
                        this.$router.push('/')
                    }
                });
            },
            switchToAuth() {
                this.$router.push('/login');
            }
        },

        computed: {
            isAuthLocal () {
                return this.$store.getters['auth/isAuth']
            }
        }

    };
</script>
<style>
.form-style {
    min-width: 400px;
}
</style>