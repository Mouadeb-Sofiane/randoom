<script setup lang="ts">
import { pb } from '@/backend'
import type { BooksResponse } from '@/pocketbase-types';
import CardBooks from '@/components/CardBooks.vue';
import { ref, onMounted } from 'vue';

let listebook: BooksResponse[] = [];
let RandomBook: BooksResponse | null = null;
const showRandomBook = ref(false);

async function fetchBooksList() {
  listebook = await pb.collection('books').getFullList<BooksResponse>();
  RandomBook = listebook[Math.floor(Math.random() * listebook.length)];
  console.log("Tirer un film aléatoirement", RandomBook);
  showRandomBook.value = true; // Afficher les informations sur le film une fois récupérées
}

onMounted(() => {
  fetchBooksList();
});
</script>

<template>
  <div class="mt-40">
    <CardBooks v-if="showRandomBook" v-bind="{ ...RandomBook }" />
  </div>
</template>