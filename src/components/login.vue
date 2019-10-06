<template>
    <v-container class="fill-height" fluid>{{errorView}}
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Войти</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Login" name="login" type="text" v-model="credential.username"></v-text-field>
                            <v-text-field id="password" label="Password" name="password" type="password" v-model="credential.password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="primary" @click="auth()">Вход</v-btn>
                        <v-btn color="primary" :to="route">Новый пользователь</v-btn>
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
                credential: {
                    username: '',
                    password: ''
                },
                route: '/register',
                errorView: ''
            }
        },
        methods: {
            auth() {
                this.$http.post('http://localhost:8080/login', {
                    username: this.credential.username,
                    password: this.credential.password
                })
                    .then(response => { console.log("вошел")
                        const token = response.data.token;
                        localStorage.setItem('token', token)
                            this.$router.push('about');
                    })
                    .catch(function (error) {
                        //console.error(error.response.data.error);
                        this.errorView = eval(error.response.data.error);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
