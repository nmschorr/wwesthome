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
          title: 'Address',
          text: 'Singapore',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '01 (800) 555 744<br>01 (800) 555 633',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'berzeck@nulstar.com',
        },
      ],
    }),
  }
</script>
