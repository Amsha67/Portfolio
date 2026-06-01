import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/projets',
            name: 'projects',
            component: ProjectsView,
        },
        {
            path: '/projets/:slug',
            name: 'project-detail',
            component: ProjectDetailView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // Au changement de page, on remonte tout en haut
        if (savedPosition) return savedPosition
        if (to.hash) return { el: to.hash, behavior: 'smooth' }
        return { top: 0 }
    },
})

export default router