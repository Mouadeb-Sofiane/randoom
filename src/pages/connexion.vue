<!-- <script setup lang="ts">
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'


var pocketbase_ip=''
if (import.meta.env.MODE === 'production')
  pocketbase_ip="http://185.216.26.50:80"
else 
  pocketbase_ip="http://127.0.0.1:8090"
alert (pocketbase_ip)

let pb:any = null;
const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const loginMode = ref(true);

onMounted(async() => {
    pb = new PocketBase('http://127.0.0.1:8090');

    pb.authStore.onChange(() =>{
        currentUser.value = pb.authStore.model
    },true)
});

const doLogout = () => {
    pb.authStore.clear();
    // currentUser.value = null;
}

const doLogin = async () => {
    try{
    const authData = await pb.collection('users')
    .authWithPassword(username.value, password.value);

  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model);
//   currentUser.value = pb.authStore.model
} catch (error){
    alert(error.message)
}
}

const doCreateAccount = async () => {
    try{
    const data = {
        "username": `user_${self.crypto.randomUUID().split("_")[0]}`,
        "email": username.value,
        "emailVisibility": true,
        "password":password.value,
        "passwordConfirm": password.value,
        "name": fullName.value,

    };


    const record = await pb.collection('users').create(data);

    await doLogin();
  } catch (error) {
    alert(error.message)
  }

}


</script>
<template>
    <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
        <div v-if="currentUser">    
            <h1>Welcome {{ currentUser?.name }}</h1>
            <div>
                <button type="button" @click="$event => doLogout" class="rounded-md bg-indigo-800 px-3 py-2 text-sm text-black shadow-sm hover:bg-btnfond2 focus-visible:outline-btnfond" >
                    logout</button>
            </div>
        </div>
            <div v-else>
                <h1>{{ loginMode ? "Se connecter":"S'inscire" }}</h1> 
                <div class="sm:col-span-2 sm:col-start-1 mt-4">
                    <label for="username" class="block text-sm text-black">Adresse mail</label>
                <div class="mt-2">
                    <input v-model="username" type="text" name="username" id="username" autocomplete="none" placeholder="Adresse mail"
                    class="px-2 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2">
                </div>
                </div>
                <div class="sm:col-span-2 sm:col-start-1 mt-2">
                    <label for="password" class="block text-sm text-black">Mot de passe</label>
                <div class="mt-2">
                    <input v-model="password" type="password" name="password" id="password" autocomplete="none" placeholder="Mot de passe"
                    class="px-2 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2">
                </div>
                </div> 
                
                <div v-if="loginMode">
                <div class="sm:col-span-2 sm:col-start-1 mt-2">
                <button type="button" @click = "doLogin" class="mr-5 rounded-md bg-indigo-800 px-3 py-2 text-sm text-black shadow-sm hover:bg-indigo-500 focus-visible:outline-btnfond" >
                    Se connecter</button>

                <button type="button" @click="$event => loginMode=false" class="rounded-md bg-indigo-800 px-3 py-2 text-sm text-blackblack shadow-sm hover:bg-indigo-500 focus-visible:outline-btnfond" >
                    S'inscrire</button>
                </div>          
            </div>
            <div v-else>
                <div class="sm:col-span-2 sm:col-start-1 mt-2">
                    <label for="FullName" class="block text-sm text-black">Nom</label>
                <div class="mt-2">
                    <input v-model="fullName" type="text" name="fullName" id="Fullname" autocomplete="none" placeholder="Nome"
                    class="px-2 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2">
                </div>
                </div> 
                <div class="sm:col-span-2 sm:col-start-1 mt-2">
                <button type="button" @click = "doCreateAccount" class="mr-5 rounded-md bg-indigo-800 px-3 py-2 text-sm text-black shadow-sm hover:bg-indigo-500 focus-visible:outline-btnfond" >
                    S'inscrire</button>

                <button type="button" @click="$event => loginMode=true" class="rounded-md bg-red-600 px-3 py-2 text-sm text-black shadow-sm hover:bg-red-indigo-500 focus-visible:outline-btnfond" >
                    Annuler</button>
                </div>    
            </div>
        </div>
    </div>
    </div>
</template>  -->

<template>
    <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div v-if="currentUser">text-black
          <h1>Welcome {{ currentUser?.name }}</h1>
          <div>
            <button type="button" @click="doLogout"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">logout</button>
  
          </div>
        </div>
        <div v-else>
          <h1>{{ loginMode ? "LOGIN" : "CREATE ACCOUNT" }}</h1>
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
                class="mr-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
  
              <button type="button" @click="loginMode = false"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
                class="mr-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Continuer</button>
  
              <button type="button" @click="loginMode = true"
                class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
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
    } catch (error) {
      alert(error.message)
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
    } catch (error) {
      alert(error.message)
    }
  }
  
  </script>
  
  <style scoped>
  </style>