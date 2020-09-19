<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s) in social">
              <a
                :key="s.title"
                class="white--text pa-1 pa-md-0"
                :href="s.hreff"
                v-text="s.title"
              />
                
              <v-responsive
                v-if="s < social.length - 1"
                :key="`divider-${s}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; 2020 Nuls Foundation
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [{
        Facebook: {
          title: 'Facebook',
          hreff: {
            type: URL,
            default: 'facebook.com/Nuls',
            required: false,
          },
        },
        Twitter: {
          title: 'Twitter',
          hreff: {
            type: String,
            default: 'twitter.com/Nuls',
            required: false,
          },
        },
        Telegram: {
          title: 'Telegram',
          hreff: {
            type: String,
            default: 't.me/nuls_network',
            required: false,
          },
        },
      }],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
