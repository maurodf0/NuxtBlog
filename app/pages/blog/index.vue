<template>
    <div v-if="result">
        <section>
        <ul>
            <li class="rounded-lg border-gray-700 dark:border-gray-100 mb-4 border py-4 px-4"
                v-for="(post, index) in result" 
                :key="post.title"> 
             <NuxtLink :to="post._path" >   {{ index }} - {{ post.title }} </NuxtLink> 
            </li>
        </ul>
    </section>
    </div>
    <div v-else>Nothing Found</div>
</template>

<script setup>
 const result = await queryContent('/blog').only(['_path', 'title']).find()

</script>