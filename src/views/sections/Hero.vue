<template>
  <section id="hero">
    <!-- :min-height="minHeight" -->
    <v-img
      :src="require('@/assets/home-hero3.jpg')"
      class="white--text"
      width="100%"
      height="600px"
      max-height="600px"
      min-height="600px"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <!-- gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)" -->

      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="1200"
          width="100%"
        >
          <base-heading title="Nulstar West" />
          <base-body
            :style="`font-size:24px;`"
          >
            <span
              style="font-size:24px!important;"
            >
              Welcome to Westteam. We support both the Nuls and Nerve ecosystems in the Westterm hemisphere.
              We provide tech support, training, documentation, graphics and videos in English, Portuguese and Spanish.

              <br><br>
              Our team reaches from La Paz, Bolivia, through California to Portugal, Germany and Australia.
              Separated by borders, cultures, laws and distance - we have come together in harmony to
              provide the best community-based blockchain experience we know of.
            </span>
          </base-body>
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
              Discover More
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Get Started Now
            </base-btn>
          </div>
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
