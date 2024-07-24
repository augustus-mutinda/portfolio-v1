<template>
  <div v-for="(project, index) in projects" :key="index" class="pt-8">
    <ProjectWidget :prop="project"/>
  </div>
</template>
<script setup lang="ts">

import {Project} from "~/plugins/models/Project";
import ProjectWidget from "~/components/ProjectWidget.vue";

const projects = reactive(
    [
      new Project(
          "Apr 2024",
          "Now",
          "ChamaHub",
          "https://i.pinimg.com/564x/f1/f9/56/f1f95657f98f59ca9bb0cc4c3d692839.jpg",
          "Part of the team that brought myCounty app to life!, as a dedicated team member," +
          " my responsibilities spanned across pivotal development stages, collaborating seamlessly\n" +
          "with cross-functional teams in design, development, testing, security, and QA.",
          "https://chamahub.co.ke/",
          [
            "Android",
            "Compose",
            "Java/Kotlin",
            "Springboot"
          ]
      ),
      new Project(
          "Apr 2024",
          "Now",
          "Safaricom Partner App",
          "https://i.pinimg.com/564x/f1/f9/56/f1f95657f98f59ca9bb0cc4c3d692839.jpg",
          "Part of the team that brought myCounty app to life!, as a dedicated team member," +
          " my responsibilities spanned across pivotal development stages, collaborating seamlessly\n" +
          "with cross-functional teams in design, development, testing, security, and QA.",
          "https://chamahub.co.ke/",
          [
            "Android",
            "Compose",
            "Java/Kotlin",
            "Springboot"
          ]
      ),
      new Project(
          "Nov 2021",
          "Apr 2023",
          "DigiFarm",
          "https://i.pinimg.com/564x/f1/f9/56/f1f95657f98f59ca9bb0cc4c3d692839.jpg",
          "Part of the team that brought myCounty app to life!, as a dedicated team member," +
          " my responsibilities spanned across pivotal development stages, collaborating seamlessly\n" +
          "with cross-functional teams in design, development, testing, security, and QA.",
          "https://chamahub.co.ke/",
          [
            "Android",
            "Compose",
            "Java/Kotlin",
            "Springboot"
          ]
      ),
    ]
)
</script>
