<script setup lang="ts">
import { pb } from '@/backend'
import type { FilmResponse } from '@/pocketbase-types'
import IconRating from './icons/IconRating.vue';
import IconFilmSerie from './icons/IconFilmSerie.vue';

const props: FilmResponse = defineProps<FilmResponse>() 
  const urlImg = props.Poster_Link ? pb.getFileUrl(props, props.Poster_Link, { thumb: '100x250' }) : '/image-not-found.png'
    console.log(urlImg)
</script>


<template>
<div class="flex justify-center"> 
  <div class="mt-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
      <h1 class="border-b-2 text-3xl text-center border-b-white underline mb-5">{{ Series_Title }}</h1>
      <div class="flex justify-center">
        <IconFilmSerie/>
      </div>
      <div class="p-5">
        <p class="mt-3 text-gray-500 dark:text-gray-400 text-center">{{ Runtime }} / {{ Released_Year }}</p>
        <div class="flex items-center justify-center mt-3">
          <p class="text-gray-500 dark:text-gray-400">{{ IMDB_Rating }}</p>
          <IconRating class="ml-2" />
        </div>
        <p class="mt-3 text-black">
          <span class="underline font-bold">Description:</span> {{ Overview }}
        </p>
        <p class="mt-3 text-gray-700 dark:text-gray-400">
          <span class="underline font-bold">Rélisateur:</span> {{ Director }}
        </p>
        <p class="mt-3 text-gray-700 dark:text-gray-400">
          <span class="underline font-bold">Les personnages principaux:</span> {{ Star1 }}, {{ Star2 }}, {{ Star3 }}, {{ Star4 }}
        </p>
        <div class="flex justify-center mt-6">
          <RouterLink to="/randoom">
            <button class="bg-blue text-white rounded-full py-2 px-4">Relancer la roue</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</div> 
  <div class="mb-40"></div>

</template>

      
    
