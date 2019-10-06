<template>
    <v-container>
        <span> <b>ID пользователя:</b> {{dataPerson.data.id}}</span><br>
        <span> <b>Имя пользователя:</b> {{dataPerson.data.username}}</span><br>
        <span> <b>Аватар пользователя:</b>   {{dataPerson.data.avatar}}</span><br>
        <span> <b>Информация о пользователя:</b> {{dataPerson.data.about}}</span>
    </v-container>
</template>

<script>
    export default {
        name: "about",
        data() {
               return {
                dataPerson: ''
            }
        },
        mounted() {
                this.$http.get('http://localhost:8080/about', {
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('token')
                    }
                })
                    .then(response =>
                       this.dataPerson = response.data
                    )
                    .catch(function (error) {
                        console.error(error.response);
                    })
        }
    }
</script>

<style scoped>

</style>
