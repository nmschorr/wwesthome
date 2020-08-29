<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="36"
    >
      <v-row
        align="center"
        class="ma-0"
        justify="center"
      >
        <v-responsive
          class="px-4 mx-6"
          max-width="600"
          width="100%"
        >
          <v-img
            :src="`../../assets/Community_Tree.svg;`"
            min-height="200px"
          />
          <base-title
            space="0"
            title="Invest in your future"
          />
          <!--  <base-text-field
            hide-details
            label="Your Email Address"
          >
            <template v-slot:append-outer>
              <v-btn
                class="ml-n1"
                height="40"
                outlined
                style="margin-top: -7px;"
              >
                Subscribe
              </v-btn>
            </template>
          </base-text-field> -->
        </v-responsive>
      </v-row>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNewsletterAlt',
  }
</script>
