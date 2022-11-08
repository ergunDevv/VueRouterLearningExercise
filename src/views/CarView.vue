<script setup>
import { useRoute } from "vue-router";
import cars from '../data/cars.json'



const route = useRoute();
const car = cars.find(c=>c.id ===parseInt(route.params.id))

console.log(route.params);
</script>


<template>
  <div>
    <h1>Name : {{car.name}}</h1>
    <h1>Year : {{car.year}}</h1>
    <h1>Price : {{car.price}}</h1>
  </div>
</template>


