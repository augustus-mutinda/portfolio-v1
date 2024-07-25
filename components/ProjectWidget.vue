<template>
  <div class="pe-4">
    <div
        class="flex text-emerald-600 rounded-2xl bg-slate-900 p-4 hover:text-emerald-500 hover:bg-slate-800">
      <div class="flex-auto w-1/3 pe-4">
        <img :src="image" class="rounded-2xl w-full aspect-square object-cover" alt="{{name}}">
      </div>
      <div class="flex-auto w-full">
        <div class="flex">
          <a :href="link" class="text-base font-medium font-inter pb-2 pe-2 hover:text-emerald-500 flex-auto w-2/3">
            {{ name }}
          </a>
          <LinkIcon class="flex-auto w-1"/>
        </div>
        <p class="text-sm text-slate-500 font-light font-inter">{{ description }}</p>
        <div class="grid grid-flow-row-dense grid-cols-4 auto-cols-auto auto-rows-min">
          <div v-for="(skill, index) in skills" :key="index" class="pe-2 py-2">
            <p class="col-span-2 text-center rounded-3xl bg-emerald-500/10 font-normal text-sm font-inter text-emerald-500 px-1 py-1 hover:text-emerald-950">
              {{ skill }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Project} from "~/plugins/models/Project";
import LinkIcon from "~/components/icons/LinkIcon.vue";

const props = defineProps({
  prop: {
    type: Project,
    required: true
  }
});
const project = props.prop

const startDate = project.startDate
const endDate = project.endDate
const name = project.name
const image = project.image
const link = project.link
const description = project.description
const skills = project.skills
</script>