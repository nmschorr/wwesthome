<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        color="blue-grey"
        dark
      >
        <slot />
      </base-info-card>

      <template v-for="(itm, i) in business">
        <base-avatar-card
          :key="i"
          :icon="itm.icon"
          :outlined="false"
          :text="itm.jobtitle"
          :title="itm.personname"
          :email="itm.email"
          :linkin="itm.linkin"
          dark
          class="white--text transparent"
          horizontal
          space="0"
        />
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
      text: {
        type: String,
        default: '',
      },
      href: {
        type: String,
        default: '',
      },
      email: {
        type: String,
        default: '',
      },
      jobtitle: {
        type: String,
        default: '',
      },
      linkin: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      personname: {
        type: String,
        default: '',
      },
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-email',
          jobtitle: 'Westtern Regional Director',
          title: 'Westtern Regional Director',
          email: 'berzeck@nulstar.com',
          linkin: '',
          personname: 'Berzeck',
        },
        {
          icon: 'mdi-linkedin',
          jobtitle: 'VP of Customer Experience',
          title: 'VP of Customer Experience',
          personname: 'Kathy Norman',
          linkin: 'https://linkedin.com/in/kathy-norman/',
          email: '',
        },
        {
          icon: 'mdi-linkedin',
          jobtitle: 'VP of Marketing',
          personname: 'Patric Vogel',
          linkin: 'https://linkedin.com/in/patric-vogel-8070471b6/',
          email: '',
        },
        {
          icon: 'mdi-telegram',
          jobtitle: 'Training Liason',
          email: 'Telegram: @Gabriely89',
          linkin: '',
          personname: 'Gabriele Yokver',
        },
        {
          icon: 'mdi-telegram',
          jobtitle: 'Sales Engineer and Marketing',
          email: 'Telegram: @Nancy_Sv',
          linkin: '',
          personname: 'Nancy Schorr',
        },
        {
          icon: 'mdi-telegram',
          jobtitle: 'Graphics, Animation and Social Marketing',
          personname: 'Nalex',
          email: 'Telegram: @NalexNULS',
          linkin: '',
        },
      ],
    }),
  }
</script>
