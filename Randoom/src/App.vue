<script setup lang="ts">
	import { RouterView } from 'vue-router'
  import Header from './components/HeaderPage.vue'
  import Footer from './components/FooterPage.vue'

import PocketBase from 'pocketbase';


var pocketbase_ip=''
if (import.meta.env.META === 'production')
  pocketbase_ip="http://185.216.26.50:80"
else 
  pocketbase_ip="http://127.0.0.1:8090"
alert (pocketbase_ip)

</script>

<template>
  <Header />

<main>
 <RouterView />
</main>

<Footer />
</template>

