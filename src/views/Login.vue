<template>
    <v-row
        align="center"
        justify="center"
        class="form-style"
    >
        <v-col
        cols="12"
        sm="8"
        md="4"
        >
        <v-card class="elevation-12">
            <v-toolbar
            color="primary"
            dark
            flat
            >
            <v-toolbar-title>Авторизация</v-toolbar-title>
            <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                v-model="login"
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
            </v-form>

            </v-card-text>
            <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="" class="mr-4" @click="switchToRegister">Регистрация</v-btn>
            <v-btn color="primary" class="mr-4" @click="submit">Войти</v-btn>
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
                login: 'Max',
                password: '123456'
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('auth/login', {login: this.login, password: this.password}).then((data)=> {
                    if(data) {
                        this.$router.push('/')
                    }
                });
            },
            switchToRegister() {
                this.$router.push("/registration");
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