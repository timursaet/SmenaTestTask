<template>
    <v-container>
            <span v-for="item in dataPerson">
                {{ item }}
            </span>
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
