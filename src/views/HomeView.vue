<!-- src/views/HomeView.vue -->
<template>
  <section id="home" class="w-full max-w-6xl px-6 pt-10 pb-20 mx-auto">
    <!-- Content Constrainer Matrix Track -->
    <div
      class="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
    >
      <div class="flex flex-col space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
        <div class="space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Available for Freelance Work
          </span>
          <!-- Title adapts down gracefully to text-4xl on small glass surfaces -->
          <h1
            class="text-4xl sm:text-5xl md:text-5xl font-black text-white tracking-tight leading-none"
          >
            Modernizing Legacy Systems into High-Performance Web Applications using cloud and AI.
          </h1>
        </div>

        <div>
          <p class="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
            Experienced Software Developer with 5+ years of expertise in legacy modernization and
            full-stack web development. Leveraging C#, .NET, React, Vue, and cloud technologies,
          </p>
        </div>

        <!-- Call to Action Track Blocks -->
        <div class="flex items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold bg-emerald-500 text-gray-950 rounded-lg hover:bg-emerald-400 active:scale-95 transition cursor-pointer shadow-lg shadow-emerald-500/10"
          >
            View My Resume
          </a>
          <a
            href="#contact"
            class="px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold bg-gray-900 text-gray-200 border border-gray-800 rounded-lg hover:bg-gray-800 active:scale-95 transition cursor-pointer"
          >
            Let's Talk
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center order-1 md:order-2">
        <div
          className="relative w-full max-w-md h-64 sm:h-80 md:h-[400px] flex items-center justify-center group"
        >
          <div
            className="absolute inset-0 bg-emerald-500/20 blur-2xl md:blur-3xl rounded-full transition-opacity duration-300 group-hover:bg-emerald-500/30"
          ></div>

          <div
            className="w-full h-full rounded-2xl border border-gray-800 bg-gray-900/50 shadow-2xl backdrop-blur-sm overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]"
          >
            <img
              src="/profile-pic.jpg"
              alt="Hero illustration profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
