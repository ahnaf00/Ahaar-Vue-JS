<script setup>
import { ref, computed } from 'vue'
import GalleryHero from '../../components/gallery/GalleryHero.vue'
import GalleryTabs from '../../components/gallery/GalleryTabs.vue'
import GalleryGrid from '../../components/gallery/GalleryGrid.vue'
import GalleryLightBox from '../../components/gallery/GalleryLightBox.vue'
import SocialFeedSection from '../../components/gallery/SocialFeedSection.vue'

const galleryCategories = [
    { id: "all", label: "All Photos" },
    { id: "culinary", label: "Culinary Art" },
    { id: "ambiance", label: "The Ambiance" },
    { id: "impact", label: "Impact Giving" },
];

const galleryItems = [
    {
        id: "gallery-1",
        title: "Heritage Kacchi",
        category: "culinary",
        image:
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
        alt: "Kacchi Biryani",
    },
    {
        id: "gallery-2",
        title: "Warm Ambiance",
        category: "ambiance",
        image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        alt: "Restaurant Scene",
    },
    {
        id: "gallery-3",
        title: "Serving Hearts",
        category: "impact",
        image:
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
        alt: "Community Outing",
    },
    {
        id: "gallery-4",
        title: "Kitchen Soul",
        category: "culinary",
        image:
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
        alt: "Chef Cooking",
    },
    {
        id: "gallery-5",
        title: "Royal Flavors",
        category: "culinary",
        image:
            "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
        alt: "Butter Chicken",
    },
    {
        id: "gallery-6",
        title: "Prepared with Responsibility",
        category: "impact",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
        alt: "Packing meals",
    },
];


const activeCategory = ref('all')
const selectedItem = ref(null)

const filteredItems = computed(() => {
    if (activeCategory.value === 'all') return galleryItems
    return galleryItems.filter(item => item.category === activeCategory.value)
})

function openLightbox(item) {
    selectedItem.value = item
}
</script>

<template>
    <div>
        <GalleryHero />

        <GalleryTabs :categories="galleryCategories" v-model="activeCategory" />

        <GalleryGrid :items="filteredItems" @open="openLightbox" />

        <SocialFeedSection />

        <GalleryLightbox :item="selectedItem" @close="selectedItem = null" />
    </div>
</template>