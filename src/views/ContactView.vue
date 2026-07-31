<script setup lang="ts">
import SuccessModal from "../components/SuccessModal.vue";
// Import your custom extraction hook
import { useContactForm } from "../composables/useContactForm";

const {
  form,
  isSubmitting,
  isModalOpen,
  emailError,
  validateEmail,
  handleSendMessage,
  handleCloseModal,
} = useContactForm();
</script>

<template>
  <section id="contact" class="w-full max-w-6xl px-6 pb-24 mx-auto">
    <div class="text-center flex flex-col items-center mb-16">
      <h2 class="text-3xl font-black text-white tracking-tight sm:text-4xl">Get In Touch</h2>
      <span class="text-xl font-bold text-emerald-400 tracking-wide mt-3">
        Let's collaborate on your next digital innovation.
      </span>
      <div class="h-1 w-12 bg-emerald-500 mt-2 rounded"></div>
    </div>

    <div class="flex flex-col lg:flex-row items-stretch gap-7">
      <div
        class="w-full lg:w-3/5 bg-gray-900/40 border border-gray-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm"
      >
        <h3 class="text-xl font-bold text-white tracking-wide mb-2">Send Me A Message</h3>
        <p class="text-sm font-medium text-gray-400 whitespace-nowrap">
          Please fill out the form below to send us an email and we will get back to you as soon as
          possible.
        </p>

        <form @submit.prevent="handleSendMessage" class="space-y-5 mt-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="flex flex-col space-y-2">
              <label class="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider"
                >Your Name</label
              >
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="John Doe"
                class="w-full h-11 bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-xl px-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors duration-200"
              />
            </div>
            <div class="flex flex-col space-y-2">
              <label class="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                Email Address
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                @input="validateEmail"
                placeholder="john@example.com"
                :class="[
                  'w-full h-11 bg-gray-950 border rounded-xl px-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors duration-200',
                  emailError
                    ? 'border-rose-500/80 focus:border-rose-500'
                    : 'border-gray-800 focus:border-emerald-500/50',
                ]"
              />
              <!-- Real-time Validation Message Banner -->
              <span v-if="emailError" class="text-xs font-medium text-rose-400 tracking-wide mt-1">
                {{ emailError }}
              </span>
            </div>
          </div>

          <div class="flex flex-col space-y-2">
            <label class="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider"
              >Message</label
            >
            <textarea
              v-model="form.message"
              required
              rows="5"
              placeholder="Tell me all about your project ideas..."
              class="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-xl p-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors duration-200 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full sm:w-auto text-sm font-semibold bg-emerald-500 text-gray-950 px-6 py-3 rounded-xl hover:bg-emerald-400 active:scale-[0.98] transition-all font-mono tracking-wider font-bold shadow-md shadow-emerald-500/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? "Sending Message..." : "Submit Message" }}
          </button>
        </form>
        <SuccessModal :isOpen="isModalOpen" @close="handleCloseModal" />
      </div>

      <div class="w-full lg:w-2/5 flex flex-col justify-between gap-6">
        <div class="flex-1 flex flex-col justify-center space-y-8">
          <h3 class="text-xl font-bold text-white tracking-wide mb-2">Contact info</h3>

          <div class="flex items-start space-x-4 mt-10">
            <div
              class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-emerald-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div class="space-y-0.5">
              <p class="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                Email Me Directly
              </p>
              <p
                class="text-white hover:text-emerald-400 transition-colors text-sm font-medium inline-block"
              >
                columnadominic@gmail.com
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div
              class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-emerald-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.622c0-1.164.945-2.108 2.108-2.108h1.157c1.11 0 2.009.829 2.122 1.933v.151c.113 1.104-.64 2.108-1.748 2.317L5.757 9.17a15.918 15.918 0 0 0 7.073 7.073l.261-1.12c.209-1.108 1.214-1.86 2.317-1.748h.151c1.104.113 1.933.112 1.933 1.222v1.157c0 1.164-.945 2.108-2.108 2.108h-1.157a16.5 16.5 0 0 1-13.857-13.857V6.622Z"
                />
              </svg>
            </div>
            <div class="space-y-0.5">
              <p class="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                Call or Text
              </p>
              <p
                class="text-white hover:text-emerald-400 transition-colors text-sm font-medium inline-block"
              >
                +63 993 644 6066
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div
              class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-emerald-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div class="space-y-0.5">
              <p class="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                Current Location
              </p>
              <p class="text-gray-300 text-sm font-medium hover:text-emerald-400">
                Metro Manila, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
