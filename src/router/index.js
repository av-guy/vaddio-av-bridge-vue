import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Login from '../views/Login.vue'
import Application from "../views/Application.vue";
import { getAuth } from "firebase/auth";

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/app',
    name: 'Application',
    component: Application,
    meta: {
      authRequired: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let test = getAuth();
  if (to.matched.some(record => record.meta.authRequired)) {
    if (test.currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
})

export default router
