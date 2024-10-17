<template>
    <div v-if="data">
        <section class="not-prose font-mono">
            <div class="column text-gray-400 text-sm">
                <h5>Date</h5>
                <h5>Title</h5>
            </div>
        <ul>
            <li
                v-for="(post, index) in data" 
                :key="post.title"> 
             <NuxtLink 
             :to="post._path"
             class="column hover:bg-gray-100 dark:hover:bg-gray-800" > <div class="text-gray-500">2023</div> <div>{{ post.title }}</div> </NuxtLink> 
            </li>
        </ul>
    </section>
    </div>
    <div v-else>Nothing Found</div>
</template>

<script setup>
 const { data } = await useAsyncData('blog-list', 
 () => queryContent('/blog')
 .where({_path: {$ne: '/blog'}})
 .only(['_path', 'title', 'date'])
 .find()); 

</script>

<style scoped>
    .column {
        @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
    }

</style>