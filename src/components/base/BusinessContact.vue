<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="blue-grey"
        dark
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :text="textname"
          :title="!dense ? t : undefined"
          :linkin="linkin"
          :email="email"
          dark
          class="black--text text--lighten-1 deep-orange lighten-3"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div
            style="color:blue;"
            v-html="textname"
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
      dark: {
        type: Boolean,
        default: true,
      },
      dense: Boolean,
      outlined: {
        type: Boolean,
        default: true,
      },
      email: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      linkin: {
        type: String,
        default: '',
      },
      href: {
        type: String,
        default: '',
      },
      textname: {
        type: String,
        default: '',
      },
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-email',
          title: 'Westtern Regional Director',
          email: 'berzeck@nulstar.com',
          linkedin: '',
          textname: 'Berzeck',
        },
        {
          icon: 'mdi-linkedin',
          title: 'VP of Customer Experience',
          textname: 'Kathy Norman',
          linkedin: 'https://linkedin.com/in/kathy-norman/',
          email: '',
        },
        {
          icon: 'mdi-linkedin',
          title: 'VP of Marketing',
          textname: 'Patric Vogel',
          linkedin: 'https://linkedin.com/in/patric-vogel-8070471b6/',
          email: '',
        },
        {
          icon: 'mdi-telegram',
          title: 'Training Liason',
          email: 'Telegram: @Gabriely89',
          linkedin: '',
          textname: 'Gabriele Yokver',
        },
        {
          icon: 'mdi-telegram',
          title: 'Sales Engineer and Marketing',
          email: 'Telegram: @Nancy_Sv',
          linkedin: '',
          textname: 'Nancy Schorr',
        },
        {
          icon: 'mdi-telegram',
          title: 'Graphics, Animation and Social Marketing',
          textname: 'Nalex',
          email: 'Telegram: @NalexNULS',
          linkedin: '',
        },
      ],
    }),
  }
</script>
