import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const adminUser = ref(null);
  const loginError = ref("");
  const isLoading = ref(false);

  const isAuthenticated = computed(() => !!adminUser.value);

  // mock credentials
  const MOCK_EMAIL = "ahnaf@gmail.com";
  const MOCK_PASSWORD = "123456";

  async function login({ email, password }) {
    isLoading.value = true;
    loginError.value = "";
    await new Promise((r) => setTimeout(r, 900));

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      adminUser.value = { name: "Admin", email, role: "superadmin" };
      isLoading.value = false;
      return true;
    }

    loginError.value = "Invalid email or password";
    isLoading.value = false;
    return false;
  }

  function logout() {
    adminUser.value = null;
    loginError.value = "";
  }

  return { adminUser, loginError, isLoading, isAuthenticated, login, logout };
});
