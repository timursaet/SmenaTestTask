<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Зарегистрироваться</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Login" name="login" type="text" v-model="registerForm.login"></v-text-field>
                            <v-text-field id="password" label="Password" name="password" type="password" v-model="registerForm.password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="primary" :to="route">Вернуться назад</v-btn>
                        <v-btn color="primary" @click="register()">Зарегистрироваться</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                registerForm: {
                    login: '',
                    password: ''
                },
                route: '/login'
            }
        },
        methods: {
            register() {
                this.$http.post('http://localhost:8080/register', {
                    username: this.registerForm.login,
                    password: this.registerForm.password
                })
                    .then(response => {
                       console.log("Пользователь зареган")
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
