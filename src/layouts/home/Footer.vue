<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row
        class="d-flex align-end"
      >
        <v-col
          cols="3"
        />
        <v-col
          cols="6"
        >
          <v-tooltip
            v-model="showtw1"
            top
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mx-2 mb-3"
                color="grey"
                href="https://twitter.com/Nuls"
                target="_blank"
                fab
                x-small
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
                class="mx-2 mb-3"
                color="indigo lighten-1"
                href="https://twitter.com/nerve_network"
                fab
                x-small
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
                class="mx-2 mb-3"
                color="red lighten-1"
                href="https://www.reddit.com/r/nulsservice"
                x-small
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
                class="mx-2 mb-3"
                color="grey darken-1"
                href="https://t.me/nulsservice"
                fab
                x-small
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
                class="mx-2 mb-3"
                color="light-blue lighten-1"
                href="https://www.facebook.com/nulscommunity"
                fab
                x-small
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
                class="mx-2 mb-3"
                color="grey darken-1"
                href="https://discord.gg/kyHHJB5"
                fab
                x-small
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
                class="mx-2 mb-3"
                color="red lighten-2"
                href="https://www.youtube.com/channel/UCVIyQ6rE49XBm1sTvNZxQVQ"
                fab
                x-small
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
                class="mx-2 mb-3"
                color="blue-grey lighten-1"
                href="https://github.com/nuls-io"
                fab
                x-small
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
                class="mx-2 mb-3"
                color="teal lighten-2"
                href="https://medium.com/@nuls"
                fab
                target="_blank"
                x-small
                :style="`text-transform:none;`"
                v-bind="attrs"
                v-on="on"
              >
                <v-avatar size="20">
                  <v-img :src="require('@/assets/addins/Monogram3.png')" />
                </v-avatar>
              </v-btn>
            </template>
            <span>medium</span>
          </v-tooltip>
        </v-col>
        <v-col
          class="text-center text-md-right"
          cols="3"
        >
          <div class="body-1 font-weight-medium pt-0 mt-1 text-center lighttext--text">
            &copy; 2020 Made with
            <v-icon
              size="16"
              color="red darken-1"
            >
              mdi-heart
            </v-icon>
            by
            <a
              href="https://nuls.io"
              style="font-weight:600!important;color:#4DB6AC;"
            >
              NULS
            </a>
            for a better blockchain
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',
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

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
