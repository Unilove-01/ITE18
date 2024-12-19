<template>
  <div class="profile-page">
    <!-- Header -->
    <Header title="Profile Page" class="sticky-top bg-dark text-white" />

    <div class="container py-5">
      <div class="row justify-content-center">
        <!-- Profile Card -->
        <div class="col-lg-6 col-md-8 col-sm-10">
          <div class="card shadow-lg">
            <div class="card-header bg-primary text-white text-center">
              <h4>User Profile</h4>
            </div>
            <div class="card-body">
              <div class="text-center mb-4">
                <img
                  :src="user.avatar"
                  alt="Profile Picture"
                  class="rounded-circle img-thumbnail"
                  style="width: 150px; height: 150px"
                />
              </div>
              <!-- Profile Information -->
              <div v-if="!isEditMode">
                <ul class="list-group">
                  <li class="list-group-item"><strong>Name:</strong> {{ user.name }}</li>
                  <li class="list-group-item"><strong>Email:</strong> {{ user.email }}</li>
                  <li class="list-group-item"><strong>Bio:</strong> {{ user.bio }}</li>
                </ul>
                <div class="text-center mt-4">
                  <button class="btn btn-warning" @click="toggleEditMode">Edit Profile</button>
                </div>
              </div>
              <!-- Editable Fields -->
              <form v-else @submit.prevent="saveProfile">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" id="name" v-model="user.name" class="form-control" required />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="user.email"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="bio" class="form-label">Bio</label>
                  <textarea id="bio" v-model="user.bio" class="form-control" rows="3"></textarea>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-success me-2">Save Changes</button>
                  <button type="button" class="btn btn-secondary" @click="cancelEdit">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from './systems/Header.vue'
import defaultAvatar from '@/assets/chipi.jpeg' // Import the local image

export default {
  name: 'ProfilePage',
  components: { Header },
  setup() {
    const user = ref({
      name: 'Chipi Cat',
      email: 'chipi@example.com',
      bio: 'A passionate developer with a love for creating elegant solutions.',
      avatar: defaultAvatar, // Placeholder image
    })

    const isEditMode = ref(false)
    const originalUser = ref({ ...user.value })

    const toggleEditMode = () => {
      isEditMode.value = true
    }

    const saveProfile = () => {
      originalUser.value = { ...user.value } // Save the changes
      isEditMode.value = false
      alert('Profile updated successfully!')
    }

    const cancelEdit = () => {
      user.value = { ...originalUser.value } // Revert to original
      isEditMode.value = false
    }

    return {
      user,
      isEditMode,
      toggleEditMode,
      saveProfile,
      cancelEdit,
    }
  },
}
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(120deg, #ff6700, #000000); /* Black to orange gradient */
  color: #fff;
  font-family: 'Roboto', sans-serif;
}

.card {
  border-radius: 15px;
}

.card-header {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.card-body {
  padding: 2rem;
}

img.rounded-circle {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem;
  }

  button {
    font-size: 0.9rem;
  }
}
</style>
