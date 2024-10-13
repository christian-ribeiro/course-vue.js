<script setup>
import { computed } from "vue";

const props = defineProps(["courses"]);

const coursesDone = computed(() => {
  return props.courses.filter((item) => item.done).length;
});
</script>

<template>
  <div>
    {{ `${coursesDone} cursos completos de um total de ${courses.length}` }}
  </div>
</template>