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
            :href="feature.link"
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
          title: 'Nuls Academy',
          icon: 'mdi-fountain-pen-tip',
          link: 'http://westteam.nulstar.com/academy',
        },
        {
          title: 'Youtube Videos',
          icon: 'mdi-cellphone',
          link: '',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Staking',
          icon: 'mdi-pencil-box-outline',
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
