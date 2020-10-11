<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
        dark
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t, linkedin }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          :linkin="linkedin"
          dark
          class="white--text"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div
            style="color:white;"
            v-html="text"
          />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
  // shows on page
  export default {
    name: 'BaseBusinessContact',

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-email',
          title: 'Westtern Regional Director - Berzeck',
          text: 'berzeck@nulstar.com',
          linkedin: '',
        },
        {
          icon: 'mdi-email',
          title: 'VP of Customer Experience - Kathy Norman',
          text: 'kathy@nuls.io',
          linkedin: 'https://linkedin/kathynorman',
        },
        {
          icon: 'mdi-telegram',
          title: 'VP of Marketing - Patric Vogel',
          text: 'Telegram: @Rainbow_91',
          linkedin: '',
        },
        {
          icon: 'mdi-telegram',
          title: 'Training and Documentation - Gabriele Yokver',
          text: 'Telegram: @Gabriely89',
          linkedin: '',
        },
        {
          icon: 'mdi-telegram',
          title: 'Sales Engineer and Marketing - Nancy Schorr',
          text: 'Telegram: @Nancy_Sv',
          linkedin: '',
        },
        {
          icon: 'mdi-telegram',
          title: 'Graphics, Animation and Social Marketing - Nalex',
          text: 'Telegram: @NalexNULS',
          linkedin: '',
        },
      ],
    }),
  }
</script>
