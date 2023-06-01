<template>
  <nav aria-label="breadcrumb">
  <ul>
    <li><strong>Menü</strong></li>
  </ul>
  <ul>
    <li><router-link :to="{name:'StartSeite'}" replace>Startseite</router-link></li>
    <li><router-link :to="{name:'RegistrierungStart'}" replace>Registrierung</router-link></li>
    <li><router-link :to="{name:'AuflistungGeschaeftsstellen'}" replace>Geschäftstellen</router-link></li>
    <li>
      <a href="https://www.Instagram.com/Kleiderspende-e-V">
        <img src="../assets/Instagram-Logo-skaliert.png" alt="Instagramm Logo mit Verlinkung" class="imgNavLogos">
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/Kleiderspende-e-V">
          <img src="../assets/Facebook-Logo-skaliert.png" alt="Facebook Logo mit Verlinkung" class="imgNavLogos">
      </a>
    </li>
  </ul>
</nav>
</template>

<style>
.imgNavLogos {
      max-width: 100%;
      height: auto;
      }
</style>