<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('@/assets/nulsDeveloper.svg')"
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
          icon: 'mdi-telegram',
          title: 'Training Liason',
          text: '@Gabriely89',
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
