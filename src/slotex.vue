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
        :style="`color:white;`"
      >
        https://nuls.io
      </a>
      <div class="py-4" />
      <v-tooltip
        v-model="showtw1"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="green lighten-1"
            href="https://twitter.com/Nuls"
            target="_blank"
            fab
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-twitter
            </v-icon>
          </v-btn>
        </template>
        <span>Twitter Nuls</span>
      </v-tooltip>
      <v-tooltip
        v-model="showtw2"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="light-blue darken-4"
            href="https://twitter.com/nerve_network"
            fab
            target="_blank"
            elevation-16
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-twitter
            </v-icon>
          </v-btn>
        </template>
        <span>Twitter Nerve</span>
      </v-tooltip>
      <v-tooltip
        v-model="showred"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="red"
            href="https://www.reddit.com/r/nulsservice"
            fab
            target="_blank"
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-reddit
            </v-icon>
          </v-btn>
        </template>
        <span>Reddit</span>
      </v-tooltip>
      <v-tooltip
        v-model="showtel"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="green darken-1"
            href="https://t.me/nulsservice"
            fab
            target="_blank"
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-telegram
            </v-icon>
          </v-btn>
        </template>
        <span>Telegram</span>
      </v-tooltip>
      <v-tooltip
        v-model="showfac"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="cyan darken-1"
            href="https://www.facebook.com/nulscommunity"
            fab
            target="_blank"
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-facebook
            </v-icon>
          </v-btn>
        </template>
        <span>Facebook</span>
      </v-tooltip>
      <v-tooltip
        v-model="showdis"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="secondary"
            href="https://discord.gg/kyHHJB5"
            fab
            target="_blank"
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-discord
            </v-icon>
          </v-btn>
        </template>
        <span>Discord</span>
      </v-tooltip>
      <v-tooltip
        v-model="showyou"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="deep-orange"
            href="https://www.youtube.com/channel/UCVIyQ6rE49XBm1sTvNZxQVQ"
            fab
            target="_blank"
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-youtube
            </v-icon>
          </v-btn>
        </template>
        <span>Youtube</span>
      </v-tooltip>
      <v-tooltip
        v-model="showgit"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="deep-orange"
            href="https://github.com/nuls-io"
            fab
            target="_blank"
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-github
            </v-icon>
          </v-btn>
        </template>
        <span>Github</span>
      </v-tooltip>
      <v-tooltip
        v-model="showmed"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-6 mb-3"
            color="light-blue"
            href="https://medium.com/@nuls"
            dark
            fab
            target="_blank"
            medium
            :style="`text-transform:none;`"
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar size="36">
              <v-img :src="require('@/assets/addins/Monogram4.png')" />
            </v-avatar>
          </v-btn>
        </template>
        <span>Medium</span>
      </v-tooltip>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
    data: () => ({
      on: '',
      attrs: '',
      show: '',
      showtw1: '',
      showtw2: '',
      showred: '',
      showfac: '',
      showdis: '',
      showtel: '',
      showgit: '',
      showmed: '',
      showyou: '',
    }),
  }
</script>
