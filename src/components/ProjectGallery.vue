<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    // Format attendu : [{ src: '/projets/.../img.png', alt: 'Description', caption: 'Légende' }]
  },
})

// État de la lightbox
const lightboxIndex = ref(null)
const isLightboxOpen = computed(() => lightboxIndex.value !== null)
const currentImage = computed(() =>
  lightboxIndex.value !== null ? props.images[lightboxIndex.value] : null
)

const openLightbox = (index) => {
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxIndex.value = null
  document.body.style.overflow = ''
}

const prevImage = () => {
  if (lightboxIndex.value > 0) lightboxIndex.value--
}

const nextImage = () => {
  if (lightboxIndex.value < props.images.length - 1) lightboxIndex.value++
}

// Gestion clavier dans la lightbox
const handleKeydown = (e) => {
  if (!isLightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

import { onMounted, onBeforeUnmount } from 'vue'
onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="gallery">

    <!-- Grille des miniatures -->
    <div class="gallery-grid">
      <button
        v-for="(image, i) in images"
        :key="i"
        class="gallery-thumb"
        @click="openLightbox(i)"
        :aria-label="`Agrandir : ${image.alt}`"
      >
        <img :src="image.src" :alt="image.alt" loading="lazy" />
        <span v-if="image.caption" class="thumb-caption">{{ image.caption }}</span>
      </button>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="isLightboxOpen" class="lightbox" @click.self="closeLightbox" role="dialog" aria-modal="true">
        <button class="lightbox-close" @click="closeLightbox" aria-label="Fermer">×</button>

        <button
          v-if="lightboxIndex > 0"
          class="lightbox-nav lightbox-prev"
          @click="prevImage"
          aria-label="Image précédente"
        >←</button>

        <button
          v-if="lightboxIndex < images.length - 1"
          class="lightbox-nav lightbox-next"
          @click="nextImage"
          aria-label="Image suivante"
        >→</button>

        <div class="lightbox-content">
          <img :src="currentImage.src" :alt="currentImage.alt" />
          <p v-if="currentImage.caption" class="lightbox-caption">{{ currentImage.caption }}</p>
          <p class="lightbox-counter">
            {{ String(lightboxIndex + 1).padStart(2, '0') }} / {{ String(images.length).padStart(2, '0') }}
          </p>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<style scoped>
/* Grille */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.gallery-thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  padding: 0;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.gallery-thumb:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-thumb:hover img { transform: scale(1.03); }

.thumb-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.65rem 0.85rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  font-size: 0.78rem;
  font-family: var(--font-mono);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  display: block;
}

.lightbox-caption {
  color: white;
  font-size: 0.95rem;
  text-align: center;
  margin: 0;
  max-width: 700px;
}

.lightbox-counter {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1em;
  margin: 0;
}

.lightbox-close,
.lightbox-nav {
  position: absolute;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.lightbox-close:hover,
.lightbox-nav:hover {
  background: var(--accent);
  border-color: var(--accent);
}

.lightbox-close {
  top: 2rem;
  right: 2rem;
}

.lightbox-prev { left: 2rem; }
.lightbox-next { right: 2rem; }

.lightbox-nav {
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 640px) {
  .lightbox { padding: 1rem; }
  .lightbox-close { top: 1rem; right: 1rem; }
  .lightbox-prev { left: 1rem; }
  .lightbox-next { right: 1rem; }
  .lightbox-nav,
  .lightbox-close { width: 40px; height: 40px; }
}
</style>