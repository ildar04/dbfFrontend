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
                <v-avatar>
                    <img
                            :src="user.avatarUrl"
                            :alt="user.fullName"
                    >
                </v-avatar>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <td>ФИО:</td>
                            <td>{{user.fullName}}</td>
                        </tr>
                        <tr>
                            <td>Логин:</td>
                            <td>{{user.login}}</td>
                        </tr>
                        <tr>
                            <td>О себе:</td>
                            <td>{{user.about}}</td>
                        </tr>
                        <tr>
                            <td>Рейтинг:</td>
                            <td>{{user.rating}}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
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
            this.$store.dispatch('users/getUserById', this.$route.params.uid)
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
            },
             user() {
                return this.$store.getters['users/user']
            }
        }

    };
</script>
<style>
.form-style {
    min-width: 400px;
}
</style>