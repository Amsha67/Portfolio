<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  language: { type: String, default: 'php' },
  code: { type: String, required: true },
})

const isCopied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    isCopied.value = true
    setTimeout(() => { isCopied.value = false }, 2000)
  } catch (e) {
    console.error('Copy failed', e)
  }
}
</script>

<template>
  <figure class="code-block">
    <figcaption class="code-header">
      <div class="code-info">
        <p class="code-title">{{ title }}</p>
        <p v-if="description" class="code-description">{{ description }}</p>
      </div>
      <div class="code-meta">
        <span class="code-language">{{ language }}</span>
        <button class="code-copy" @click="copyCode">
          {{ isCopied ? 'Copié ✓' : 'Copier' }}
        </button>
      </div>
    </figcaption>

    <pre class="code-content"><code>{{ code }}</code></pre>
  </figure>
</template>

<style scoped>
.code-block {
  margin: 1.5rem 0;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  transition: background 0.5s ease, border-color 0.5s ease;
}

.code-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.code-info {
  flex: 1;
}

.code-title {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 0.25rem;
  transition: color 0.5s ease;
}

.code-description {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
  transition: color 0.5s ease;
}

.code-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.code-language {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-transform: uppercase;
  transition: color 0.5s ease;
}

.code-copy {
  padding: 0.4rem 0.85rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  background: none;
  border: 1px solid var(--border-strong);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.3s ease;
}

.code-copy:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.code-content {
  margin: 0;
  padding: 1.25rem 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.65;
  color: var(--text);
  background: var(--bg);
  overflow-x: auto;
  transition: color 0.5s ease, background 0.5s ease;
}

.code-content code {
  font-family: inherit;
  white-space: pre;
  display: block;
}

@media (max-width: 640px) {
  .code-header { flex-direction: column; align-items: stretch; }
  .code-content { font-size: 0.78rem; padding: 1rem; }
}
</style>