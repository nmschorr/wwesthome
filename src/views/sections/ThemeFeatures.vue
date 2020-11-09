<template>
  <base-section
    id="theme-features"
  >
    <base-section-heading title="NULS / Nerve Blockchain Support">
      Support Links
    </base-section-heading>
    <v-container>
      <v-card
        width="100%"
        class="d-flex justify-center align-center"
      >
        <v-card
          width="70%"
          flat
          class="d-flex justify-center align-center flat"
        >
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
        </v-card>
      </v-card>
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
          title: 'Smart Contract',
          color: 'light-blue',
          text: 'Simplified Instructions',
          icon: 'mdi-book-open-variant',
          href: 'https://nancysv.medium.com/nuls-smart-contract-d1981dcddc95',
        },
        {
          title: 'Space Exploration Dapp',
          color: 'teal darken-4',
          icon: 'mdi-rocket',
          text: 'NULS Smart Contract in Action!',
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
