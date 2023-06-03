<script setup lang="ts">
	import { ref, computed, watch } from 'vue'
    import LogoIcon from '@/components/icons/IconLogo.vue'
	import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>

    <nav class="fixed bottom-0 w-screen bg-barmenu border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
  <ul class="flex justify-between">
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/billetterie" >Billetterie</RouterLink>
	</li>
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/oeuvre" >Oeuvres</RouterLink>
    </li>
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/"><LogoIcon/></RouterLink>
	</li>
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/artiste" >Artistes</RouterLink>
	</li>
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/connexion" >Connection</RouterLink>
	</li>
  </ul>
    </div>
    </nav>
</footer>
</template>
