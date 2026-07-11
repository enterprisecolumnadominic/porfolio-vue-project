<script setup lang="ts">
// Define props passed down from the parent view
defineProps<{
  isOpen: boolean;
}>();

// Define custom events emitted back up to the parent view
const emit = defineEmits<{
  (e: "close"): void;
}>();

// Helper method to let the parent know it's time to hide the modal
const emitClose = () => {
  emit("close");
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity"
  >
    <!-- Theme-matched container: Dark gray background, crisp border, and soft emerald shadow -->
    <div
      class="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl shadow-emerald-500/5 text-center transform transition-all"
    >
      <!-- Icon Container: Swapped light green for a deep emerald theme accent -->
      <div
        class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4"
      >
        <svg class="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <!-- Typography: White headers and muted gray body text matching the parent page -->
      <h3 class="text-xl font-bold text-white tracking-wide mb-2">Message Sent!</h3>
      <p class="text-sm font-medium text-gray-400 mb-6">
        Thank you for reaching out. Your message has been safely delivered to my inbox.
      </p>

      <!-- Action Button: Styled to match your form's Submit button styling exactly -->
      <button
        @click="emitClose"
        class="w-full inline-flex justify-center rounded-xl bg-emerald-500 text-gray-950 text-sm font-mono font-bold tracking-wider px-4 py-3 hover:bg-emerald-400 active:scale-[0.98] transition-all focus:outline-none cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
</template>
