<script setup lang="ts">
import { pb } from '@/backend'
import type { BooksResponse } from '@/pocketbase-types'
const props: BooksResponse = defineProps<BooksResponse>()
</script>


<template>

    <div class="flex justify-center lg:gap-80">
    <div>
        <h1 class="border-b-2 text-4xl text-center border-b-white">{{ title }}</h1>
    </div>

    <div class="font-serif text-3xl">
      <p>Tire du livre : {{ title }}</p>
      <p>Auteur : {{ authors }}</p>
      <RouterLink
        :to="{
            name: 'books-id',
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
</template>