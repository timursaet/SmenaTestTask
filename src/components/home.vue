<template>
  <div>
    <v-toolbar app dark class="primary">
      <v-toolbar-title v-text="'Запрос к серверу'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="(item, i) in munuItems" flat :key="`munuItems${i}`" :to="item.route">
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
            route: '/home'
          },
          {
            title: 'Войти',
            route: '/login'
        }]
      }
    }
  }
</script>
