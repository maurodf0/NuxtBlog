<template>
    <article 
    class="prose max-w-none dark:prose-invert prose-pre:bg-white prose-pre:text-gray-800 dark:prose-pre:text-gray-200 dark:prose-pre:bg-gray-800">
        <ContentDoc v-slot="{ doc }">
            <pre>{{ doc.body.toc.links }}</pre>
           <ContentRenderer :value="doc" />
        </ContentDoc>
    </article>
</template>
<script setup >
    const route = useRoute();
    
    
</script>