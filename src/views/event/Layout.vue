<template>
  <div v-if="event">
    <h1>{{event.title}}</h1>
    <div id="nav">
      <router-link :to="{name:'EventDetails'}">Details</router-link> |
      <router-link :to="{name:'EventRegister'}">Register</router-link> |
      <router-link :to="{name:'EventEdit'}">Edit</router-link>
    </div>
    <RouterView :event="event"></RouterView>
    
    <p>you are on Id {{$route.params.id}}</p>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import EventService from '@/services/EventService';
import type { Event } from '@/types/Event';
import { useRouter } from 'vue-router';
const router=useRouter()
const props=defineProps<{
  id:number
}>()
const event =ref({} as Event)
onMounted(()=>{
  EventService.getEvent(props.id)
  .then((response: { data: Event })=>{
    event.value=response.data
  })
  .catch((error:any)=>{
   if(error.response && error.response.status==404){
    router.push({name:'404Resource', params:{resource:'event'}})
   }else{
    router.push({name:'NetworkError'})
   }
  })
})
</script>

<style scoped>

</style>