<template>
    <div class="pt-52 pb-32 flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div v-if="currentUser">
          <h1 class="flex justify-center text-3xl">Bienvenue {{ currentUser?.name }} !</h1>
          <div class="pt-12">
            <button type="button" @click="doLogout"
              class="mt-10 ml-12 rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se déconnecter
            </button>
            
            <button class="ml-10 rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="../pages/index.vue">Retourner à l'accueil</button>
            <p class="flex mt-12 justify-center text-black"><IconRating/> Abonnement premium bientôt disponible <IconRating/></p>
          </div>
        </div>
        <div v-else>
          <h1>{{ loginMode ? "Se connecter" : "S'inscrire" }}</h1>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Adresse mail</label>
            <div class="mt-2">
              <input v-model="username" type="text" name="username" id="username" autocomplete="none"
                placeholder="Adresse mail"
                class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
            <div class="mt-2">
              <input v-model="password" type="password" name="password" id="password" autocomplete="none"
                placeholder="Mot de passe"
                class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div v-if="loginMode">
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doLogin"
                class="mr-3 rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Se connecter</button>
  
              <button type="button" @click="loginMode = false"
                class="rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                S'inscrire</button>
  
            </div>
          </div>
          <div v-else>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
              <div class="mt-2">
                <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none"
                  placeholder="Nom"
                  class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doCreateAccount"
                class="mr-3 rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Continuer</button>
  
              <button type="button" @click="loginMode = true"
                class="rounded-md bg-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                Annuler
              </button>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import PocketBase from 'pocketbase';
  import IconRating from '@/components/icons/IconRating.vue'
  
  let pb:any = null;
  const currentUser = ref();
  const username = ref("");
  const password = ref("");
  const fullName = ref("");
  
  const loginMode = ref(true);
  
  onMounted(async () => {
    pb = new PocketBase('http://127.0.0.1:8090');
  
    pb.authStore.onChange(() => {
      currentUser.value = pb.authStore.model
    }, true)
  
  });
  
  const doLogout = () => {
    pb.authStore.clear();
    currentUser.value = null;
  }
  
  const doLogin = async () => {
    try {
      const authData = await pb.collection('users')
        .authWithPassword(username.value, password.value);
  
      // after the above you can also access the auth data from the authStore
      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model);
      // currentUser.value = pb.authStore.model
    } catch (Error) {
      alert((Error as Error).message);
    }
  }
  
  const doCreateAccount = async () => {
    try {
      const data = {
        "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
        "email": username.value,
        "emailVisibility": true,
        "password": password.value,
        "passwordConfirm": password.value,
        "name": fullName.value
      };
  
      const record = await pb.collection('users').create(data);
  
      await doLogin();
    } catch (Error) {
      alert((Error as Error).message);
    }
  }
  
  </script>
  
  <style scoped>
  </style>