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
          title: 'Main Telegram Channel',
          text: 't.me@Nulsio',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Tech Support',
          text: 'kathy@nuls.io',
        },
        {
          icon: 'mdi-email',
          title: 'Business Inquiries',
          text: 'berzeck@nulstar.com',
        },
      ],
    }),
  }
</script>
