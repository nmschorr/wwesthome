<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="About Nuls"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [
        {
          title: 'Grow your Revenue',
          subtitle: 'Best Productivity',
          text: 'Developers will only need to focus on the problem that their application wants to solve, and NOT on how to integrate it into the platform.',
          callout: '01',
        },
        {
          title: 'Affordable Prices',
          subtitle: 'Special Offers',
          text: 'NULS will no longer be just blockchain node software but a complete platform to build all kind of systems around',
          callout: '02',
        },
        {
          title: 'Target Setting',
          subtitle: 'Income Flow',
          text: 'A very big competitive advantage among our peers',
          callout: '03',
        },
      ],
    }),
  }
</script>
