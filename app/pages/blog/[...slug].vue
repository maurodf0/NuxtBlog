<template>
    <article 
    class="prose max-w-none dark:prose-invert prose-pre:bg-white prose-pre:text-gray-800 dark:prose-pre:text-gray-200 dark:prose-pre:bg-gray-800">
        <ContentDoc v-slot="{ doc }">
            <div class="grid grid-cols-6 gap-16">
                <div :class="{'col-span-4': doc.toc, 'col-span-6': !doc.toc}">
                    <ContentRenderer :value="doc" />
                </div>
                <div v-if="doc.toc" class="col-span-2 not-prose">
             
                        <aside class="sticky top-8">
                            <div class="font-semibold mb-2">
                                Table of contents
                            </div>
                            <nav>
                                <TocLinks :links="doc.body.toc.links" />
                            </nav>
                        </aside>
    
                </div>
            </div>
       
        </ContentDoc>
    </article>
</template>
<script setup >
    const route = useRoute();
    
    
</script>