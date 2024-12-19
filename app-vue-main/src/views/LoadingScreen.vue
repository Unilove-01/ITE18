<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const isLoading = ref(true) // State for loading
    const router = useRouter() // Router instance

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false
        router.push('/login') // Redirect to login after loading
      }, 5000) // Adjust duration here (5 seconds)
    })

    return {
      isLoading,
    }
  },
}
</script>

<template>
  <div class="loading-screen" v-if="isLoading">
    <!-- Logo and Title Section -->
    <div class="header-container">
      <h1 class="title">EFFICIO</h1>
      <img src="@/assets/logo.png" alt="App Logo" class="logo mx-2" />
    </div>

    <!-- Spinner Animation -->
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
/* Importing Google Font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* Root Container */
.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, #d35100, #000000); /* Orange to black gradient */
  color: #ffffff; /* White text for visibility */
  text-align: center;
  overflow: hidden; /* Prevents unwanted scrollbars */
  font-family: 'Roboto', sans-serif; /* Global font style */
}

/* Logo and Title Container */
.header-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  width: 80px; /* Adjust logo size */
  height: auto;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.5)); /* Shadow effect */
}

.title {
  font-size: 3rem; /* Size of the title */
  font-weight: 700; /* Bold text */
  color: #ffffff; /* White text for blending */
  letter-spacing: 1.2px; /* Subtle letter spacing for style */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Slight shadow for readability */
}

/* Spinner Animation */
.spinner {
  width: 50px;
  height: 50px;
  border: 6px solid rgba(255, 255, 255, 0.2); /* Semi-transparent outer border */
  border-top: 6px solid #f8a145; /* Highlight color */
  border-radius: 50%;
  animation: spin 1.5s linear infinite; /* Smooth rotation */
  margin-bottom: 15px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Loading Text */
.loading-text {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: #ffffff; /* Matches highlight color */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Slight shadow for better visibility */
  margin-top: 10px;
  text-align: center;
}
</style>
