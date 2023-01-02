<template>
  <div class="about">
    <h1>A site for events to better the world</h1>
  </div>
    <h1>you are on page {{$route.query.page}}</h1>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
