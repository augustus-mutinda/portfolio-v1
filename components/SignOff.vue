<template>
  <div>
    <p class="text-sm text-slate-500 px-4 font-inter font-normal pb-2">
      Loosely designed in <a class="text-slate-400 hover:text-emerald-500" href="https://penpot.app/" target="_blank">Penpot</a>
      and coded in
      <a class="text-slate-400 hover:text-emerald-500" href="https://www.jetbrains.com/webstorm/" target="_blank">Webstorm</a>
      by yours truly. Built with
      <a class="text-slate-400 hover:text-emerald-500" href="https://nuxt.com/" target="_blank">Nuxt3</a> and
      <a class="text-slate-400 hover:text-emerald-500" href="https://tailwindcss.com/" target="_blank">Tailwind
        CSS</a>
      , deployed with
      <a class="text-slate-400 hover:text-emerald-500" href="https://vercel.com/" target="_blank">Vercel</a>
      . All text is set in the Inter
      typeface.
    </p>

    <p class="text-sm text-slate-500 px-4 font-inter font-normal pb-16">All rights reserved. 2023 - {{ year }} Augustus Mutinda.</p>
  </div>
</template>
<script setup lang="ts">
const year = new Date().getFullYear();
</script>