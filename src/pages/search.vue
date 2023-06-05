<script setup lang="ts">
import { pb } from '@/backend'
import type { FilmResponse } from '@/pocketbase-types';
import CardFilms from '@/components/CardFilms.vue';
import { ref } from 'vue';
import { listenerCount } from 'process';

let listefilm: FilmResponse[] = [];
let randomFilm: FilmResponse | null = null;
const showRandomFilm = ref(false);

async function fetchFilmList() {
listefilm = await pb.collection('film').getFullList<FilmResponse>();
randomFilm = listefilm[Math.floor(Math.random() * listenerCount.length)];
console.log("le film aléatoire", randomFilm);
}

const displayRandomFilm = () => {
    showRandomFilm.value = true;
};

fetchFilmList();
</script>

<template>
    <div class="mt-24">
        <button @click="displayRandomFilm">Afficher un film aléatoire</button>
        <CardFilms v-if="showRandomFilm" v-bind="{ ...randomFilm }" />
    </div>
</template>