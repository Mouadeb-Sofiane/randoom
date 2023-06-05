<template>
  <div class="flex justify-center items-center h-screen">
    <img :class="{ 'rotate': isRotating }" :style="{ transform: rotationStyle }" class="w-60 h-60" src="../assets/icon/Wheels.png" alt="Image">
    <button @click="startRotation" class="ml-2 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
      Démarrer 
    </button>
  </div>
</template>

<script>
export default {
  name: 'RotateImage',
  data() {
    return {
      isRotating: false,
      rotationStyle: ''
    };
  },
  methods: {
    startRotation() {
      this.isRotating = true;
      setTimeout(() => {
        this.isRotating = false;
        this.rotationStyle = '';
      }, getRandomTime());
    }
  }
}

function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 3000; // Random time between 3s and 8s
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
