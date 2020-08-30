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
            {{ feature.byline }}
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
          title: 'NULS Academy Blockchain Course',
          dark: false,
          color: 'purple',
          icon: 'mdi-school',
          byline: 'Training.',
          hreff: 'http://westteam.nulstar.com/academy/BlockchainCourse/index.html',
          tcolor: 'white--text',
        },
        {
          color: 'red',
          dark: false,
          title: 'Youtube Videos',
          byline: 'Training for NULS and Nerve',
          icon: 'mdi-youtube',
          hreff: 'https://www.youtube.com/channel/UCVIyQ6rE49XBm1sTvNZxQVQ',
        },
        {
          color: 'myteal',
          dark: false,
          byline: 'Get started with staking and earn rewards',
          title: 'Staking QuickStart',
          icon: 'mdi-hammer',
          hreff: 'https://www.youtube.com/watch?v=NaI5mZCwQlo',

        },
        {
          color: 'myteal2',
          dark: false,
          title: 'POCM Staking',
          icon: 'mdi-image-size-select-actual',
          byline: 'Earn higher rewards staking with POCM',
          hreff: 'https://pocm.nuls.io/Projects/ProjectsList',
        },
        {
          color: 'indigo',
          title: 'Ndex',
          dark: false,
          icon: 'mdi-ice-pop',
          byline: 'Trade between tokens.',
          hreff: 'https://pocm.nuls.io/Projects/ProjectsList',
        },
        {
          color: 'light-blue',
          title: 'Smart Contracts',
          dark: false,
          byline: 'Create your own smart contract.',
          icon: 'mdi-book-open-variant',
          hreff: 'https://pocm.nuls.io/Projects/ProjectsList',
        },
      ],
    }),
  }
</script>
