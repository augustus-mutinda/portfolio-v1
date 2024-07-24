<template>
  <div class="lg:flex lg:justify-between lg:gap-4">
    <div class="lg:sticky lg:flex lg:max-h-screen lg:justify-between lg:w-1/2 p-8 ps-8 lg:py-16 lg:ps-32">
      <HeroLeftSection/>
    </div>
    <div class="lg:w-1/2 lg:max-h-screen overflow-y-scroll p-8 lg:py-16 lg:pe-32">
      <HeroRightSection/>
      <CareersSection/>
      <ProjectsSection/>
      <SignOff class="pt-8"/>
    </div>
  </div>
</template>

<script>
import HeroLeftSection from '~/components/HeroLeftSection.vue'
import HeroRightSection from "~/components/HeroRightSection.vue";
import CareersSection from "~/components/CareersSection.vue";
import Socials from "~/components/Socials.vue";
import SignOff from "~/components/SignOff.vue";

export default {
  components: {
    SignOff,
    Socials,
    CareersSection,
    HeroRightSection,
    HeroLeftSection
  }
}
</script>

