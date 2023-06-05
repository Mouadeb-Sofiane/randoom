<script setup lang="ts">
import { pb } from '@/backend'
import type { FilmResponse } from '@/pocketbase-types'
const props: FilmResponse = defineProps<FilmResponse>()


const urlImg0 = props.Poster_Link ? pb.getFileUrl(props, props.Poster_Link, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>


<template>

    <div class="flex justify-center lg:gap-80">
    <div>
        <h1 class="border-b-2 text-4xl text-center border-b-white">{{ Series_Title }}</h1>
    <div class="">
      <img :src="urlImg0">
    </div>

    <div class="font-serif text-3xl">
      <p>Tire du film : {{ Series_Title }}</p>
      <p>Durée du film : {{ Runtime }}</p>
      <p>Directeur artistique : {{ Director }}</p>
      <p>Les personnages principaux : {{ Star1, Star2, Star3, Star4 }}</p>
      <p>Date de sortie : {{ Released_Year }}</p>
      <p>Note global du film : {{ IMDB_Rating }}</p>
      <p>Description : {{ Overview }}</p>
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
</template>