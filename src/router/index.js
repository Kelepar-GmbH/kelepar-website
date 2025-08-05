import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Privacy from '@/views/Privacy.vue'
import Impressum from '@/views/Impressum.vue'
import AGB from '@/views/AGB.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Kelepar GmbH - Software',
                description: 'Swiss Made. Vertrauen. Innovation. Ihr Schweizer Partner für IT-Lösungen mit höchsten Datenschutz-Standards.'
            }
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
            meta: {
                title: 'Kontakt - Kelepar GmbH',
                description: 'Kontaktieren Sie uns für eine unverbindliche Beratung zu IT-Consulting, Software-Entwicklung und DevOps für Ihr Unternehmen.'
            }
        },
        {
            path: '/privacy',
            name: 'Privacy',
            component: Privacy,
            meta: {
                title: 'Datenschutz - Kelepar GmbH',
                description: 'Datenschutzerklärung der Kelepar GmbH - Ihre Daten sind bei uns sicher.'
            }
        },
        {
            path: '/impressum',
            name: 'Impressum',
            component: Impressum,
            meta: {
                title: 'Impressum - Kelepar GmbH',
                description: 'Rechtliche Informationen und Impressum der Kelepar GmbH.'
            }
        },
        {
            path: '/agb',
            name: 'AGB',
            component: AGB,
            meta: {
                title: 'AGB - Kelepar GmbH',
                description: 'Allgemeine Geschäftsbedingungen der Kelepar GmbH.'
            }
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound,
            meta: {
                title: '404 - Seite nicht gefunden',
                description: 'Die angeforderte Seite konnte nicht gefunden werden.'
            }
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

// Global navigation guard for SEO
router.beforeEach((to, from, next) => {
    // Update page title and meta description
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    
    if (to.meta.description) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', to.meta.description);
        }
    }
    
    // Track page view for analytics
    if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
            page_path: to.path,
            page_title: to.meta.title || 'Kelepar GmbH'
        });
    }
    
    next();
});

export default router
