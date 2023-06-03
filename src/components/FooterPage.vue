<!-- <template>
    <header>
    <nav class="fixed bottom-0 w-screen bg-barmenu border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex justify-between ">
                <img src="#" class="mr-3 h-6 sm:h-9" alt="home color black" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <a href="#" class="flex justify-between ">
                <img src="#" class="mr-3 h-6 sm:h-9" alt="search color black" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <a href="#" class="flex justify-between ">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <a href="#" class="flex justify-between ">
                <img src="#" class="mr-3 h-6 sm:h-9" alt="list color black" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <a to="/connexion" class="flex justify-between ">
                <img src="#" class="mr-3 h-6 sm:h-9" alt="profile color black" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
        </div>
    </nav>
</header>
</template> -->
<script setup lang="ts">
	import { ref, computed, watch } from 'vue'
    import LogoIcon from '@/components/icons/IconLogo.vue'
	import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="">
    <div class="flex items-center">
      <a href="/">
      <LogoIcon/>
      </a>
    </div>

    <nav class="fixed bottom-0 w-screen bg-barmenu border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
  <ul class="mt-[25vh] ml-16 font-bold font-size lg:m-0 lg:font-bold lg:text-3xl lg:flex lg:gap-14 lg:pr-20">
    <li class="menu-item">
		<RouterLink class="menu-link font-serif" to="/billetterie" >Billetterie</RouterLink>
	</li>
    <li class="menu-item">
		<RouterLink class="menu-link font-serif" to="/oeuvre" >Oeuvres</RouterLink>
    </li>
    <li class="menu-item">
		<RouterLink class="menu-link font-serif" to="/"><LogoIcon/></RouterLink>
	</li>
    <li class="menu-item">
		<RouterLink class="menu-link font-serif" to="/artiste" >Artistes</RouterLink>
	</li>
    <li class="menu-item">
		<RouterLink class="menu-link font-serif" to="/connexion" >Connection</RouterLink>
	</li>
  </ul>
    </div>
    </nav>
  </header>
</template>
