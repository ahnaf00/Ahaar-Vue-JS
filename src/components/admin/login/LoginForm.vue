<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../../../stores/auth'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const emailError = ref('')
const passwordError = ref('')

function validateEmail() {
    if (!email.value) emailError.value = 'Email is required.'
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) emailError.value = 'Please enter a valid email address.'
    else emailError.value = ''
}

function validatePassword() {
    if (!password.value) passwordError.value = 'Password is required.'
    else if (password.value.length < 6) passwordError.value = 'Password must be at least 6 characters.'
    else passwordError.value = ''
}

async function handleLogin() {
    validateEmail()
    validatePassword()
    if (emailError.value || passwordError.value) return

    const success = await auth.login({ email: email.value, password: password.value })
    if (success) {
        const redirect = route.query.redirect || '/admin'
        router.push(redirect)
    }
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.25s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>

<template>
    <form class="space-y-5" novalidate @submit.prevent="handleLogin">

        <!-- Error alert -->
        <Transition name="slide-down">
            <div v-if="auth.loginError" role="alert"
                class="flex items-center gap-3 bg-rose-50 border border-rose-200 text-rose-700 text-sm px-4 py-3 rounded-2xl">
                <i class="fas fa-circle-exclamation shrink-0"></i>
                <span>{{ auth.loginError }}</span>
            </div>
        </Transition>

        <!-- Email -->
        <div class="space-y-1.5">
            <label for="email" class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Email Address</label>
            <div class="relative">
                <i
                    class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none"></i>
                <input id="email" v-model="email" type="email" autocomplete="email" placeholder="admin@ahaar.com"
                    required :class="['w-full pl-11 pr-4 py-3.5 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-4 transition-all',
                        emailError
                            ? 'border-rose-300 focus:ring-rose-100 focus:border-rose-400'
                            : 'border-cream-100 focus:ring-gold-400/10 focus:border-gold-400']"
                    @blur="validateEmail" />
            </div>
            <p v-if="emailError" class="text-rose-500 text-xs mt-1">{{ emailError }}</p>
        </div>

        <!-- Password -->
        <div class="space-y-1.5">
            <div class="flex items-center justify-between">
                <label for="password"
                    class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Password</label>
                <button type="button" class="text-xs text-gold-500 hover:text-gold-600 font-semibold transition-colors">
                    Forgot password?
                </button>
            </div>
            <div class="relative">
                <i
                    class="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none"></i>
                <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'"
                    autocomplete="current-password" placeholder="••••••••" required :class="['w-full pl-11 pr-12 py-3.5 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-4 transition-all',
                        passwordError
                            ? 'border-rose-300 focus:ring-rose-100 focus:border-rose-400'
                            : 'border-cream-100 focus:ring-gold-400/10 focus:border-gold-400']"
                    @blur="validatePassword" />
                <button type="button"
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-forest-800 transition-colors"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                    @click="showPassword = !showPassword">
                    <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" class="text-sm"></i>
                </button>
            </div>
            <p v-if="passwordError" class="text-rose-500 text-xs mt-1">{{ passwordError }}</p>
        </div>

        <!-- Remember me -->
        <div class="flex items-center gap-3">
            <button type="button" role="checkbox" :aria-checked="rememberMe"
                class="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0"
                :class="rememberMe ? 'bg-forest-800 border-forest-800 text-white' : 'border-cream-100 bg-white'"
                @click="rememberMe = !rememberMe">
                <i v-if="rememberMe" class="fas fa-check text-[10px]"></i>
            </button>
            <span class="text-sm text-gray-500 select-none cursor-pointer" @click="rememberMe = !rememberMe">
                Keep me signed in
            </span>
        </div>

        <!-- Submit -->
        <button type="submit" :disabled="auth.isLoading"
            class="w-full flex items-center justify-center gap-3 bg-forest-800 hover:bg-forest-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all text-sm">
            <span v-if="auth.isLoading"
                class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span>{{ auth.isLoading ? 'Signing in…' : 'Sign In to Dashboard' }}</span>
        </button>

        <!-- Demo hint -->
        <!-- <div class="rounded-2xl bg-cream-50 border border-cream-100 p-4 text-xs text-gray-400 space-y-1">
            <p class="font-semibold text-gray-500">Demo credentials</p>
            <p>Email: <span class="font-mono text-forest-800 select-all">admin@ahaar.com</span></p>
            <p>Password: <span class="font-mono text-forest-800 select-all">ahaar2026</span></p>
        </div> -->
    </form>
</template>