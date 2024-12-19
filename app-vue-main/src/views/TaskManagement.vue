<template>
  <div class="task-management">
    <!-- Header -->
    <Header title="Task Management" />

    <!-- Add Task Modal -->
    <div
      class="modal fade"
      id="addTaskModal"
      tabindex="-1"
      aria-labelledby="addTaskModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-light text-dark">
          <div class="modal-header">
            <h5 class="modal-title" id="addTaskModalLabel">Add New Task</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addTask">
              <div class="mb-3">
                <label for="task_name" class="form-label">Task Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="task_name"
                  v-model="newTask.task_name"
                  placeholder="Enter task name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  v-model="newTask.description"
                  placeholder="Enter task description"
                  required
                ></textarea>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="priority_level" class="form-label">Priority Level</label>
                  <select
                    class="form-select"
                    id="priority_level"
                    v-model="newTask.priority_level"
                    required
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="report_type" class="form-label">Report Type</label>
                  <select
                    class="form-select"
                    id="report_type"
                    v-model="newTask.report_type"
                    required
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <!-- Automatically closes modal on submit -->
              <button type="submit" class="btn btn-orange w-100" data-bs-dismiss="modal">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="container py-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-3">
          <div>
            <label for="filterStatus" class="form-label">Filter by Status</label>
            <select class="form-select" id="filterStatus" v-model="filterStatus">
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label for="filterPriority" class="form-label">Filter by Priority</label>
            <select class="form-select" id="filterPriority" v-model="filterPriority">
              <option value="">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <button
          class="btn btn-orange text-end mt-4"
          data-bs-toggle="modal"
          data-bs-target="#addTaskModal"
        >
          + Add Task
        </button>
      </div>

      <!-- Task Table -->
      <div class="table-responsive mt-3">
        <table class="table table-striped table-light table-bordered">
          <thead class="bg-orange text-black">
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Report Type</th>
              <th>Completion Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in filteredTasks" :key="task.id">
              <td>{{ task.task_name }}</td>
              <td>{{ task.description }}</td>
              <td>{{ task.priority_level }}</td>
              <td>{{ task.status }}</td>
              <td>{{ task.report_type }}</td>
              <td>{{ task.completion_date || 'N/A' }}</td>
              <td>
                <button
                  v-if="task.status === 'Pending'"
                  @click="changeStatus(task, 'In Progress')"
                  class="btn btn-warning btn-sm"
                >
                  Start
                </button>
                <button
                  v-if="task.status === 'In Progress'"
                  @click="changeStatus(task, 'Completed')"
                  class="btn btn-success btn-sm"
                >
                  Complete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/systems/Header.vue'

export default {
  name: 'TaskManagement',
  components: {
    Header,
  },
  data() {
    return {
      newTask: {
        task_name: '',
        description: '',
        priority_level: 'Low',
        status: 'Pending',
        completion_date: null,
        report_type: 'Daily',
      },
      tasks: [],
      filterStatus: '',
      filterPriority: '',
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((task) => {
        const matchesStatus = this.filterStatus ? task.status === this.filterStatus : true
        const matchesPriority = this.filterPriority
          ? task.priority_level === this.filterPriority
          : true
        return matchesStatus && matchesPriority
      })
    },
  },
  methods: {
    addTask() {
      const newTask = { ...this.newTask, id: Date.now() }
      this.tasks.push(newTask)
      this.resetForm()
    },
    resetForm() {
      this.newTask = {
        task_name: '',
        description: '',
        priority_level: 'Low',
        status: 'Pending',
        completion_date: null,
        report_type: 'Daily',
      }
    },
    changeStatus(task, newStatus) {
      task.status = newStatus
      if (newStatus === 'Completed') {
        task.completion_date = new Date().toISOString().split('T')[0]
      }
    },
  },
}
</script>

<style scoped>
.task-management {
  background: linear-gradient(120deg, #ff6700, #000000);
  color: #fff;
  min-height: 100vh;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff6700;
}

.bg-orange {
  background-color: #ff6700;
}

.btn-orange {
  background-color: #ff6700;
  color: #fff;
}

.btn-orange:hover {
  background-color: #e55b00;
}
</style>
