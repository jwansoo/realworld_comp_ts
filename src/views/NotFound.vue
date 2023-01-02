<template>
  <h1>Oops!</h1>
  <h3>The ({{resource}})page you're looking for is not here</h3>
  <router-link :to="{name:'EventList'}">Back to the home page</router-link>
</template>
<script setup lang="ts">
const props=defineProps<{
  resource:{
    type:string,
    default:'page'
  }
}>()
</script>