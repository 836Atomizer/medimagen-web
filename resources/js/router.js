import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./Pages/HomeRoute.vue"),
    },
    {
        path: "/comunicados",
        component: () => import("./Pages/ReleaseRoute.vue"),
    },
    {
        path: "/comunicados/:id",
        component: () => import("./Pages/ViewReleaseRoute.vue"),
        props: true // Esto permitirá pasar los parámetros de la ruta como propiedades al componente TestRoute.vue
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});