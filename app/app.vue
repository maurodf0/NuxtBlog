<template>
    <NuxtLayout >
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
    // const layout = 'another';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>