<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheNavbar from "./views/TheNavbar.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-gray-950 text-gray-100 flex flex-col items-center p-0 font-sans antialiased"
  >
    <TheNavbar />

    <main>
      <header class="w-full max-w-xl text-center flex flex-col items-center mt-12 mb-8 px-6">
        <img alt="Vue logo" class="mb-6" src="@/assets/logo.svg" width="125" height="125" />

        <div class="space-y-4">
          <HelloWorld msg="You did it!" />
          <h1 class="text-3xl font-extrabold text-white tracking-tight">Writing this to Git!</h1>
          <p class="text-emerald-400 font-medium">Writing this from local PC</p>
        </div>
      </header>
    </main>
  </div>
</template>
