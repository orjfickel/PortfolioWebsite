// Composables
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/404.vue";

const routes = [
  {
    path: '',
    redirect: '/homepage',
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        redirect: 'homepage',
      },
      {
        path: 'homepage',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'cv',
        name: 'CV',
        component: () => import('@/views/CV.vue'),
      },
      {
        path: 'codesample',
        name: 'CodeSample',
        component: () => import('@/views/CodeSample.vue'),
      },
      {
        path: 'projects/masterthesis',
        name: 'MasterThesis',
        component: () => import('@/views/MasterThesis.vue'),
      },
      {
        path: 'projects/smallproject',
        name: 'SmallProject',
        component: () => import('@/views/SmallProject.vue'),
      },
      { path: '/:pathMatch(.*)*', name: 'NotFound',     component: NotFound },
    ],

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash,
        behavior: 'smooth',
        top: 80};
    }
    return { x: 0, y: 0, top: 0 };
  }
})

export default router
