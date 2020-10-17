<template>
  <section id="hero">
    <!-- :min-height="minHeight" -->
    <v-img
      :src="require('@/assets/NULS_BANNER.svg')"
      class="white--text"
      width="100%"
      height="787px"
      max-height="787px"
      min-height="200px"
      gradient="to right, rgba(5, 11, 31, 0), rgba(5, 11, 31, 0)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="2000"
          width="100%"
        >
          <base-heading
            title="Nulstar West"
            :style="`font-family: 'Montserrat',sans-serif;font-size:60px!important; font-weight:900;line-height:74px;`"
          />
          <base-body
            :style="`font-size:20px;`"
          >
            <span
              :style="`font-size:26px!important;color:white;font-weight:700;line-height:34px;`"
            >
              <br><br><br>
              Nuls and Nerve<br><br>
              Tech support, training,<br>
              and documentation <br>
            </span>
          </base-body>
        </v-responsive>
      </v-container>
    </v-img>
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
  .xptsans {
    font-family:'PT Sans Narrow, sans-serif';
    font-weight: 400;
  }
  .xv-label  {
    font-size: 12px!important;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    color: black;
  }
  .xtealback {
    background-image: linear-gradient(306deg, teal 70%, cyan 30% );
  }
  .montfont {
    font-family: 'Montserrat',sans-serif;
    letter-spacing: 1.25px;
  }
</style>
