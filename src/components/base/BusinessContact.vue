<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
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
          <div v-html="text" />
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
          icon: 'mdi-telegram',
          title: 'Training Liason',
          text: 'Telegram: @Gabriely89',
        },
        {
          icon: 'mdi-email',
          title: 'Software Support',
          text: 'kathy@nuls.io',
        },
        {
          icon: 'mdi-email',
          title: 'Westtern Regional Director',
          text: 'berzeck@nulstar.com',
        },
        {
          icon: 'mdi-telegram',
          title: 'Webmaster',
          text: 'Telegram: @Nancy_Sv',
        },
      ],
    }),
  }
</script>
