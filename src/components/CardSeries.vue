<script setup lang="ts">
import { pb } from '@/backend'
import type { SeriesResponse } from '@/pocketbase-types'
const props: SeriesResponse = defineProps<SeriesResponse>()


const urlImg1 = props.Poster_Link ? pb.getFileUrl(props, props.Poster_Link, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg1)
</script>


<template>

    <div class="flex justify-center lg:gap-80">
    <div>
        <h1 class="border-b-2 text-4xl text-center border-b-white">{{ Series_Title }}</h1>
    <div class="">
      <img :src="urlImg1">
    </div>

    <div class="font-serif text-3xl">
      <p>Image : {{ Poster_Link }}</p>
      <p>Tire de la serie : {{ Series_Title }}</p>
      <p>Les personnages principaux : {{ Star1, Star2, Star3, Star4 }}</p>
      <p>Note global du film : {{ IMDB_Rating }}</p>
      <p>Description : {{ Overview }}</p>
      <RouterLink
        :to="{
            name: 'series-id',
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