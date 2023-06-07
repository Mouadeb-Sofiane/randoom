<script setup lang="ts">
import { pb } from '@/backend'
import type { FilmResponse } from '@/pocketbase-types';
import CardFilms from '@/components/CardFilms.vue';
import { ref, onMounted } from 'vue';

let listefilm: FilmResponse[] = [];
let RandomFilm: FilmResponse | null = null;
const showRandomFilm = ref(false);

async function fetchFilmList() {
  listefilm = await pb.collection('film').getFullList<FilmResponse>();
  RandomFilm = listefilm[Math.floor(Math.random() * listefilm.length)];
  console.log("Tirer un film aléatoirement", RandomFilm);
  showRandomFilm.value = true; // Afficher les informations sur le film une fois récupérées
}

onMounted(() => {
  fetchFilmList();
});
</script>

<template>
  <div class="mt-40">
    <CardFilms v-if="showRandomFilm" v-bind="{ ...RandomFilm }" />
  </div>
</template>
