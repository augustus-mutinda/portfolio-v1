<template>
  <div class="flashlight" @mousemove="moveFlashlight" ref="flashlight">
    <div class="light"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    moveFlashlight(event) {
      const flashlight = this.$refs.flashlight;
      const light = flashlight.querySelector('.light');
      const rect = flashlight.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      light.style.setProperty('--x', `${x}px`);
      light.style.setProperty('--y', `${y}px`);
    }
  }
};
</script>

<style scoped>
.flashlight {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 3000;
}

.light {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  background: radial-gradient(rgba(29, 78, 216, 0.15), transparent 60%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1000;
  mix-blend-mode: screen;
  --x: 50%;
  --y: 50%;
  transform: translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0);
}
</style>

