<script setup lang="ts">
import { pb } from '@/backend'
import type { BooksResponse } from '@/pocketbase-types'
import IconRating from './icons/IconRating.vue';
import IconLivre from './icons/IconLivre.vue';

const props: BooksResponse = defineProps<BooksResponse>() 
  const urlImg = props.Poster_Link ? pb.getFileUrl(props, props.Poster_Link, { thumb: '100x250' }) : '/image-not-found.png'
    console.log(urlImg)
</script>


<template>
<div class="flex justify-center"> 
  <div class="mt-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow text-black dark:bg-gray-400 dark:border-gray-700">
    <div>
      <h1 class="border-b-2 text-3xl text-center border-b-black underline mb-5">{{ title }}</h1>
      <div class="flex justify-center">
        <IconLivre/>
      </div>
      <div class="p-5">
        <div class="flex items-center justify-center mt-3">
          <p class="text-black">{{ average_rating }}</p>
          <IconRating class="ml-2" />
        </div>
        <p class="mt-3 text-black">
          <span class="underline font-bold">Auteur:</span> {{ authors }}
        </p>
        <p class="mt-3text-black">
          <span class="underline font-bold">Maisons d'éditions:</span> {{ publisher }}
        </p>
        <div class="flex justify-center mt-6">
          <RouterLink to="/randoomBooks">
            <button class="bg-blue text-white rounded-full py-2 px-4">Relancer la roue</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</div> 
  <div class="mb-40"></div>

</template>
  
