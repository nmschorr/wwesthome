<template>
  <base-section id="theme-features">
    <base-section-heading title="Theme Features">
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
          title: 'More Blocks',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'Bigger Returns',
          icon: 'mdi-cellphone',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Easy Staking',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Consensus Nodes',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'Globally Optimized',
          icon: 'mdi-ice-pop',
        },
        {
          title: 'Multiple Servers',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
