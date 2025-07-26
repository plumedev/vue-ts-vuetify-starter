<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-8" elevation="8" rounded="lg">
          <v-card-title class="text-h4 text-center mb-6">
            {{ $t('home.welcome') }}
          </v-card-title>

          <v-card-subtitle class="text-h6 text-center mb-8 text-grey-darken-1">
            {{ $t('home.subtitle') }}
          </v-card-subtitle>

          <v-card-text class="text-center">
            <v-btn
              @click="fetchData"
              :loading="isLoading"
              color="primary"
              size="large"
              class="mb-4"
              :prepend-icon="mdiCloudDownload"
            >
              {{ $t('home.fetchDataBtn') }}
            </v-btn>

            <v-alert
              v-if="isError"
              type="error"
              class="mt-4"
            >
              {{ errorMessage }}
            </v-alert>

            <v-card
              v-if="data"
              class="mt-6 pa-4"
              color="success"
              variant="tonal"
            >
              <v-card-title class="text-h6">
                {{ $t('home.apiResponse') }}
              </v-card-title>
              <v-card-text>
                <pre>{{ JSON.stringify(data, null, 2) }}</pre>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useGetExampleData } from './composables/useGetExampleData'
import { mdiCloudDownload } from '@mdi/js'

const { data, isLoading, isError, errorMessage, doRequest: fetchData } = useGetExampleData()
</script>
