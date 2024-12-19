<template>
  <div class="pomodoro-timer">
    <!-- Header -->
    <Header title="Pomodoro Timer" class="sticky-top bg-dark text-white" />

    <!-- Main Content -->
    <div class="container d-flex flex-column align-items-center justify-content-center py-5">
      <div class="timer-section text-center">
        <h2 class="mb-4 text-orange">{{ currentPhase }}</h2>
        <div class="timer-display bg-dark text-orange rounded p-3 mb-4">
          <span class="display-1">{{ minutes }}</span
          >:<span class="display-1">{{ seconds }}</span>
        </div>
        <div class="timer-controls">
          <button class="btn btn-orange mx-2" @click="startTimer" v-if="!isRunning">Start</button>
          <button class="btn btn-orange-outline mx-2" @click="pauseTimer" v-if="isRunning">
            Pause
          </button>
          <button class="btn btn-black mx-2" @click="resetTimer">Reset</button>
        </div>
      </div>

      <div class="session-tracker mt-4">
        <h3>
          Completed Sessions: <span class="text-orange">{{ completedSessions }}</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Header from './systems/Header.vue'

export default {
  name: 'PomodoroTimer',
  components: { Header },
  setup() {
    const workDuration = 25 * 60 // 25 minutes in seconds
    const breakDuration = 5 * 60 // 5 minutes in seconds
    const timer = ref(workDuration)
    const isRunning = ref(false)
    const isWorkPhase = ref(true)
    const completedSessions = ref(0)

    const intervalId = ref(null)

    const startTimer = () => {
      if (!intervalId.value) {
        isRunning.value = true
        intervalId.value = setInterval(() => {
          if (timer.value > 0) {
            timer.value--
          } else {
            switchPhase()
          }
        }, 1000)
      }
    }

    const pauseTimer = () => {
      clearInterval(intervalId.value)
      intervalId.value = null
      isRunning.value = false
    }

    const resetTimer = () => {
      pauseTimer()
      timer.value = isWorkPhase.value ? workDuration : breakDuration
    }

    const switchPhase = () => {
      isWorkPhase.value = !isWorkPhase.value
      timer.value = isWorkPhase.value ? workDuration : breakDuration
      if (!isWorkPhase.value) completedSessions.value++
    }

    const minutes = computed(() =>
      Math.floor(timer.value / 60)
        .toString()
        .padStart(2, '0'),
    )
    const seconds = computed(() => (timer.value % 60).toString().padStart(2, '0'))
    const currentPhase = computed(() => (isWorkPhase.value ? 'Work Phase' : 'Break Phase'))

    return {
      timer,
      isRunning,
      completedSessions,
      minutes,
      seconds,
      currentPhase,
      startTimer,
      pauseTimer,
      resetTimer,
    }
  },
}
</script>

<style scoped>
/* Root Container */
.pomodoro-timer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(120deg, #ff6700, #000000); /* Orange to Black Gradient */
  color: #fff;
  font-family: 'Roboto', sans-serif;
}

/* Timer Section */
.timer-section h2 {
  color: #ff6700; /* Highlight text with orange */
}

.timer-display {
  font-size: 4rem;
  font-weight: bold;
  margin: 20px 0;
}

/* Buttons */
.timer-controls button {
  transition: background-color 0.3s;
}

.btn-orange {
  background-color: #ff6700;
  color: #fff;
  border: none;
}

.btn-orange:hover {
  background-color: #e55b00;
}

.btn-orange-outline {
  background-color: transparent;
  border: 2px solid #ff6700;
  color: #ff6700;
}

.btn-orange-outline:hover {
  background-color: #ff6700;
  color: #fff;
}

.btn-black {
  background-color: #000;
  color: #fff;
  border: none;
}

.btn-black:hover {
  background-color: #333;
}

/* Session Tracker */
.session-tracker .text-orange {
  color: #ff6700;
}

/* Responsive Design */
@media (max-width: 768px) {
  .timer-display {
    font-size: 3rem;
  }

  .timer-controls button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>
