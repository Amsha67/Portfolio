<script setup>
import AppHeader from './components/AppHeader.vue'
import { useTheme } from './composables/useTheme'
import { onMounted } from 'vue'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  padding-top: 4rem; /* compense le header fixe */
}
</style>