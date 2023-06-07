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
:::::::c
      
    
