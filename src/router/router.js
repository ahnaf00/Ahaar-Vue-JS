import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomeView from '../views/public/HomeView.vue'
import MenuView from '../views/public/MenuView.vue'
import DishDetailView from '../views/public/DishDetailView.vue'
import AboutView from '../views/public/AboutView.vue'
import ImpactView from '../views/public/ImpactView.vue'
import GalleryView from '../views/public/GalleryView.vue'
const routes = [
    // ── Public Routes (Wrapped in Layout) ──────────────────────
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '',             name: 'home',         component: HomeView         },
            { path: 'menu',         name: 'menu',         component: MenuView         },
            { path: 'dish/:slug',   name: 'dish',         component:DishDetailView    },
            { path: 'about',        name: 'about',        component: AboutView        },
            { path: 'impact',       name: 'impact',       component: ImpactView       },
            { path: 'gallery',      name: 'gallery',      component: GalleryView      },
            // { path: 'reservations', name: 'reservations', component: ReservationsView },
            // { path: 'contact',      name: 'contact',      component: ContactView      },
        ]
    },

    // ── 404 fallback ──────────────────────────────────────────
    { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/' },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router