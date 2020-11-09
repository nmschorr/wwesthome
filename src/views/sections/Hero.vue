<template>
  <section id="hero">
    <!-- :min-height="minHeight" -->
    <v-card
      class="d-flex flex-row pt-5 align-center justify-center"
      justify-center
      height="330px"
      width="100%"
      min-width="600"
      min-height="190px"
      max-height="390px"
      max-width="1600px"
      style="background-image: linear-gradient(306deg, black 0%, #212121 100%);"
    >
      <v-img
        :src="require('@/assets/nuls-nerve.jpg')"
        class="black--text"
        height="100%"
        width="100%"
        max-width="500px"
        max-height="270px"
      />
    </v-card>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

  .xv-data-table__wrapper {
    font-size: small;
  }
</style>
