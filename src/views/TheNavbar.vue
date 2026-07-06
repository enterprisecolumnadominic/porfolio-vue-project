<template>
  <header
    class="w-full bg-gray-900 border-b border-gray-800 shadow-lg flex justify-center sticky top-0 z-50"
  >
    <nav class="w-full max-w-4xl px-6 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img alt="Vue logo" src="@/assets/logo.svg" width="32" height="32" class="object-contain" />

        <a
          href="#"
          class="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition tracking-wide leading-none"
        >
          Logo.dev
        </a>
      </div>

      <div class="flex items-center space-x-8">
        <a
          href="#"
          class="text-emerald-400 font-semibold transition duration-150 tracking-wider text-sm sm:text-base"
          >Home</a
        >
        <a
          href="#about"
          class="text-gray-300 hover:text-emerald-400 transition duration-150 tracking-wider text-sm sm:text-base"
          >About</a
        >
        <a
          href="#projects"
          class="text-gray-300 hover:text-emerald-400 transition duration-150 tracking-wider text-sm sm:text-base"
          >Projects</a
        >
      </div>

      <div class="hidden sm:block">
        <button
          type="button"
          class="text-sm font-semibold bg-emerald-500 text-gray-950 px-4 py-2 rounded-lg hover:bg-emerald-400 active:scale-95 transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
        >
          Hire me
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Component is purely presentational for structural layout testing
</script>
