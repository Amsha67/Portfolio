import { ref } from 'vue'

// Theme global partagé
const theme = ref('night') // night par défaut

export function useTheme() {

    const applyTheme = (next) => {
        theme.value = next
        document.documentElement.setAttribute('data-theme', next)
        localStorage.setItem('portfolio-theme', next)
    }

    const toggleTheme = () => {
        applyTheme(theme.value === 'night' ? 'day' : 'night')
    }

    const initTheme = () => {
        const saved = localStorage.getItem('portfolio-theme')
        if (saved === 'day' || saved === 'night') {
            applyTheme(saved)
        } else {
            // Par défaut night, peu importe la préférence système
            applyTheme('night')
        }
    }

    return { theme, toggleTheme, initTheme }
}