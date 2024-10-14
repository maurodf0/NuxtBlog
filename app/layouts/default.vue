<template>
    <div class="container mx-auto max-w-2xl">   
        <header class="flex justify-between mt-5">
            <div>
                <NuxtLink
                 to="/" 
                 class="text-xl font-semibold p-2 hover:bg-gray-200">
                 Mauro De Falco
                </NuxtLink>
            </div>
            <Menu />
        </header>
        <main class="p-2">
         <slot />
        </main>
    </div>
</template>

<script setup>

    // %s is the title of the single page
    useHead({
        titleTemplate: '%s - Mauro De Falco'
    })
</script>