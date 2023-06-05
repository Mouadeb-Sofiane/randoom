<script setup lang="ts">
import { Allfilm } from '@/backend';
import CardFilms from '@/components/CardFilms.vue';
const listefilm = await Allfilm();
</script>


<template>
    <div class="pt-24 grille"></div>
    <h1 class="border-b-2 border-b-white text-4xl text-center p-1 w-1/4 m-auto mt-24 mb-16 lg:mb-2">Artistes</h1>
    <div class="gap-2 lg:flex lg:justify-center lg:text-center lg:gap-6">
        <CardFilms v-for="aFilm of listefilm" v-bind="{ ...aFilm }" />
    </div>
</template>