<template>
  <div class="login-page">
    <div class="login-card">
      <!-- Logo and Title Section -->
      <div class="logo-section">
        <h1 class="title pt-3 pe-1">EFFICIO</h1>
        <img src="@/assets/logo.png" alt="EFFICIO Logo" class="logo" />
      </div>

      <!-- Welcome Message -->
      <h2 class="login-title">Welcome Back</h2>
      <p class="login-subtitle">Log in to continue exploring your tasks</p>

      <!-- Input Fields -->
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" />
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" />
      </div>

      <!-- Login Button -->
      <router-link to="/home" class="btn-login">Login</router-link>

      <!-- Navigation Links -->
      <div class="links">
        <router-link to="/register" class="register-link">
          Don't have an account? Register
        </router-link>
        <router-link to="/forgot-password" class="forgot-password-link">
          Forgot Password?
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
}
</script>

<style scoped>
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* Root Container */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, #000000, #ff6700); /* Black to orange gradient */
  font-family: 'Roboto', sans-serif;
}

/* Login Card */
.login-card {
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px); /* Frosted glass effect */
  color: #fff;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Form Titles */
.login-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.login-subtitle {
  font-size: 1rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.8);
}

/* Form Fields */
.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.form-control::placeholder {
  color: rgba(0, 0, 0, 0.6);
}

/* Login Button */
.btn-login {
  display: inline-block;
  text-align: center;
  width: 100%;
  padding: 10px;
  background-color: #ff6700;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn-login:hover {
  background-color: #e65c00;
}

/* Navigation Links */
.links {
  margin-top: 15px;
}

.register-link,
.forgot-password-link {
  color: #ff6700;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 5px;
  display: block;
}

.register-link:hover,
.forgot-password-link:hover {
  text-decoration: underline;
}
</style>
