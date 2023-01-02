<template>
    <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
    <p>{{event.description}}</p>
</template>

<script setup lang="ts">
import type { Event } from '@/types/Event';
const props=defineProps<{
  event:Event
}>()
</script>

<style scoped>

</style>