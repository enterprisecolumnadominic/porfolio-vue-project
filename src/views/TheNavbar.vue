<template>
  <nav class="w-full max-w-6xl px-6 h-16 flex items-center justify-between">
    <div class="flex items-center space-x-3">
      <a
        href="#"
        class="flex items-center space-x-3 group text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition tracking-wide leading-none"
        aria-label="Return to top"
      >
        <img
          alt="Vue logo"
          src="@/assets/logo.svg"
          width="180"
          height="32"
          class="object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </a>
    </div>

    <div class="flex items-center space-x-8">
      <a
        href="#"
        class="text-gray-300 hover:text-emerald-400 transition duration-150 tracking-wider text-xs sm:text-sm transition-transform duration-400 hover:scale-[1.1]"
      >
        Home
      </a>
      <a
        href="#about"
        class="text-gray-300 hover:text-emerald-400 transition duration-150 tracking-wider text-xs sm:text-sm transition-transform duration-400 hover:scale-[1.1]"
      >
        About
      </a>

      <a
        href="#experience"
        class="text-gray-300 hover:text-emerald-400 transition duration-150 tracking-wider text-xs sm:text-sm transition-transform duration-400 hover:scale-[1.1]"
      >
        Experience
      </a>
    </div>

    <div class="hidden sm:block">
      <a
        href="#contact"
        class="text-sm font-semibold bg-emerald-500 text-gray-950 px-4 py-2 rounded-lg hover:bg-emerald-400 active:scale-95 transition-all shadow-md shadow-emerald-500/10 cursor-pointer inline-block transition-transform duration-400 hover:scale-[1.1]"
      >
        Hire me
      </a>
    </div>
  </nav>
</template>
