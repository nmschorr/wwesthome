<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="KEEP IN TOUCH WITH US"
        pace="6"
      >
        We love to keep in touch!
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: { dark: Boolean },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Training Liason',
          text: 'Gabriele',
        },
        {
          icon: 'mdi-email',
          title: 'Software Support',
          text: 'kathy@nuls.io',
        },
        {
          icon: 'mdi-email',
          title: 'Westtern Regional Director',
          text: 'berzeck@nulstar.com',
        },
      ],
    }),
  }
</script>
