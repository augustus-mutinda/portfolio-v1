<template>
  <p class="text-slate-700 font-inter font-medium text-xl pt-8">What I've built</p>
  <div v-for="(project, index) in projects" :key="index">
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
          "Working on the next big thing. Afraid that's all I may divurge for now.",
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
          "myCounty",
          "https://play-lh.googleusercontent.com/pIUW6_awgiJJ-bK760F-k8soh5m9UcZbZDpUeCQ8PMv35mNij5MZrkCGB0ZOK7Jb6AM=w526-h296-rw",
          "Part of the team that brought myCounty app to life!, as a dedicated team member," +
          " my responsibilities spanned across pivotal development stages, collaborating seamlessly\n" +
          "with cross-functional teams in design, development, testing, security, and QA.",
          "https://play.google.com/store/apps/details?id=com.safaricom.mycounty&hl=en",
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
          "https://play-lh.googleusercontent.com/iXleoqkathefq7V15NoDF-zbRS4Rm3rhSOemE1G2ORs6uKGtTeGRDBX8GML2QIpZM1RD=w526-h296-rw",
          "Here I worked on Sales Force Effectiveness bit," +
          " my responsibilities spanned across several development stages, collaborating seamlessly\n" +
          "with cross-functional teams in design, development, testing, security, and QA.",
          "https://play.google.com/store/apps/details?id=com.safaricom.android.mysafaricompartner&hl=en",
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
          "https://digifarmkenya.com/img/footer-logo.png",
          "As a Microservices Engineer, I developed various services that run the channels." +
          "I later on switched gears and  worked on both DigiFarm App and DigiFarm Village Advisor app\n" +
          " working with cross-functional teams in design, development, testing, security, and QA.",
          "https://digifarmkenya.com/",
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
          "Orbit Valuers",
          "https://orbitke.com/assets/img/logo.png",
          "Worked as part mobile engineer and Architect, I helped come up with the initial design" +
          " for the overall Orbit System.",
          "https://orbitke.com",
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
