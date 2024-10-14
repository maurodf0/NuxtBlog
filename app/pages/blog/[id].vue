<template>

<div>Inside blog page
<p>Post id is: {{ route.params.id }}</p>
    <div v-if="route.params.id = 10">
        Alessandro del Piero
    </div>
</div>
</template>
<script setup >
    const route = useRoute();
    
    
</script>