<template>
    <h1>About me!</h1>
    <button @click="enableCustomLayout">Update Layout</button>
    <button @click="defaultLayout">Go Back Layout</button>
</template>

<script setup lang="ts">

    //change layout dinamically
    const enableCustomLayout = () => {
        setPageLayout('another');
    }

    const defaultLayout = () => {
        setPageLayout('default');
    }

    //change layout ofr single page
    // definePageMeta({
    //     layout: 'another'
    // })

    useHead({
        title: 'About Page'
    })

</script>
