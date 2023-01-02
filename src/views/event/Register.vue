<template>
  <p>Register for here</p>
  <button @click="register">Register Me!</button>
</template>

<script setup lang="ts">
import type { Event } from '@/types/Event';
import { useRouter } from 'vue-router';
const router=useRouter()
const props=defineProps<{
event:Event
}>()
const register=()=>{
  router.push({
    name:'EventDetails',
    params:{id:props.event.id}
  })
}
</script>

<style scoped>

</style>