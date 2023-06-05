<script setup lang="ts">

import {pb} from '@/backend'

const props = defineProps<{ id: string }>();

console.log(props.id);
import { oneIDFilm } from '@/backend'
const aFilm = await oneIDFilm (props.id)
console.log(aFilm);

import { oneIDSeries } from '@/backend'
const aSeries = await oneIDSeries (props.id)
console.log(aSeries);

import { oneIDBooks } from '@/backend'
const aBooks = await oneIDBooks (props.id)
console.log(aBooks);



const urlImg0 = aFilm.Poster_Link ? pb.getFileUrl(aFilm, aFilm.Poster_Link, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>
    
<template>
  <div class="pt-28">
    <h1 class="border-b-2 border-b-white p-1 m-3 w-1/3">{{ aFilm.Series_Title }}</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img class="w-full" :src="urlImg0">
      <div>
        <div>
          <h2 class="border-b-2 border-b-white p-1 m-3 w-full lg:w-2/4 lg:text-4xl">Description</h2>
          <p class="ml-5 mr-5 text-lg lg:text-3xl" v-html="aFilm.Overview"></p>
        </div>
      </div>
    </div>
    <p class="border-b-4 mt-10 bg-white p-1 mx-5 md:mx-28"></p>
    <div>
      <h2 class="border-b-2 border-b-white p-1 m-3 w-1/3 mt-10 mb-10">Notes global du film :</h2>
      <p class="ml-5 mr-5 text-lg lg:text-3xl" v-html="aFilm.IMDB_Rating"></p>
    </div>
  </div>
</template>
