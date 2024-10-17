<template>
    <div v-if="posts">
        <section class="not-prose font-mono">
            <div class="column text-gray-400 text-sm">
                <h5>Date</h5>
                <h5>Title</h5>
            </div>
        <ul>
            <li
                v-for="post in posts" 
                :key="post.title"> 
             <NuxtLink 
                :to="post._path"
                class="column hover:bg-gray-100 dark:hover:bg-gray-800"> 
                <div :class="{'invisible' : !post.displayYear, 'text-gray-400 dark:text-gray-500' : post.displayYear}">2023</div> 
                <div>{{ post.title }}</div> 
            </NuxtLink> 
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
 .only(['_path', 'title', 'publishedAt'])
 .sort({publishedAt: -1})
 .find()); 

 const posts = computed( () => {
    if(!data.value){
        return []
    }

    const result = []
    let lastYear = null;

    for (const p of data.value){
        const year = new Date(p.publishedAt).getFullYear();
        const displayYear = year != lastYear;
        p.displayYear = displayYear
        result.push(p);
        lastYear = year;
    }

    return data.value
 })

console.log(data);

</script>

<style scoped>
    .column {
        @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
    }

</style>