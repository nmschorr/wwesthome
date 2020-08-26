<template>
  <base-section id="theme-features">
    <base-section-heading title="Nuls / Nerve Blockchain Support">
      The microservice-layer design of NULS makes it easy for developers to quickly create modules for anything.
    </base-section-heading>
    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            NULS provides fluid, cost-effective, time-saving solutions for developers with minimum blockchain experience.
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',
    data: () => ({
      features: [
        {
          title: 'NULS Academy',
          icon: 'mdi-fountain-pen-tip',
          hreff: 'http://westteam.nulstar.com/academy/index.html',
        },
        {
          title: 'Youtube Videos',
          icon: 'mdi-cellphone',
          hreff: 'https://www.youtube.com/channel/UCVIyQ6rE49XBm1sTvNZxQVQ',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Staking',
          icon: 'mdi-pencil-box-outline',
          hreff: 'http://westteam.nulstar.com/spc',

        },
        {
          title: 'POCM',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'Ndex',
          icon: 'mdi-ice-pop',
        },
        {
          title: 'Smart Contracts',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
