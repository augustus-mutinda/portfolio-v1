<template>
  <div>
    <p class="text-slate-700 font-inter font-medium text-xl pt-8">What I've been up to...</p>
    <div v-for="(role, index) in roles" :key="index">
      <CareerSection :prop="role"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import CareerSection from "~/components/CareerSection.vue";
import {ProfessionalRole} from "~/plugins/models/Role";

const roles = reactive(
    [
      new ProfessionalRole(
          "May 2023",
          "Now",
          "Lead Mobile Engineer",
          "Safaricom PLC, MyCounty",
          "Part of the team that brought myCounty app to life!, as a dedicated team member," +
          " my responsibilities spanned across pivotal development stages, collaborating seamlessly\n" +
          "with cross-functional teams in design, development, testing, security, and QA.",
          [
            "Android",
            "Compose",
            "Java/Kotlin",
            "Springboot"
          ]
      ),
      new ProfessionalRole(
          "2021",
          "Apr 2023",
          "Snr. Mobile Engineer",
          "Safaricom PLC - DigiFarm",
          "Worked on both DigiFarm and DigiFarm Village Advisor apps.\n" +
          "My responsibilities spanned across development stages, collaborating seamlessly\n" +
          "with cross-functional teams in design, development, testing, security, and QA.",
          [
            "Android",
            "Compose",
            "Java/Kotlin",
            "Springboot"
          ]),
      new ProfessionalRole(
          "Jul",
          "Oct 2021",
          "Microservices Engineer",
          "Safaricom PLC - DigiFarm",
          "Worked on Digi Springboot microservices, migrating the architecture from.\n" +
          "Monolith Architecture to Microservices.",
          [
            "Docker",
            "Postgres",
            "Openshift",
            "Java/Kotlin",
            "Springboot"
          ]),
    ]
)
</script>
