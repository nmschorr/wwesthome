<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="secondary"
      space="36"
    >
      <v-row
        align="center"
        class="ma-0"
        justify="center"
      >
        <v-responsive
          class="px-4 mx-6"
          max-width="1200"
          width="100%"
        >
          <base-title
            space="0"
            title="Create the future"
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
