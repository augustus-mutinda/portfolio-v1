<template>
  <div ref="container" class="relative w-full h-full overflow-hidden" @mousemove="handleMouseMove">
    <div
        :style="flashlightStyle"
        class="absolute w-64 h-64 rounded-full bg-black opacity-50 pointer-events-none"
    ></div>
    <slot></slot>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue';

const container = ref(null);
const flashlight = reactive({
  x: 0,
  y: 0,
});

const handleMouseMove = (event) => {
  const rect = container.value.getBoundingClientRect();
  flashlight.x = event.clientX - rect.left - 128; // 128 = half of flashlight diameter
  flashlight.y = event.clientY - rect.top - 128;
};

const flashlightStyle = computed(() => ({
  left: `${flashlight.x}px`,
  top: `${flashlight.y}px`,
}));
</script>

<style scoped>
/* Add any additional styling if needed */
</style>