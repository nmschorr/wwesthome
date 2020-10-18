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
          byline: 'Training.',
          title: 'NULS Academy Blockchain Course',
          color: 'purple',
          icon: 'mdi-school',
          href: 'http://westteam.nulstar.com/academy/BlockchainCourse/index.html',
        },
        {
          title: 'Youtube Videos',
          color: 'red',
          byline: 'Training for NULS and Nerve',
          icon: 'mdi-youtube',
          href: 'https://www.youtube.com/channel/UCVIyQ6rE49XBm1sTvNZxQVQ',
        },
        {
          title: 'Staking QuickStart',
          color: 'deep-orange',
          byline: 'Get started with staking and earn rewards',
          icon: 'mdi-hammer',
          href: 'https://www.youtube.com/watch?v=NaI5mZCwQlo',

        },
        {
          title: 'POCM Staking',
          color: 'myteal2',
          icon: 'mdi-image-size-select-actual',
          byline: 'Earn higher rewards staking with POCM',
          href: 'https://pocm.nuls.io/Projects/ProjectsList',
        },
        {
          title: 'Ndex Tutorial',
          color: 'indigo',
          icon: 'mdi-ice-pop',
          byline: 'Trade between tokens',
          href: 'https://westteam.nulstar.com/public/nervedex.html',
        },
        {
          title: 'TokenLife',
          color: 'light-blue',
          byline: 'Visualize Your Blockchain',
          icon: 'mdi-book-open-variant',
          href: 'https://westteam.nulstar.com/tokenlife',
        },
        {
          title: 'Space Exploration Dapp',
          color: 'teal darken-4',
          icon: 'mdi-rocket',
          byline: 'Nuls Blockchain in Action!',
          href: 'https://westteam.nulstar.com/spc',
        },
        {
          color: 'pink darken-3',
          title: 'TokenLife Design Tool',
          byline: 'Input numbers - Watch tokens grow',
          icon: 'mdi-chart-line',
          href: 'https://westteam.nulstar.com/tokenlife',
        },
      ],
    }),
  }
</script>
