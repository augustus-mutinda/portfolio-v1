<template>
  <div class="p-4">
    <div class="flex text-emerald-600 border-white rounded-lg bg-slate-800 p-4 hover:text-emerald-500 hover:bg-slate-900">
      <div class="flex-auto w-1/3">
        <p class="text-base font-medium text-slate-500 font-inter pb-4">{{ startDate }} - {{ endDate }}</p>
      </div>
      <div class="flex-auto w-2/3">
        <p class="text-base font-medium font-inter pb-2 pe-2">
          {{ roleName }}, <span class="text-slate-300">{{ company }}</span>
        </p>
        <p class="text-sm text-slate-500 font-light font-inter">{{ description }}</p>
        <div class="grid grid-flow-row-dense grid-cols-4 auto-cols-auto auto-rows-min">
          <div v-for="(skill, index) in skills" :key="index" class="pe-2 py-2">
            <p class="col-span-2 text-center rounded-3xl bg-emerald-500/10 font-normal text-sm font-inter text-emerald-500 px-1 py-1 hover:text-cyan-500">
              {{ skill }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ProfessionalRole} from "~/plugins/models/Role";

const props = defineProps({
  prop: {
    type: ProfessionalRole,
    required: true
  }
});
const role = props.prop
const startDate = role.startDate
const endDate = role.endDate
const roleName = role.role
const company = role.company
const description = role.description
const skills = role.skills
</script>