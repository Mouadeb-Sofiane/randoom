<script setup lang="ts">
	import { ref, computed, watch } from 'vue'
    import LogoIcon from '@/components/icons/IconLogo.vue'
    import IconSearch from '@/components/icons/IconSearch.vue'
    import IconUser from '@/components/icons/IconUser.vue'
    import IconHome from '@/components/icons/IconHome.vue'
    import IconList from '@/components/icons/IconList.vue'
	import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>

    <nav class="fixed bottom-0 w-screen bg-barmenu border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
  <ul class="flex justify-between">
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/"><IconHome/></RouterLink>
	</li>
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/search" ><IconSearch/></RouterLink>
    </li>
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/"><LogoIcon/></RouterLink>
	</li>
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/liste"><IconList/></RouterLink>
	</li>
    <li class="menu-item self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		<RouterLink class="menu-link font-serif" to="/connexion" ><IconUser/></RouterLink>
	</li>
  </ul>
    </div>
    </nav>
</footer>
</template>
