<script setup lang="ts">
  import { pb } from '@/backend'
  import type { FilmResponse } from '@/pocketbase-types';
  import { ref, onMounted } from 'vue';
  
  let film = ref(null);
  
  async function fetchFilmById(id: string) {
    try {
      film.value = await pb.collection('film').getOne<FilmResponse>(id);
    } catch (error) {
      console.error(error);
      film.value = null;
    }
  }
  
  onMounted(() => {
    const filmId = 'm8who5vtb5sgdpn'; // Remplacez 'your-film-id' par l'ID du film que vous souhaitez récupérer
    fetchFilmById(filmId);
  });
</script>
<template>
    <div class="mt-40">
      <div v-if="film">
        <div class="font-serif text-xl">
          <p>Titre du film : {{ film.Series_Title }}</p>
          <p>Durée du film : {{ film.Runtime }}</p>
          <p>Date de sortie : {{ film.Released_Year }}</p>
          <p>Note globale du film : {{ film.IMDB_Rating }}</p>
          <p>Description : {{ film.Overview }}</p>
          <p>Directeur artistique : {{ film.Director }}</p>
          <p>Les personnages principaux : {{ film.Star1 }}, {{ film.Star2 }}, {{ film.Star3 }}, {{ film.Star4 }}</p>
        </div>
      </div>
      <div v-else>
        <p>Aucun film trouvé.</p>
      </div>
    </div>
  </template>
  
  
  
  