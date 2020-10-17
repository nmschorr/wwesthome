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

      <template v-for="({ icon, textname, title: t, linkedin, email }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          :linkin="linkedin"
          :email="email"
          :text="textname"
          dark
          class="white--text"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div
            style="color:white;"
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
      dark: Boolean,
      dense: Boolean,
      title: String,
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
        //   icon: 'mdi-email',
        //   title: 'Berzeck - Western Regional Director',
        //   text: 'mailto:berzeck@nulstar.com',
        // },
        // {
        //   icon: 'linked-in',
        //   title: 'Patric Vogel - VP of Marketing',
        //   text: 'https://linkedin.com/in/patric-vogel-8070471b6/',
        // },
        // {
        //   icon: 'mdi-telegram',
        //   title: 'Gabriele - Training Liason',
        //   text: 'Telegram: @Gabriely89',
        // },
        // {
        //   icon: 'mdi-email',
        //   title: 'Kathy Norman - VP of Customer Support',
        //   text: 'https://linkedin.com/in/kathy-norman/',