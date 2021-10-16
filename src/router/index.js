import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Login from '../views/Login.vue'
import Application from "../views/Application.vue";
import { getAuth } from 'firebase/auth';


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
  console.log(test.currentUser, 'is currentUser');
  if (to.matched.some(record => record.meta.authRequired)) {
    if (test.currentUser) {
      next();
    } else {
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
})

export default router
