<template>
  <section class="hero p-16 text-start">
    <h1 class="text-5xl font-inter font-semibold text-slate-300 py-4">Augustus Mutinda</h1>
    <p class="text-xl font-medium text-slate-400 font-inter pb-4">Mobile, UI/UX & Microservices Engineer</p>
    <p class="text-base text-slate-500 font-light font-inter">
      I build pixel-perfect, engaging, and <br/>accessible digital experiences.
    </p>
    <div class="container m-auto grid grid-cols-8 py-8">
      <Github class="container"/>
      <LinkedIn class="container"/>
      <X class="container"/>
    </div>
  </section>
</template>
<script setup lang="ts">
import LinkedIn from "~/components/icons/LinkedIn.vue";
import Github from "~/components/icons/Github.vue";
import X from "~/components/icons/x.vue";
</script>