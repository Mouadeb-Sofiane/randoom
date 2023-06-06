
<script setup lang="ts">
	import { ref, computed, watch } from 'vue'
    import IconLogo from '@/components/icons/IconLogo.vue'
    import IconHome from '@/components/icons/IconHome.vue'
    import IconSearch from '@/components/icons/IconSearch.vue'
    import IconUser from '@/components/icons/IconUser.vue'
    import IconList from '@/components/icons/IconList.vue'
	import { RouterLink } from 'vue-router'


    const activeMenu = ref(false)

    function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>
  <header class="fixed position-absolute top-0 bg-barmenu z-10 flex w-full translate-y-0 items-stretch justify-between bg-autre px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
    <div class="flex items-center">
      <a href="/">
      <IconLogo/>
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden"
      @click="activeMenu = !activeMenu"
      >
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-black opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></div>
      </button>
      <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-barmenu last:text-2xl text-black transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:tracking-wide lg:text-black lg:opacity-100"
      :class="{ '!visible opacity-100': activeMenu }" 
      v-scroll-lock="activeMenu"
      >
      <ul class="mt-[25vh] ml-16 font-bold font-size lg:m-0 lg:font-bold lg:text-xl lg:flex lg:gap-14 lg:pr-20 justify-center">
  <li class="menu-item">
    <RouterLink class="menu-link flex items-center" to="/" @click="closeMenu">
      <IconHome/> Accueil
    </RouterLink>
  </li>
  <li class="menu-item">
    <RouterLink class="menu-link flex items-center" to="/all" @click="closeMenu">
      <IconSearch/> Rechercher
    </RouterLink>
  </li> 
  <li class="menu-item">
    <RouterLink class="menu-link flex items-center" to="/recherche" @click="closeMenu">
      <IconList/> Listes
    </RouterLink>
  </li>
  <li class="menu-item">
    <RouterLink class="menu-link flex items-center" to="/connexion" @click="closeMenu">
      <IconUser/> Se connecter
    </RouterLink>
  </li> 
</ul>
</nav>
</div>
  </header>
</template>

 <!-- <ul class="mt-[25vh] ml-16 font-bold font-size lg:m-0 lg:font-bold lg:text-xl lg:flex lg:gap-14 lg:pr-20">
    <li class="menu-item">
		<RouterLink class="menu-link flex" to="/" @click="closeMenu"><IconHome/> Accueil</RouterLink>
	</li>
    <li class="menu-item">
		<RouterLink class="menu-link flex" to="/search" @click="closeMenu"><IconSearch/> Rechercher</RouterLink>
	</li> 
    <li class="menu-item">
		<RouterLink class="menu-link flex" to="/liste" @click="closeMenu"><IconList/> Listes</RouterLink>
	</li>
    <li class="menu-item">
        <RouterLink class="menu-link flex" to="/connexion" @click="closeMenu"><IconUser/> Se connecter</RouterLink>
    </li> 
   </ul>
</nav>
<Menu :menu-is-open="activeMenu" v-scroll-lock="activeMenu" />
    </div> -->