<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-twitter
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Social Media"
      >
        Join us - we are everywhere.
      </base-section-heading>
      <a
        class="d-inline-block mb-8"
        href="https://nuls.io"
        style="text-decoration: none;"
        target="_blank"
      >
        https://nuls.io
      </a>

      <div class="py-4" />

      <v-btn
        class="mx-6 mb-3"
        color="green lighten-1"
        href="https://twitter.com/Nuls"
        dark
        min-width="92"
        target="_blank"
        small
        :style="`text-transform:none;`"
      >
        NULS
        <v-icon right>
          mdi-twitter
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-6 mb-3"
        color="light-blue darken-4"
        href="https://twitter.com/nerve_network"
        dark
        min-width="92"
        target="_blank"
        small
        elevation-16
        :style="`text-transform:none;`"
      >
        Nerve
        <v-icon right>
          mdi-twitter
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-6 mb-3"
        color="red"
        href="https://www.reddit.com/r/nulsservice"
        dark
        small
        min-width="92"
        target="_blank"
        :style="`text-transform:none;`"
      >
        Reddit
        <v-icon right>
          mdi-reddit
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-6 mb-3"
        color="green darken-1"
        href="https://t.me/nulsservice"
        dark
        target="_blank"
        small
        :style="`text-transform:none;`"
      >
        Telegram
        <v-icon right>
          mdi-telegram
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-6 mb-3"
        color="cyan darken-1"
        href="https://www.facebook.com/nulscommunity"
        dark
        min-width="92"
        target="_blank"
        small
        :style="`text-transform:none;`"
      >
        Facebook
        <v-icon right>
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-6 mb-3"
        color="teal darken-2"
        href="https://discord.gg/kyHHJB5"
        dark
        min-width="92"
        target="_blank"
        small
        :style="`text-transform:none;`"
      >
        Discord
        <v-icon right>
          mdi-discord
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-6 mb-3"
        color="deep-orange"
        href="https://www.youtube.com/channel/UCVIyQ6rE49XBm1sTvNZxQVQ"
        dark
        min-width="92"
        target="_blank"
        small
        :style="`text-transform:none;`"
      >
        YouTube
        <v-icon right>
          mdi-youtube
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-6 mb-3"
        color="deep-orange"
        href="https://www.youtube.com/channel/UCVIyQ6rE49XBm1sTvNZxQVQ"
        dark
        min-width="92"
        target="_blank"
        small
        :style="`text-transform:none;`"
      >
        Github
        <v-icon right>
          mdi-github
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-6 mb-3"
        color="purple darken-3"
        href="https://github.com/nuls-io"
        dark
        min-width="92"
        target="_blank"
        small
        :style="`text-transform:none;`"
      >
        Medium
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
