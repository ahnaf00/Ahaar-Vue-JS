<script setup>
import { onMounted, nextTick } from 'vue';
import HeroSection from '../../components/home/HeroSection.vue';
import HomeCTA from '../../components/home/HomeCTA.vue';
import SignatureDishes from '../../components/home/SignatureDishes.vue';
import Testimonials from '../../components/home/Testimonials.vue';
import WhyAhaar from '../../components/home/WhyAhaar.vue';

onMounted(() => {
    nextTick(() => {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Simple Fade-in Animation on Scroll
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });

        // Initial state for hero to be visible
        const heroDiv = document.querySelector('section.relative.min-h-\\[85vh\\] > div.relative.z-10');
        if (heroDiv) {
            heroDiv.style.opacity = '1';
        }
    });
});

</script>

<template>
    <HeroSection></HeroSection>
    <SignatureDishes></SignatureDishes>
    <WhyAhaar></WhyAhaar>
    <Testimonials></Testimonials>
    <HomeCTA></HomeCTA>
</template>

<style scoped>
.btn-primary { transition: all 0.3s ease; }
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 168, 67, 0.35);
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.animate-spin-slow { animation: spin-slow 12s linear infinite; }
.animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
.fade-up { animation: fadeInUp 0.8s ease-out forwards; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>