<template>
  <div
    :class="classes"
    class="base-avatar d-inline-flex ml-2 mr-5"
  >
    <v-avatar
      v-if="outlined"
      :color="color || 'grey lighten-3'"
      :size="outlineSize"
      :style="styles"
      class="base-avatar__outline"
      style="opacity: .4"
      @click="gopath(href)"
    />
    <v-hover
      v-slot:default="{ hover }"
      close-delay="200"
    >
      <v-avatar
        :size="size"
        class="base-avatar__avatar"
        :color="hover ? `transparent` : color"
        v-bind="$attrs"
        v-on="$listeners"
        @click="gopath(`${href}`)"
      >
        <base-icon
          v-if="icon"
          :dark="dark"
          :size="size / 2"
          :class="`${tcolor}`"
        >
          {{ icon }}
        </base-icon>
      </v-avatar>
    </v-hover>
  </div>
</template>

<script>
  export default {
    name: 'BaseAvatar',

    props: {
      color: String,
      tcolor: {
        type: String,
      },
      dark: {
        type: Boolean,
        default: true,
      },
      icon: String,
      outlined: Boolean,
      title: String,
      size: {
        type: [Number, String],
        default: 56,
      },
      href: {
        type: String,
        default: 'https://westteam.nulstar.com',
      },
    },

    data: () => ({
      multiply: 6,
    }),

    computed: {
      classes () {
        return [
          this.outlined && 'base-avatar--outlined',
        ]
      },
      outlineSize () {
        return Number(this.size) + (this.size / this.multiply)
      },
      styles () {
        const margin = this.size / (this.multiply * 2)

        return {
          // Aligns the outline content with the content
          margin: `-${margin}px 0 0 -${margin}px`,
        }
      },
    },
    methods: {
      gopath (rpath) {
        console.log('going to: ' + rpath)
        // window.location.href = rpath
        window.open(rpath, '_blank')
      },
    },
  }
</script>

<style lang="sass">

  .base-avatar
    border-radius: 50%
    position: relative
    overflow: visible

    &__outline
      position: absolute !important
      left: 0
      top: 0

    &--outlined
      background-color: #FFFFFF

      .base-avatar__avatar
        border: thin solid rgba(0, 0, 0, .12) !important
</style>
