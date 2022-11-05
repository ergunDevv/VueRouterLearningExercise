<script setup>
import { useRoute ,RouterView ,useRouter} from "vue-router";
import cars from '../data/cars.json'


const route = useRoute();
const router=useRouter();

const carId= parseInt(route.params.id)
const car = cars.find(c=>c.id ===carId)

console.log(route.params);

const showContact = ()=>{
    // if(carId===4)return;
    return router.push(`/cars/${carId}/contact`)
}

</script>


<template>
  <div v-if="car">
    <h1>Name : {{car.name}}</h1>
    <h1>Year : {{car.year}}</h1>
    <h1>Price : {{car.price}}</h1>
    <button @click="showContact"> Click me to get contact information</button>
    <!-- <RouterLink :to="`/cars/${car.id}/contact`" :key="car.id" >
        For Contact click
    </RouterLink> -->
    <RouterView/>
  </div>
  <div v-else>
        <h1>Car not found!</h1>
  </div>
</template>


