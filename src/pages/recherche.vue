<script setup lang="ts">
    import IconSearch1 from '@/components/icons/IconSearch1.vue'
</script> 
<template>
    <form>
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Rechercher</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IconSearch1/>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Films, Séries..." required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    </form>
    <div class="p-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
        <img class="w-full" src="../assets/icon/Frame 116.png" alt="cadre">
    <div>
        <img class="w-full" src="../assets/icon/Frame 117.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 118.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 119.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 120.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 121.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 122.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 123.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 124.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 125.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 126.png" alt="cadre">
    </div>
    <div>
        <img class="w-full" src="../assets/icon/Frame 127.png" alt="cadre">
    </div>
    </div>
</template>