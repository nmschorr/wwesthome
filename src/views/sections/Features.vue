<template>
  <base-section
    id="features"
    class="secondary pb-9"
    color="transparent"
    max-height="300px"
    space="12"
    style="background-color:#FFFFFF;margin-bottom:40px;"
  >
    <v-responsive
      class="mx-auto pb-1 mb-1"
      max-width="1350"
      style="background-color:#FFFFFF;"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
              class="pb-2 mb-3"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-frequently-asked-questions',
          title: 'FAQs',
          text: 'Cross-Chain Asset Circulation with ETH',
          rpath: 'https://medium.com/@nuls/nuls-has-implemented-cross-chain-asset-circulation-with-eth-network-8b77cc61d81f',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Chainbox',
          text: 'Blockchains operate in a decentralized manner.',
          rpath: 'https://nuls.io',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Chain Factory',
          text: 'Free Chain Builder for Non-Programmers',
          rpath: 'https://factory.nuls.io',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Modular Design',
          text: 'Plug and Play Modules',
          rpath: 'https://nuls.io',
        },
      ],
    }),
  }
</script>

    //   export default {
    //     name: 'SectionFeatures',

    //     data: () => ({
    //       cards: [
    //         {
    //           icon: 'mdi-frequently-asked-questions',
    //           title: 'FAQs',
    //           text: 'Frequently Asked Questions',
    //           rpath: 'https://nuls.io',
    //         },
    //         {
    //           icon: 'mdi-camera-outline',
    //           title: 'Chainbox',
    //           text: 'Blockchains operate in a decentralized manner.',
    //           rpath: 'https://nuls.io',
    //         },
    //         {
    //           icon: 'mdi-pencil-outline',
    //           title: 'Chain Factory',
    //           text: 'Consensus enables the blockchain.',
    //           rpath: 'https://nuls.io',
    //         },
    //         {
    //           icon: 'mdi-puzzle-outline',
    //           title: 'Support',
    //           text: 'Consensus enables decentralized and unsupervised running.',
    //           rpath: 'https://nuls.io',
    //         },
    //       ],
    //     }),
    //   }
