<template>
  <div class="home-page">
    <!-- Header Section -->
    <header class="header">
      <div class="logo-section">
        <img src="@/assets/logo.png" alt="EFFICIO Logo" class="logo" />
        <h1 class="title pt-3">Home</h1>
      </div>

      <!-- Hamburger Menu -->
      <div class="hamburger-menu" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </header>

    <!-- Side Menu -->
    <aside :class="{ 'side-menu': true, open: menuOpen }">
      <nav>
        <router-link to="/home" class="menu-link pt-4">Home</router-link>
        <router-link to="/taskmanagement" class="menu-link">Task Management</router-link>
        <router-link to="/pomodoro-timer" class="menu-link">Pomodoro Timer</router-link>
        <router-link to="/profile" class="menu-link">Profile</router-link>
        <button class="logout-btn" @click="logout">Logout</button>
      </nav>
      <button class="close-btn" @click="toggleMenu">&times;</button>
    </aside>

    <!-- Overlay -->
    <div v-if="menuOpen" class="overlay" @click="toggleMenu"></div>

    <!-- Welcome Section -->
    <section class="welcome-section">
      <h2>Welcome to EFFICIO!</h2>
      <p>
        Your productivity assistant designed to help you manage tasks, analyze performance, and
        boost efficiency.
      </p>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature-card">
        <h3>Task Management</h3>
        <p>Organize your tasks and keep track of your progress with ease.</p>
        <router-link to="/task-management" class="btn-feature">Go to Task Management</router-link>
      </div>
      <div class="feature-card">
        <h3>Pomodoro Timer</h3>
        <p>Boost your productivity with the Pomodoro Technique.</p>
        <router-link to="/pomodoro-timer" class="btn-feature">Go to Pomodoro Timer</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const menuOpen = ref(false)
    const router = useRouter()

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const logout = () => {
      // Simulate logout functionality
      alert('Logged out successfully!')
      router.push('/') // Redirect to login page
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
/* Root Container */
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(120deg, #ff6700, #000000); /* Black to orange gradient */
  color: #fff;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow-x: hidden; /* Prevent horizontal scroll due to side menu */
}

/* Header Section */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4); /* Darker semi-transparent header */
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

/* Side Menu (Right Side) */
.side-menu {
  position: fixed;
  top: 0;
  right: -250px; /* Start off-screen on the right */
  height: 100%;
  width: 250px;
  background-color: #333; /* Dark side menu background */
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease;
  z-index: 1100;
}

.side-menu.open {
  right: 0; /* Slide in */
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
  color: #ff6700; /* Orange hover effect */
}

/* Logout Button */
.logout-btn {
  background-color: #ff6700; /* Orange button */
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #e55b00; /* Darker orange on hover */
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px; /* Close button now on the left of the menu */
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

/* Welcome Section */
.welcome-section {
  text-align: center;
  margin: 30px 20px;
}

.welcome-section h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.welcome-section p {
  font-size: 1.2rem;
  margin: 0;
}

/* Features Section */
.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
}

.feature-card {
  background: rgba(0, 0, 0, 0.6); /* Darker card background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 300px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.btn-feature {
  display: inline-block;
  padding: 10px 15px;
  background-color: #ff6700; /* Orange button */
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn-feature:hover {
  background-color: #000; /* Black hover effect */
}
</style>
