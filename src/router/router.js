import { createRouter, createWebHistory } from "vue-router";
import { requiresAuth } from "./guards";
import AdminLoginView from "../views/admin/AdminLoginView.vue";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import HomeView from "../views/public/HomeView.vue";
import MenuView from "../views/public/MenuView.vue";
import DishDetailView from "../views/public/DishDetailView.vue";
import AboutView from "../views/public/AboutView.vue";
import ImpactView from "../views/public/ImpactView.vue";
import GalleryView from "../views/public/GalleryView.vue";
import ReservationsView from "../views/public/ReservationsView.vue";
import ContactView from "../views/public/ContactView.vue";
import AdminDashboardView from "../views/admin/AdminDashboardView.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import AdminOrdersView from "../views/admin/AdminOrdersView.vue";
import AdminReservationsView from "../views/admin/AdminReservationsView.vue";
import AdminMenuView from "../views/admin/AdminMenuView.vue";
import AdminImpactView from "../views/admin/AdminImpactView.vue";
const routes = [
  // ── Public Routes (Wrapped in Layout) ──────────────────────
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", name: "home", component: HomeView },
      { path: "menu", name: "menu", component: MenuView },
      { path: "dish/:slug", name: "dish", component: DishDetailView },
      { path: "about", name: "about", component: AboutView },
      { path: "impact", name: "impact", component: ImpactView },
      { path: "gallery", name: "gallery", component: GalleryView },
      {
        path: "reservations",
        name: "reservations",
        component: ReservationsView,
      },
      { path: "contact", name: "contact", component: ContactView },
    ],
  },

  // ── Admin Login (no auth required) ─────────────────────────
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: AdminLoginView,
    meta: { title: "Admin Login" },
  },

  // ── Admin Routes (wrapped in AdminLayout) ───────────────────
  {
    path: "/admin",
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "admin-dashboard",
        component: AdminDashboardView,
        meta: { title: "Dashboard" },
      },
      {
        path: "orders",
        name: "admin-orders",
        component: AdminOrdersView,
        meta: { title: "Orders" },
      },
      {
        path: "reservations",
        name: "admin-reservations",
        component: AdminReservationsView,
        meta: { title: "Reservations" },
      },
      {
        path: "menu",
        name: "admin-menu",
        component: AdminMenuView,
        meta: { title: "Menu Manager" },
      },
      {
        path: "impact",
        name: "admin-impact",
        component: AdminImpactView,
        meta: { title: "Impact Tracker" },
      },
    ],
  },

  // ── 404 fallback ──────────────────────────────────────────
  { path: "/:pathMatch(.*)*", name: "not-found", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// ── Navigation Guard ──────────────────────────────────────────
import { useAuthStore } from '../stores/auth'
router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const auth = useAuthStore()
    if (!auth.isAuthenticated) {
      return { name: 'AdminLogin', query: { redirect: to.fullPath } }
    }
  }
})
export default router;
