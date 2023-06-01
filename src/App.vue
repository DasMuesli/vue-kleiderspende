<template>
  <header>
  <AllgemeinerHeader/>
  <AllgemeinesMenue/>
  </header>

  <main class="container">
    <router-view></router-view>
  </main>

  <footer>
    <AllgemeinerFooter/>
  </footer>
</template>

<script>
import AllgemeinerHeader from './components/AllgemeinerHeader.vue';
import AllgemeinesMenue from './components/AllgemeinesMenue.vue';
import AllgemeinerFooter from './components/AllgemeinerFooter.vue';

export default {
  name: 'App',
  components: {
    AllgemeinerHeader,
    AllgemeinesMenue,
    AllgemeinerFooter
  }
  
}
</script>

