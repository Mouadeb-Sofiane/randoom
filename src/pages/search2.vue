<script setup lang="ts">
import { pb } from '@/backend'
import type { SeriesResponse } from '@/pocketbase-types';
import CardSeries from '@/components/CardSeries.vue';
import { ref, onMounted } from 'vue';

let listeseries: SeriesResponse[] = [];
let RandomSeries: SeriesResponse | null = null;
const showRandomSeries = ref(false);

async function fetchSeriesList() {
  listeseries = await pb.collection('film').getFullList<SeriesResponse>();
  RandomSeries = listeseries[Math.floor(Math.random() * listeseries.length)];
  console.log("Tirer un film aléatoirement", RandomSeries);
  showRandomSeries.value = true; // Afficher les informations sur le film une fois récupérées
}

onMounted(() => {
  fetchSeriesList();
});
</script>

<template>
  <div class="mt-40">
    <CardSeries v-if="showRandomSeries" v-bind="{ ...RandomSeries }" />
  </div>
</template>