<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useStructuredData } from '@/composables/useStructuredData.js'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  description: {
    type: String, 
    default: null
  },
  structuredData: {
    type: Object,
    default: null
  },
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})

const route = useRoute()
const { t, locale } = useI18n()
const { injectStructuredData, getBreadcrumbSchema } = useStructuredData()

let structuredDataIds = []

const updateSEO = () => {
  // Update page title
  if (props.title) {
    document.title = `${props.title} | Kelepar GmbH - Swiss IT Solutions`
  }

  // Update meta description
  if (props.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', props.description)
    }
  }

  // Clear existing structured data
  structuredDataIds.forEach(id => {
    const element = document.getElementById(id)
    if (element) element.remove()
  })
  structuredDataIds = []

  // Add new structured data
  if (props.structuredData) {
    const id = injectStructuredData(props.structuredData)
    if (id) structuredDataIds.push(id)
  }

  // Add breadcrumb structured data
  if (props.breadcrumbs.length > 0) {
    const breadcrumbSchema = getBreadcrumbSchema(props.breadcrumbs)
    const id = injectStructuredData(breadcrumbSchema)
    if (id) structuredDataIds.push(id)
  }

  // Add language-specific hreflang tags
  updateHreflangTags()
}

const updateHreflangTags = () => {
  // Remove existing hreflang tags
  const existingHreflang = document.querySelectorAll('link[hreflang]')
  existingHreflang.forEach(link => link.remove())

  // Add new hreflang tags
  const currentPath = route.path
  const baseUrl = 'https://kelepar.com'
  
  // Add hreflang for German (default)
  const linkDE = document.createElement('link')
  linkDE.rel = 'alternate'
  linkDE.hreflang = 'de'
  linkDE.href = `${baseUrl}${currentPath}`
  document.head.appendChild(linkDE)

  // Add hreflang for English 
  const linkEN = document.createElement('link')
  linkEN.rel = 'alternate'
  linkEN.hreflang = 'en'
  linkEN.href = `${baseUrl}${currentPath}?lang=en`
  document.head.appendChild(linkEN)

  // Add x-default
  const linkDefault = document.createElement('link')
  linkDefault.rel = 'alternate'
  linkDefault.hreflang = 'x-default'
  linkDefault.href = `${baseUrl}${currentPath}`
  document.head.appendChild(linkDefault)
}

onMounted(() => {
  updateSEO()
})

onUnmounted(() => {
  // Clean up structured data when component unmounts
  structuredDataIds.forEach(id => {
    const element = document.getElementById(id)
    if (element) element.remove()
  })
})

// Watch for prop changes
watch([() => props.title, () => props.description, () => props.structuredData, () => props.breadcrumbs], updateSEO)

// Watch for route changes
watch(() => route.path, updateSEO)

// Watch for locale changes
watch(locale, updateSEO)
</script>

<template>
  <!-- This component doesn't render anything visible -->
</template>