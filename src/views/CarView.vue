<template>
    <div>
            <h1>Car View</h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

    const route = useRoute();

    console.log(route.params)

</script>

