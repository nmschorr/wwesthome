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
          <base-avatar-card-features
            v-bind="feature"
            align="left"
            horizontal
          />
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
          text: 'Training',
          title: 'NULS Academy Blockchain Course',
          color: 'purple',
          icon: 'mdi-school',
          href: 'https://westteam.nulstar.com/academy/BlockchainCourse/index.html',
        },
        {
          title: 'Youtube Videos',
          text: 'Training for NULS and Nerve',
          color: 'red',
          icon: 'mdi-youtube',
          href: 'https://www.youtube.com/channel/UCVIyQ6rE49XBm1sTvNZxQVQ',
        },
        {
          title: 'Staking QuickStart',
          text: 'Get started with staking and earn rewards',
          color: 'deep-orange',
          icon: 'mdi-hammer',
          href: 'https://www.youtube.com/watch?v=NaI5mZCwQlo',

        },
        {
          title: 'POCM Staking',
          text: 'Earn higher rewards staking with POCM',
          color: 'myteal2',
          icon: 'mdi-image-size-select-actual',
          href: 'https://pocm.nuls.io/Projects/ProjectsList',
        },
        {
          title: 'Ndex Tutorial',
          text: 'Trade between tokens',
          color: 'indigo',
          icon: 'mdi-ice-pop',
          href: 'https://westteam.nulstar.com/public/nervedex.html',
        },
        {
          title: 'TokenLife',
          color: 'light-blue',
          text: 'Visualize Your Blockchain',
          icon: 'mdi-book-open-variant',
          href: 'https://westteam.nulstar.com/tokenlife',
        },
        {
          title: 'Space Exploration Dapp',
          color: 'teal darken-4',
          icon: 'mdi-rocket',
          text: 'Nuls Blockchain in Action!',
          href: 'https://westteam.nulstar.com/spc',
        },
        {
          color: 'pink darken-3',
          title: 'TokenLife Design Tool',
          text: 'Input numbers - Watch tokens grow',
          icon: 'mdi-chart-line',
          href: 'https://westteam.nulstar.com/tokenlife',
        },
      ],
    }),
  }
</script>
