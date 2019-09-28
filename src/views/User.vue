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
            <v-toolbar-title>Пользователь</v-toolbar-title>
            <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                    v-model="fullName"
                    :counter="10"
                    label="ФИО"
                    data-vv-name="fullName"
                    disabled
                ></v-text-field>

                <v-text-field
                v-model="login"
                label="Логин"
                data-vv-name="login"
                disabled
                ></v-text-field>

                <v-text-field
                        v-model="about"
                        label="О себе"
                        data-vv-name="about"
                        disabled
                ></v-text-field>

                {{avatarUrl}}

                <v-text-field
                        v-model="rating"
                        label="Рейтинг"
                        data-vv-name="rating"
                        disabled
                ></v-text-field>

            </v-form>
            </v-card-text>
            <v-card-actions>
            <div class="flex-grow-1"></div>
    <!--            <v-btn color="primary" class="mr-4" @click="submit">Зарегистрироваться</v-btn>-->
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