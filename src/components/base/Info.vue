<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('@/assets/TribalBull.svg')"
        contain
        max-width="128"
        min-height="78"
        width="100%"
      />

      <base-title
        size="body-1"
        space="4"
        title="Nuls Blockchain"
        weight="regular"
      />

      <base-body>
        Nuls Blockchain
      </base-body>

      <base-btn
        class="mb-12"
        color="white"
        outlined
      >
        More Info
      </base-btn>
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
