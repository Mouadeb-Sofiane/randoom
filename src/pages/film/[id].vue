<script setup lang="ts">

import {pb} from '@/backend'

const props = defineProps<{ id: string }>();

console.log(props.id);
import { oneIDFilm } from '@/backend'
const aFilm = await oneIDFilm (props.id)
console.log(aFilm);



const urlImg0 = aFilm.Poster_Link ? pb.getFileUrl(aFilm, aFilm.Poster_Link, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>
    
<template>
  <div class="flex justify-center"> 
  <div class="mt-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
      <h1 class="border-b-2 text-3xl text-center border-b-white underline mb-5">{{ aFilm.Series_Title }}</h1>
      <div class="flex justify-center">
        <IconFilmSerie/>
      </div>
          <IconRating class="ml-2" />
        <p class="mt-3 text-black">
          <span class="underline font-bold">Description:</span> {{ aFilm.Overview }}
        </p>
        <p class="mt-3 text-gray-700 dark:text-gray-400">
          <span class="underline font-bold">Rélisateur:</span> {{ aFilm.Director }}
        </p>
        <p class="mt-3 text-gray-700 dark:text-gray-400">
          <span class="underline font-bold">Les personnages principaux:</span> {{ aFilm.Star1 }}, {{ aFilm.Star2 }}, {{ aFilm.Star3 }}, {{ aFilm.Star4 }}
        </p>
        <div class="flex justify-center mt-6">
          <RouterLink to="/randoom">
            <button class="bg-blue text-white rounded-full py-2 px-4">Relancer la roue</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-40"></div>
</template>
