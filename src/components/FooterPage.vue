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
          <a href="https://www.instagram.com/mmi_montbeliard/" aria-label="instagram"><InstagramIcon /></a>
        </li>
        <li>
          <a href="https://twitter.com/MMImontbeliard" aria-label="twitter"><TwitterIcon /></a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=ilc4lJUDYMk" aria-label="youtube"><YoutubeIcon /></a>
        </li>
      </ul>
    </div>
    <div class="col-span-3 col-start-10 space-y-3">
      <h4 class="lg:text-3xl">IUT MMI Montbéliard</h4>
        <p class="lg:text-2xl mr-7">Ce projet a été réalisé dans le cadre  d’un exercice pédagogique au département MMI de Montbéliard</p>
        <a class="lg:text-2xl text-blue" href="https://mmi-montbeliard.nathanvanbignootvincler.fr/">IUT MMI Montbéliard</a>
    </div>
  </footer>
</template>