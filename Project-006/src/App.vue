<script setup>
import { ref, reactive } from "vue";

let count = ref(0);

let courses = reactive([
  {
    title: "Javascript",
  },
  {
    title: "React",
  },
  {
    title: "Vue",
  },
]);

let newCourse = {};

function increment() {
  count.value++;
}

function addCourse() {
  courses.push(newCourse);
  newCourse = {};
}
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
  <div>
    <h1>Courses list</h1>
    <ul>
      <li v-for="course in courses" :key="course.title">
        {{ course.title }}
      </li>
    </ul>
    <br />
    <input type="text" v-model="newCourse.title" />
    <button @click="addCourse" type="button">Add</button>
  </div>
</template>

<style scoped>
</style>