import { createRouter, createWebHistory } from 'vue-router'

// Import Views
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import LoadingScreen from '@/views/LoadingScreen.vue'
import TaskManagement from '@/views/TaskManagement.vue'
import Profile from '@/views/Profile.vue'

// Import System Views
import PomodoroTimer from '@/views/PomodoroTimer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loading-screen',
      component: LoadingScreen,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/task-management',
      name: 'task-management',
      component: TaskManagement,
    },
    {
      path: '/pomodoro-timer',
      name: 'pomodoro-timer',
      component: PomodoroTimer,
    },
  ],
})

export default router
