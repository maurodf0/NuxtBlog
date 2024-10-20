<template>
    <div class="container mx-auto max-w-4xl">   
        <header class="flex justify-between mt-5">
          <div class="flex items-center space-x-12">
              <div>
                  <NuxtLink
                  to="/" 
                  class="text-xl font-semibold p-2 hover:bg-gray-200">
                  Mauro De Falco
                  </NuxtLink>
              </div>
              <Menu />
          </div>
        <ClientOnly>
            <ColorModeSelector />
        </ClientOnly>
        </header>
        <main class="p-2 mt-10">
         <slot />
        </main>
    </div>
</template>

<script setup>
    // %s is the title of the single page like subfiss
    //than add custom font from google
    useHead({
  titleTemplate: '%s - Mauro De Falco',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
});


const colorMode = useColorMode();
</script>

<style>
body {
  font-family: 'Roboto';
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>