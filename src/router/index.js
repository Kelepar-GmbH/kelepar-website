import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Privacy from '../views/Privacy.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/datenschutz',
            name: 'Privacy',
            component: Privacy
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (from.path === to.path) {
            return {top: 0, behavior: "smooth"}
        } else if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    },
})

export default router
