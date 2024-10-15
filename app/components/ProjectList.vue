<template>
    <div>
        <p class="mb-10">Take a looh at my GitHub Projects</p>

        <section v-if="pending">Loading...</section>
        <section v-else-if="error">Something went wrong, try again...</section>
        <section v-else >
            <ul class="grid grid-cols-1 gap-4">
                <li 
                    v-for="repo in repos" 
                    class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono"
                    :key="repo.id">
                    <a :href="repo.html_url" target="_blank">
                        <div class="flex items-center justify-between text-sm">
                            <div class="font-semibold">{{ repo.name }}</div>
                            <h6> {{ repo.stargazers_count }} ★</h6>
                        </div>  
                        <p class="text-sm">{{ repo.description }}</p>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
const { error, pending, data } = await useFetch('https://api.github.com/users/maurodf0/repos')


//display only repo with description and sorted by stars number
const repos = computed( () => data.value.filter( repo => repo.description ).sort((a,b ) => b.stargazers_count - a.stargazers_count) )

</script>   