<script setup lang="ts">

import {pb} from '@/backend'

const props = defineProps<{ id: string }>();

console.log(props.id);
import { oneIDArtiste } from '@/backend'
const unartiste = await oneIDArtiste (props.id)
console.log(unartiste);
import { oneIDOeuvre } from '@/backend';

const oeuvre1 = await oneIDOeuvre(unartiste.oeuvres[0])
const oeuvre2 = await oneIDOeuvre(unartiste.oeuvres[1])


const urlImageoeuvre1 = oeuvre1.image ? pb.getFileUrl(oeuvre1, oeuvre1.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImageoeuvre1)

const urlImageoeuvre2 = oeuvre2.image ? pb.getFileUrl(oeuvre2, oeuvre2.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImageoeuvre2)

const urlImg0 = unartiste.image_artiste ? pb.getFileUrl(unartiste, unartiste.image_artiste, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)

function oneIDOeuvreS(arg0: string) {
throw new Error('Function not implemented.');
}
</script>
    
<template>
  <div class="pt-28">
    <h1 class="border-b-2 border-b-white p-1 m-3 w-1/3">{{ unartiste.nom }}</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img class="w-full" :src="urlImg0">
      <div>
        <div>
          <h2 class="border-b-2 border-b-white p-1 m-3 w-full lg:w-2/4 lg:text-4xl">Bio</h2>
          <p class="ml-5 mr-5 text-lg lg:text-3xl" v-html="unartiste.bio"></p>
        </div>
      </div>
    </div>
    <p class="border-b-4 mt-10 bg-white p-1 mx-5 md:mx-28"></p>
    <div>
      <h2 class="border-b-2 border-b-white p-1 m-3 w-1/3 mt-10 mb-10">Son histoire artistique</h2>
      <p class="ml-5 mr-5 text-lg lg:text-3xl" v-html="unartiste.son_histoire_artistique"></p>
    </div>
  </div>

  <h2 class="border-b-2 border-b-white p-1 m-3 w-1/3 mt-10 mb-10 lg:text-3xl">Oeuvres principales</h2>
  <div class="flex flex-col lg:grille justify-center items-center lg:pb-16">
       <img class=" col-span-6  col-start-3  row-start-1 pb-8 lg:pb-4 w-72 " :src="urlImageoeuvre1">
       <img class=" col-span-5 col-start-8 row-start-1 pb-8 lg:pb-4 w-72 " :src="urlImageoeuvre2">
    </div>
</template>
