<template>
  <div>
    <span class='header'>Добро пожаловать</span>
  </div>
</template>

<script>
  export default {
    computed: {
      munuItems() {
        return [
          {
            title: 'Домой',
            route: '/home',
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
<style>
  .header{
    text-align: center;
  }
</style>
