<script setup>
defineProps({
  documents: {
    type: Array,
    required: true,
    // Format attendu : [{ label, file, type: 'pdf' | 'image' | 'doc', description }]
  },
})

const getIcon = (type) => {
  switch (type) {
    case 'pdf': return 'PDF'
    case 'image': return 'IMG'
    case 'code': return 'TXT'
    default: return 'DOC'
  }
}

const canPreview = (type) => type === 'pdf' || type === 'image'
</script>

<template>
  <ul class="documents-list">
    <li v-for="doc in documents" :key="doc.file" class="document-item">
      <div class="doc-icon">{{ getIcon(doc.type) }}</div>

      <div class="doc-info">
        <p class="doc-label">{{ doc.label }}</p>
        <p v-if="doc.description" class="doc-description">{{ doc.description }}</p>
      </div>

      <div class="doc-actions">
        <a
          v-if="canPreview(doc.type)"
          :href="doc.file"
          target="_blank"
          rel="noopener"
          class="doc-action doc-view"
        >
          Consulter
        </a>
        <a
          :href="doc.file"
          :download="doc.label"
          class="doc-action doc-download"
        >
          Télécharger
        </a>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.documents-list {
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
}

.document-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.document-item:hover {
  border-color: var(--accent);
}

.doc-icon {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-subtle);
  border: 1px solid var(--border-strong);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--accent);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.doc-info {
  flex: 1;
  min-width: 0;
}

.doc-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 0.2rem;
  transition: color 0.5s ease;
}

.doc-description {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0;
  transition: color 0.5s ease;
}

.doc-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.doc-action {
  padding: 0.55rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.doc-view {
  background: var(--accent);
  color: var(--bg);
}

.doc-view:hover { background: var(--accent-soft); }

.doc-download {
  border: 1px solid var(--border-strong);
  color: var(--text);
}

.doc-download:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 640px) {
  .document-item {
    flex-wrap: wrap;
    gap: 0.85rem;
  }
  .doc-actions { width: 100%; }
  .doc-action { flex: 1; text-align: center; }
}
</style>