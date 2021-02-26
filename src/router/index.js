import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: 'main'
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/admin',
    name: "Admin",
    meta: {
      layout: 'admin'
    },
    component: () => import("@/views/Admin/AdminPage")
  },
  {
    path: "/me",
    name: "Me",
    meta: {
      layout: 'main'
    },
    component: () => import("@/views/MeInfo.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    meta: {
      layout: 'main'
    },
    component: () => import("@/views/Projects.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
