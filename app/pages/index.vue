<template>
  <div class="wrapper">
      <article class=" max-w-none mb-10 prose dark:prose-invert prose-h1:text-5xl">
        <ContentDoc path="/" />
      </article>
  </div>
</template>

<script setup lang="ts">

  //change layout dinamically
  const enableCustomLayout = () => {
      setPageLayout('another');
  }

  const defaultLayout = () => {
      setPageLayout('default');
  }

  //change layout ofr single page
  // definePageMeta({
  //     layout: 'another'
  // })

  useHead({
      title: 'About Page'
  })

</script>
