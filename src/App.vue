<template>
  <StyleProvider>
    <ExampleProvider>
      <v-app>
        <RouterView />
      </v-app>
    </ExampleProvider>
  </StyleProvider>
</template>

<script lang="ts" setup>
import ExampleProvider from './providers/ExampleProvider.vue'
import StyleProvider from './providers/StyleProvider.vue'
</script>
