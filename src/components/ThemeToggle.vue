<script setup>
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    :class="{ 'is-day': theme === 'day' }"
    :aria-label="`Basculer en mode ${theme === 'night' ? 'jour' : 'nuit'}`"
    @click="toggleTheme"
  >
    <span class="thumb"></span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: relative;
  width: 46px;
  height: 24px;
  border-radius: 12px;
  background: var(--bg-subtle);
  border: 1px solid var(--border-strong);
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.thumb {
  position: absolute;
  top: 50%;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  transform: translateY(-50%);
  transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease;
}

.is-day .thumb {
  left: calc(100% - 19px);
}

.theme-toggle:hover .thumb {
  background: var(--accent-soft);
}
</style>