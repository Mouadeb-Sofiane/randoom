<script setup lang="ts">
</script>
<template>
    <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
        <div v-if="currentUser">    
            <h1>Welcome {{ currentUser?.name }}</h1>
            <div>
                <button type="button" @click="$event => doLogout" class="rounded-md bg-btnfond px-3 py-2 text-sm text-white shadow-sm hover:bg-btnfond2 focus-visible:outline-btnfond" >
                    logout</button>
            </div>
        </div>
            <div v-else>
                <h1>Login</h1> 
                <div class="sm:col-span-2 sm:col-start-1 mt-4">
                    <label for="username" class="block text-sm text-black">Adresse mail</label>
                    <div class="mt-2">
                    <input v-model="username" type="text" name="username" id="username" autocomplete="none" placeholder="Enter Email Adress"
                    class="px-2 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2">
                </div>
                </div>
                <div class="sm:col-span-2 sm:col-start-1 mt-2">
                    <label for="password" class="block text-sm text-black">Mot de passe</label>
                    <div class="mt-">
                    <input v-model="password" type="text" name="password" id="password" autocomplete="none" placeholder="Enter Password"
                    class="px-2 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2">
                </div>
                </div>  
                <div class="sm:col-span-2 sm:col-start-1 mt-2">
                <button type="button" @click="$event => doLogin" class="rounded-md bg-btnfond px-3 py-2 text-sm text-white shadow-sm hover:bg-btnfond2 focus-visible:outline-btnfond" >
                    login</button>
                </div>           
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'

let pb = null;
const currentUser = ref();
const username = ref("");
const password = ref("");

  onMounted(async() => {
    pb = new PocketBase('http://127.0.0.1:8090');
    });

const doLogout = () => {
    pb.authStore.clear();
    currentUser.value = null;
}

const doLogin = async () => {
    const authData = await pb.collection('users')
    .authWithPassword(username.value, password.value);

    // after the above you can also access the auth data from the authStore
  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model);
  currentUser.value = pb.authStore.model
}

</script>