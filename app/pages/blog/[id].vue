<template>
    
<div>Inside blog page
<p>Post id is: {{ route.params.id }}</p>

</div>
</template>
<script setup >
    const route = useRoute();
    
    
</script>