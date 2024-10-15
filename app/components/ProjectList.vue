<template>
    <div>ProjectList</div>

    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong, try again...</section>
    <section v-else >Here display the data</section>
</template>

<script setup>
const { error, pending, data } = await useFetch('https://api.github.com/users/maurodf0/repos')
console.log(await useFetch('https://api.github.com/users/maurodf0/repos'));

</script>   