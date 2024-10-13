<script setup>
import { computed } from "vue";

const props = defineProps(["books"]);

const booksRead = computed(() => {
  return props.books.filter((book) => book.isRead).length;
});

const booksReadMessage = computed(() => {
  return booksRead.value >= props.books.length
    ? "Okay, done"
    : `${booksRead.value} of ${props.books.length} read`;
});
</script>

<template>
  <div class="books-read">
    <label for="progress">Seu Progresso</label><br />
    <progress :value="booksRead" :max="books.length"></progress>
    <p>{{ booksReadMessage }}</p>
  </div>
</template>