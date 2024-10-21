<template>
    <nav class="font-mono">
                <ul class="flex flex-col md:flex-row px-2 md:gap-4">
                    <li>
                        <NuxtLink to="/">Main</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                </ul>
            </nav>
</template>

<style scoped>

    nav li a {
        @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 
    }

</style>