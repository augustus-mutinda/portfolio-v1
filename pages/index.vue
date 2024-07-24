<template>
  <div class="flex">
    <div class="flex-auto w-40 pt-8 ps-16 max-h-screen">
      <HeroLeftSection/>
    </div>
    <div class="flex-auto w-60 pt-16 pe-16 max-h-screen overflow-y-scroll">
      <HeroRightSection/>
      <CareersSection/>
      <p class="text-sm text-slate-500 px-4 font-inter font-normal pb-16">
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
    </div>
  </div>
</template>

<script>
import HeroLeftSection from '~/components/HeroLeftSection.vue'
import HeroRightSection from "~/components/HeroRightSection.vue";
import CareersSection from "~/components/CareersSection.vue";

export default {
  components: {
    CareersSection,
    HeroRightSection,
    HeroLeftSection
  }
}
</script>

