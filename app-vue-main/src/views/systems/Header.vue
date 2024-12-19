<template>
  <header class="header">
    <div class="logo-section">
      <img src="@/assets/logo.png" alt="EFFICIO Logo" class="logo" />
      <h1 class="title pt-3">{{ title }}</h1>
    </div>
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <aside :class="{ 'side-menu': true, open: menuOpen }">
      <nav>
        <router-link to="/home" class="menu-link pt-4">Home</router-link>
        <router-link to="/task-management" class="menu-link">Task Management</router-link>
        <router-link to="/pomodoro-timer" class="menu-link">Pomodoro Timer</router-link>
        <router-link to="/profile" class="menu-link">Profile</router-link>
        <button class="logout-btn" @click="logout">Logout</button>
      </nav>
      <button class="close-btn" @click="toggleMenu">&times;</button>
    </aside>
    <div v-if="menuOpen" class="overlay" @click="toggleMenu"></div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Home',
    },
  },
  setup() {
    const menuOpen = ref(false)
    const router = useRouter()

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const logout = () => {
      alert('Logged out successfully!')
      router.push('/')
    }

    return {
      menuOpen,
      toggleMenu,
      logout,
    }
  },
}
</script>

<style scoped>
/* Header Section */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: linear-gradient(90deg, #ff6700, #000000); /* Orange to Black Gradient */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
}

/* Hamburger Menu */
.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.hamburger-menu .line {
  width: 100%;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
}

/* Side Menu */
.side-menu {
  position: fixed;
  top: 0;
  right: -250px;
  height: 100%;
  width: 250px;
  background: linear-gradient(120deg, #000000, #ff6700); /* Black to Orange Gradient */
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease;
  z-index: 1100;
}

.side-menu.open {
  right: 0;
}

.side-menu nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.menu-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.menu-link:hover {
  color: #ff6700;
}

/* Logout Button */
.logout-btn {
  background-color: #ff6700;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #e55b00;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
}
</style>
