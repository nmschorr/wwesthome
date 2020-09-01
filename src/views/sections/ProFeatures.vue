<template>
  <base-section
    id="pro-features"
  >
    <v-img
      :src="require('@/assets/nuls-nerve.jpg')"
      class="mx-auto mb-8"
      width="auto"
      min-width="200px"
      max-width="1200px"
      height="337px"
      min-height="100px"
    />

    <base-section-heading title="Feature Comparison">
      <strong>Nuls</strong> and Nerve <br>
    </base-section-heading>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="2"
        />
        <v-col
          cols="12"
          md="7"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th />
                <th class="body-1 font-weight-bold text-center">
                  What's in Nuls v2.0?
                </th>
                <th class="body-1 font-weight-bold text-center">
                  What's in the Nerve version?
                </th>
              </tr>
            </thead>

            <tbody class="body-1">
              <tr
                v-for="([name, one, two], i) in features"
                :key="i"
              >
                <td v-text="name" />

                <td class="text-center font-weight-bold">
                  <template v-if="typeof one === 'boolean'">
                    <v-icon :color="one ? 'success' : 'error'">
                      mdi-{{ one ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ one }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof two === 'boolean'">
                    <v-icon :color="two ? 'success' : 'error'">
                      mdi-{{ two ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ two }}
                  </template>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>

        <v-col
          cols="12"
          md="3"
          class="d-flex flex-column justify-right align-right"
        >
          <v-card
            class="my-12 ml-12"
            max-width="150px"
            max-height="200px"
            flat
          >
            <base-img
              max-width="100%"
              :src="require('@/assets/rocket.svg')"
            />
          </v-card>

          <div class="text-center">
            <!-- <base-btn
              :tile="false"
              color="primary"
              href=""
              rounded
            >
              <v-icon right>
                mdi-rocket
              </v-icon>
            </base-btn> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',
    data: () => ({
      features: [
        ['Modules', true, true],
        ['Exchanges', true, true],
        ['Staking', true, true],
        ['POCM', true, true],
        ['Ndex', true, true],
        ['Mobile', true, true],
        ['More', true, true],
      ],
    }),
  }
</script>
