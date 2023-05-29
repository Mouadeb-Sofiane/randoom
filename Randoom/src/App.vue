<script setup lang="ts">
	import { RouterView } from 'vue-router'
  import Header from './components/HeaderPage.vue'
  import Footer from './components/FooterPage.vue'
  import { onMounted, ref } from 'vue'
  import PocketBase from 'pocketbase'

  let pb = null;
  onMounted(async() => {
    pb = new PocketBase('http://127.0.0.1:8090');

    const authData = await pb.collection('users')
    .authWithPassword('sofiane.mouadeb.70000@gmail.com', 'ProjetS2.25');
    // after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "logout" the last authenticated model
pb.authStore.clear();
  });
  
</script>

<template>
  <Header />

<main>
 <RouterView />
</main>

<Footer />
</template>