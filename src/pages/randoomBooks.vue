<template>
    <div class="flex pt-52 justify-center items-center">
      <img :class="{ 'rotate': isRotating }" :style="{ transform: rotationStyle }" class="w-60 h-60" src="../assets/icon/Wheels.png" alt="Image">
    </div>  
      <div class="flex justify-center">
        <p class="text-medium mt-12 text-gray-700 text-center">Le hazard décide pour vous.</p>
      </div>
      <div class="flex mt-8 mb-10 justify-center">  
        <button @click="startRotation" data-popover-target="popover-offset" data-popover-offset="30" type="button" class="text-white bg-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Démarrer</button>
      </div>  
      <div data-popover id="popover-offset" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
          <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">Popover offset</h3>
          </div>
          <div class="text-black px-3 py-2">
              <p>Faites tourner la roue pour choisir votre média.</p>
          </div>
          <div data-popper-arrow></div>
      </div>  
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const isRotating = ref(false);
  const rotationStyle = ref('');
  const router = useRouter();
  
  function startRotation() {
    isRotating.value = true;
    setTimeout(() => {
      isRotating.value = false;
      rotationStyle.value = '';
      setTimeout(() => {
        router.push('/search3');
      }, 1000); // Délai de 1 seconde avant la redirection
    }, getRandomTime());
  }
  
  function getRandomTime() {
    return Math.floor(Math.random() * 3000) + 1000; 
  }
  </script>
  
  <style>
  .rotate {
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  
  