<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-twitter
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Social Media"
      >
        Chain Factory is a user interface that allows developers to build a new chain or enhance an existing chain by automatically deploying modules selected from a warehouse of endless modular solutions.
      </base-section-heading>
      <a
        class="d-inline-block mb-8"
        href="https://nuls.io"
        style="text-decoration: none;"
        target="_blank"
      >
        https://nuls.io
      </a>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold mx-4"
        color="white"
        href="https://twitter.com/Nuls"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Follow Nuls
        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://twitter.com/nerve_network"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Follow Nerve
        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
