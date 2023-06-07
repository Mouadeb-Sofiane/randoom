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
    const filmId = 'm8who5vtb5sgdpn'; 
    fetchFilmById(filmId);
  });
</script>
<template>
    <div class="mt-40">
      <div v-if="film">
        <div class="font-serif text-xl">
          <p class="mt-3 text-black">
            <span class="underline font-bold">Titre du film :</span>{{ film.Series_Title }}
          </p>
          <p class="mt-3 text-black">
            <span class="underline font-bold">Durée du film : </span>{{ film.Runtime }}
          </p>
          <p class="mt-3 text-black">
            <span class="underline font-bold">Date de sortie :</span> {{ film.Released_Year }}
          </p>
          <p class="mt-3 text-black">
            <span class="underline font-bold">Note globale du film :</span> {{ film.IMDB_Rating }}
          </p>
          <p class="mt-3 text-black">
            <span class="underline font-bold"><p>Description :</span> {{ film.Overview }}</p>
          </p>
      </div>
      <div v-else>
        <p>Aucun film trouvé.</p>
      </div>
    </div>
  </template>
  
  
  
  