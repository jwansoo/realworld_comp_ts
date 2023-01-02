<template>
  <h1>Events For Good</h1>
  <div v-if="showExtra">Extra stuff</div>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
    <router-link 
    id="page-prev"
    :to="{name:'EventList', query:{page:page-1}}"
    rel="Prev"
    v-if="page !=1"
    >&#60;Previous</router-link>
    <router-link
    id="page-next" 
    :to="{name:'EventList', query:{page:page+1}}"
    rel="next"
    v-if="hasNextPage"
    >Next &#62;</router-link>
  </div>
  </div>
</template>

<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import {ref,onMounted,watchEffect,computed} from 'vue'
import EventService from '../services/EventService'
import type { Event } from '@/types/Event';
import { onBeforeRouteLeave } from 'vue-router';
const props=defineProps<{
  showExtra:boolean,
  page:number
}>()
const events=ref([] as Event[])
const totalEvents=ref(0)
onMounted(()=>{
watchEffect(()=>{
  EventService.getEvents(2,props.page)
  .then((response: { data: Event[],headers:any })=>{
    events.value=response.data
    totalEvents.value=response.headers['x-total-count']
  })
  .catch((error: any)=>console.log(error))
})
})
const hasNextPage=computed(()=>{
  let totalPages=Math.ceil(totalEvents.value / 2)
  return props.page < totalPages
})

</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>