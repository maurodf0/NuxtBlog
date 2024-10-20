<template>
    <div class="wrapper">
        <h1>About me!</h1>
        <ContentDoc class=" max-w-none mb-10 prose dark:prose-invert prose-h1:text-5xl" path="/about" />
            <div class="flex gap-4">
                <button @click="enableCustomLayout">Update Layout</button>
                <button @click="defaultLayout">Go Back Layout</button>
            </div>
    </div>
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
