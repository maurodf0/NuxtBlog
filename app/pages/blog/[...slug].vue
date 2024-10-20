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

    onMounted( () => {
        const callback = (entries) => {
            entries.forEach( entry => {
                if(entry.isIntersecting){
                    activeId.value = entry.target.id
                }
            })
        }
        const observer = new IntersectionObserver(callback, {
        threshold: 0.5,
        root: null
        });

        const elements = document.querySelectorAll('h2, h3');

        elements.forEach( e => {
            observer.observe(e);
        } )

        onBeforeUnmount( () => {
            elements.forEach( el => {
                observer.unobserve(el);
            })
        })

     })

  
    
    
</script>