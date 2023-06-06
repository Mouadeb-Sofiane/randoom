<!-- <script setup lang="ts">
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
  <nav class="flex fixed bottom-0 h-20 lg:flex lg:fixed w-screen bg-barmenu border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <ul class="flex justify-center lg:justify-between w-full">
        <li class="menu-item mr-10 self-center text-2xl md:text-3xl lg:text-xl font-semibold whitespace-nowrap dark:text-white">
          <RouterLink class="menu-link font-serif" to="/"><IconHome/></RouterLink>
        </li>
        <li class="menu-item mr-10 self-center text-2xl md:text-3xl lg:text-xl font-semibold whitespace-nowrap dark:text-white">
          <RouterLink class="menu-link font-serif" to="/all"><IconSearch/></RouterLink>
        </li>
        <li class="menu-item mr-10 self-center text-2xl md:text-3xl lg:text-xl font-semibold whitespace-nowrap dark:text-white">
          <RouterLink class="menu-link font-serif" to="/randoom"><LogoIcon/></RouterLink>
        </li>
        <li class="menu-item mr-10 self-center text-2xl md:text-3xl lg:text-xl font-semibold whitespace-nowrap dark:text-white">
          <RouterLink class="menu-link font-serif" to="/recherche"><IconList/></RouterLink>
        </li>
        <li class="menu-item mr-10 self-center text-2xl md:text-3xl lg:text-xl font-semibold whitespace-nowrap dark:text-white">
          <RouterLink class="menu-link font-serif" to="/connexion"><IconUser/></RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</footer>
</template> -->


<script setup lang="ts">
	import FacebookIcon from '@/components/icons/IconFacebook.vue'
	import TwitterIcon from '@/components/icons/IconTwitter.vue'
	import YoutubeIcon from '@/components/icons/IconYoutube.vue'
	import InstagramIcon from '@/components/icons/IconInstagram.vue'
  import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
  <footer class="grille space-y-6 bg-barmenu py-16 px-6 text-black lg:space-y-0">
    <div class="col-span-3 col-start-1">
	    <a href="/">
            <IconLogo/>
        </a>
    </div>
    <nav class="col-span-3 col-start-4 space-y-3 lg:text-2xl">
      <ul>
        <li><h4 class="lg:text-3xl" href="#">Mentions légales</h4></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">4 place Tharradin</a></li>
      </ul>
    </nav>

    <div class="col-span-3 col-start-7 space-y-3lg:text-3xl ">
      <h4 class="lg:text-3xl">Suivre l'IUT</h4>
      <ul class="flex gap-4">
        <li>
          <a href="https://www.facebook.com/mmimontbeliard/" aria-label="facebook"><FacebookIcon /></a>
        </li>
        <li>
          <a href="https://instagram.com" aria-label="instagram"><InstagramIcon /></a>
        </li>
        <li>
          <a href="https://twitter.com" aria-label="twitter"><TwitterIcon /></a>
        </li>
        <li>
          <a href="https://youtube.com" aria-label="youtube"><YoutubeIcon /></a>
        </li>
      </ul>
    </div>
    <div class="col-span-3 col-start-10 space-y-3">
      <h4 class="lg:text-3xl">IUT MMI Montbéliard</h4>
        <p class="lg:text-2xl">Ce projet a été réalisé dans le cadre  d’un exercice pédagogique au département MMI de Montbéliard</p>
        <a class="lg:text-2xl text-blue" href="https://mmi-montbeliard.nathanvanbignootvincler.fr/">IUT MMI Montbéliard</a>
    </div>
  </footer>
</template>