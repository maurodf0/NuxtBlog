<template>
    <nav class="font-mono">
                <ul class="flex gap-4">
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
        @apply p-1 hover:bg-gray-200
    }

</style>