import { ref } from 'vue'

const sidebar = ref(false)

function openSidebar() {
  sidebar.value = true
}

function closeSidebar() {
  sidebar.value = false
}

function getSidebar() {
  return sidebar
}

export default { openSidebar, closeSidebar, getSidebar }