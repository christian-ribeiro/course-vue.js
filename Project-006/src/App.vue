<script setup>
import Books from "./components/Books.vue";
import { reactive } from "vue";

let books = reactive([
  {
    id: 1,
    title: "Kill Bill",
    cover:
      "https://midias.imagemfilmes.com.br/capas/8751147a-b2a4-4613-8370-11a663b599b3_m.jpg?2019-06-17T15:54:41.330753",
    isRead: true,
    isbn: "0-395-07157-8",
    author: "Quentin Tarantino",
  },
  {
    id: 2,
    title: "Kill Bill - Vol. 0216",
    cover:
      "https://midias.imagemfilmes.com.br/capas/55c4cd15-ad27-4f0b-bdb3-11243731f946_m.jpg?2024-05-03T14:30:03.517174",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Quentin Tarantino",
  },
  {
    id: 3,
    title: "Cidade de Deus",
    cover:
      "https://midias.imagemfilmes.com.br/capas/fed8d458-8c5c-4997-85c5-3914b275dcf9_m.jpg?2019-06-17T15:54:41.330753",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Fernando MeirellesKátia Lund",
  },
  {
    id: 4,
    title: "Ursinho Pooh: Sangue e Mel 2",
    cover:
      "https://midias.imagemfilmes.com.br/capas/8a825d27-d8b3-4bdc-bf9a-eab76be0b1f7_m.jpg?2024-03-20T15:50:38.153964",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Rhys Frake-Waterfield",
  },
]);
</script>

<template>
  <div class="container">
    <h1>📖 Meus Livros</h1>
    <div class="header-btns">
      <button class="btn">Adicionar Livro +</button>
    </div>

    <div class="books-container">
      <Books :books="books" />
    </div>
  </div>
</template>

<style scoped>
</style>