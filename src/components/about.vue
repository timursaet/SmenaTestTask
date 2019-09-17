<template>
    <h5>{{dataPerson.id}}</h5>
    <!--<h5>{{dataPerson.username}}</h5>
    <h5>{{dataPerson.avatar}}</h5>
    <h5>{{dataPerson.about}}</h5>-->
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                dataPerson: {
                    ids: '',
                    username: '',
                    avatar: '',
                    about: ''
                }
            }
        },
        mounted() {
                this.$http.get('http://localhost:8080/about', {
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('token')
                    }
                })
                    .then(response => {
                       /* this.dataPerson.id = response.data.id;
                        this.dataPerson.username = response.data.username;
                        this.dataPerson.avatar = response.data.avatar;
                        this.dataPerson.about = response.data.about;*/
                       console.log(response.data.about)
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    })
        }
    }
</script>

<style scoped>

</style>
