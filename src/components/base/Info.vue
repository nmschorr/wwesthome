<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('@/assets/TribalBull.svg')"
        contain
        max-width="500"
        min-height="308"
      />
    </div>
  </v-theme-provider>
</template>
<script>
  export default {
    name: 'BaseInfo',
    props: {
      title: String,
      dark: Boolean,
    },
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
          text: 'kathy@nuls.io',
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
