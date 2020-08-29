<template>
  <base-section
    id="features"
    class="secondary"
    :background-image="require('@/assets/home-hero4.jpg')"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
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
          text: 'Frequently Asked Questions',
          href: 'http://westteam.nulstar.com/academy/academy/faqs.html',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Chainbox',
          text: 'The blockchain to operates in a decentralized manner.',
          href: 'http://westteam.nulstar.com/academy/academy/faqs.html',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Chain Factory',
          text: 'Consensus enables the blockchain to run in an unsupervised manner.',
          href: 'http://westteam.nulstar.com/academy/academy/faqs.html',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Support',
          text: 'Consensus enables decentralized and unsupervised running.',
          href: 'http://westteam.nulstar.com/academy/academy/faqs.html',
        },
      ],
    }),
  }
</script>
