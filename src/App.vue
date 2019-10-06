<template>
  <v-app>
    <home/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import home from './components/header/header';

export default {
  name: 'App',
  components: {
    home
  }
}
</script>
