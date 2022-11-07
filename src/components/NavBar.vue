<template>
    <div>
            <RouterLink active-class="active" to="/">Home</RouterLink>
            <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style >

.active {
    color:wheat;
    font-weight: bold;
}

</style>