<!-- <script setup lang="ts">
import { pb } from '@/backend'
import type { FilmResponse } from '@/pocketbase-types'

const props: FilmResponse = defineProps<FilmResponse>() 
  const urlImg = props.Poster_Link ? pb.getFileUrl(props, props.Poster_Link, { thumb: '100x250' }) : '/image-not-found.png'
    console.log(urlImg)
</script>


<template>

    <div class="flex justify-center lg:gap-80">
    <div>
        <h1 class="border-b-2 text-4xl text-center border-b-white">{{ Series_Title }}</h1>
    <div class="">
      <img :src="urlImg">
    </div>

    <div class="font-serif text-xl">
      <p>Tire du film : {{ Series_Title }}</p>
      <p>Durée du film : {{ Runtime }}</p>
      <p>Date de sortie : {{ Released_Year }}</p>
      <p>Note global du film : {{ IMDB_Rating }}</p>
      <p>Description : {{ Overview }}</p>
      <p>Directeur artistique : {{ Director }}</p>
      <p>Les personnages principaux : {{ Star1, Star2, Star3, Star4 }}</p>
      <RouterLink
        :to="{
            name: 'film-id',
            params: {
                id
            }
        }"
        class=""
      >
        <button class="text-black font-serif rounded-full bg-autre m-2 py-2 px-2 ">En savoir plus</button>
      </RouterLink>
    </div> 
    </div> 
    </div>
</template>  -->

<script setup lang="ts">
import { pb } from '@/backend'
import type { FilmResponse } from '@/pocketbase-types'
import IconRating from './icons/IconRating.vue';

const props: FilmResponse = defineProps<FilmResponse>() 
  const urlImg = props.Poster_Link ? pb.getFileUrl(props, props.Poster_Link, { thumb: '100x250' }) : '/image-not-found.png'
    console.log(urlImg)
</script>

<!-- <template>
  <div class="lg:flex lg:justify-center p-10 gap-5">
  <div class="lg:w-3/5">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
        <h1 class="border-b-2 text-4xl text-center border-b-white">{{ Series_Title }}</h1>
    <div class="">
      <img class="rounded-t-lg" :src="urlImg">
    </div>

    <div class="p-5">
      <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center underline"> {{ Series_Title }}</p>
      <p class="mt-3 text-gray-500 dark:text-gray-400">{{ Runtime }} / {{ Released_Year }}</p>
      <div class="flex items-center">      
        <p class="mb-3 text-gray-500 dark:text-gray-400">{{ IMDB_Rating }}</p>
          <IconRating class="mb-3 ml-2"/>
      </div>
      <p class="mb-3 text-black"><p class="underline font-bold">Description :</p> {{ Overview }}</p>
      <p class="mb-3 text-gray-700 dark:text-gray-400"><p class="underline font-bold">Directeur artistique : </p> {{ Director }}</p>
      <p class="mb-10 text-gray-700 dark:text-gray-400"><p class="underline font-bold">Les personnages principaux : </p> {{ Star1, Star2, Star3, Star4 }}</p>
      <RouterLink to="/randoom">
        <button class="bg-blue text-white rounded-full py-2 px-1">Relancer la roue</button>
      </RouterLink>
    </div> 
    </div> 
    </div>
  </div>
</div>
    <div class="mb-52"></div>
</template> -->


<template>
  <div class="mt-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
      <h1 class="border-b-2 text-4xl text-center border-b-white">{{ Series_Title }}</h1>
      <div class="flex justify-center">
        <img class="rounded-t-lg" :src="urlImg" alt="Series Poster">
      </div>
      <div class="p-5">
        <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center underline">{{ Series_Title }}</p>
        <p class="mt-3 text-gray-500 dark:text-gray-400 text-center">{{ Runtime }} / {{ Released_Year }}</p>
        <div class="flex items-center justify-center mt-3">
          <p class="text-gray-500 dark:text-gray-400">{{ IMDB_Rating }}</p>
          <IconRating class="ml-2" />
        </div>
        <p class="mt-3 text-black">
          <span class="underline font-bold">Description:</span> {{ Overview }}
        </p>
        <p class="mt-3 text-gray-700 dark:text-gray-400">
          <span class="underline font-bold">Directeur artistique:</span> {{ Director }}
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
  <div class="mb-40"></div>
</template>

      
    
