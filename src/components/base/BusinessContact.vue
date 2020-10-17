<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="white"
        class="white--text"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div
            class="white--text"
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
          title: 'Berzeck - Western Regional Director',
          text: 'mailto:berzeck@nulstar.com',
        },
        {
          icon: 'linked-in',
          title: 'Patric Vogel - VP of Marketing',
          text: 'https://linkedin.com/in/patric-vogel-8070471b6/',
        },
        {
          icon: 'mdi-telegram',
          title: 'Gabriele - Training Liason',
          text: 'Telegram: @Gabriely89',
        },
        {
          icon: 'mdi-email',
          title: 'Kathy Norman - VP of Customer Support',
          text: 'https://linkedin.com/in/kathy-norman/',
        },

        {
          icon: 'mdi-telegram',
          title: 'Nancy - Webmaster',
          text: 'Telegram: @Nancy_Sv',
        },
      ],
    }),
  }
</script>
<style scoped>
  .v-application a { color: #FFFFFF; }
</style>
