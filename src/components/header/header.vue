<template>
    <div>
        <v-toolbar app dark class="primary">
            <v-toolbar-title v-text="'Запрос к серверу'"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-for="(item, i) in munuItems" flat :key="`munuIte ms${i}`" :to="item.route" v-if="item.visible">
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        computed: {
            munuItems() {
                return [
                    {
                        title: 'Домой',
                        route: '/',
                        visible: true
                    },
                    {
                        title: 'Войти',
                        route: '/login',
                        visible: true
                    },{
                        title: 'Выйти',
                        route: '/login',
                        visible: false
                    }]
            }
        }
    }
</script>
