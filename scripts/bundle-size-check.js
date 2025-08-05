#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, '../dist')
const assetsPath = path.join(distPath, 'assets')

// Bundle size limits (in KB) - excluding images
const LIMITS = {
  js: 500,        // JavaScript bundles (includes vendor libraries)
  css: 300,       // CSS bundles (includes Bootstrap)
  codeOnly: 800   // JavaScript + CSS only (excluding images and fonts)
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function checkBundleSize() {
  if (!fs.existsSync(distPath)) {
    console.error('❌ Build directory not found. Run "npm run build" first.')
    process.exit(1)
  }

  console.log('📦 Bundle Size Analysis\n')

  let totalSize = 0
  let jsSize = 0
  let cssSize = 0
  let codeSize = 0
  const files = []

  function analyzeDirectory(dir, prefix = '') {
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const itemPath = path.join(dir, item)
      const stat = fs.statSync(itemPath)
      
      if (stat.isDirectory()) {
        analyzeDirectory(itemPath, `${prefix}${item}/`)
      } else {
        const size = stat.size
        const sizeKB = Math.round(size / 1024 * 100) / 100
        const relativePath = `${prefix}${item}`
        
        files.push({ path: relativePath, size, sizeKB })
        totalSize += size
        
        if (item.endsWith('.js')) {
          jsSize += size
          codeSize += size
        } else if (item.endsWith('.css')) {
          cssSize += size
          codeSize += size
        }
      }
    }
  }

  if (fs.existsSync(assetsPath)) {
    analyzeDirectory(assetsPath)
  }

  // Sort files by size (largest first)
  files.sort((a, b) => b.size - a.size)

  // Display results
  console.log('📊 File Analysis:')
  files.forEach(file => {
    const icon = file.path.endsWith('.js') ? '📜' : 
                file.path.endsWith('.css') ? '🎨' : 
                file.path.match(/\.(png|jpg|jpeg|webp|svg)$/i) ? '🖼️' : '📄'
    console.log(`  ${icon} ${file.path}: ${formatBytes(file.size)}`)
  })

  console.log('\n📈 Bundle Summary:')
  console.log(`  Total: ${formatBytes(totalSize)} (${Math.round(totalSize / 1024)} KB)`)
  console.log(`  Code Only (JS + CSS): ${formatBytes(codeSize)} (${Math.round(codeSize / 1024)} KB)`)
  console.log(`  JavaScript: ${formatBytes(jsSize)} (${Math.round(jsSize / 1024)} KB)`)
  console.log(`  CSS: ${formatBytes(cssSize)} (${Math.round(cssSize / 1024)} KB)`)

  // Check limits
  const totalKB = Math.round(totalSize / 1024)
  const jsKB = Math.round(jsSize / 1024)
  const cssKB = Math.round(cssSize / 1024)
  const codeKB = Math.round(codeSize / 1024)

  console.log('\n🎯 Size Check:')
  
  let hasWarnings = false

  if (jsKB > LIMITS.js) {
    console.log(`  ⚠️  JavaScript bundles (${jsKB} KB) exceed limit (${LIMITS.js} KB)`)
    hasWarnings = true
  } else {
    console.log(`  ✅ JavaScript bundles (${jsKB} KB) within limit (${LIMITS.js} KB)`)
  }

  if (cssKB > LIMITS.css) {
    console.log(`  ⚠️  CSS bundles (${cssKB} KB) exceed limit (${LIMITS.css} KB)`)
    hasWarnings = true
  } else {
    console.log(`  ✅ CSS bundles (${cssKB} KB) within limit (${LIMITS.css} KB)`)
  }

  if (codeKB > LIMITS.codeOnly) {
    console.log(`  ⚠️  Code bundle size (${codeKB} KB) exceeds limit (${LIMITS.codeOnly} KB)`)
    hasWarnings = true
  } else {
    console.log(`  ✅ Code bundle size (${codeKB} KB) within limit (${LIMITS.codeOnly} KB)`)
  }

  // Generate recommendations
  if (hasWarnings) {
    console.log('\n💡 Optimization Suggestions:')
    
    if (jsKB > LIMITS.js) {
      console.log('  • Consider code splitting for large JavaScript bundles')
      console.log('  • Analyze dependencies with "npm run analyze"')
      console.log('  • Remove unused dependencies')
    }
    
    if (cssKB > LIMITS.css) {
      console.log('  • Remove unused CSS rules')
      console.log('  • Consider CSS tree-shaking')
    }
  }

  // Save results to file for CI/CD
  const results = {
    timestamp: new Date().toISOString(),
    total: { size: totalSize, kb: totalKB },
    code: { size: codeSize, kb: codeKB, limit: LIMITS.codeOnly, ok: codeKB <= LIMITS.codeOnly },
    js: { size: jsSize, kb: jsKB, limit: LIMITS.js, ok: jsKB <= LIMITS.js },
    css: { size: cssSize, kb: cssKB, limit: LIMITS.css, ok: cssKB <= LIMITS.css },
    files: files.map(f => ({ path: f.path, size: f.size, kb: f.sizeKB }))
  }

  fs.writeFileSync(
    path.join(__dirname, '../bundle-analysis.json'),
    JSON.stringify(results, null, 2)
  )

  console.log('\n📄 Detailed analysis saved to bundle-analysis.json')

  if (hasWarnings && process.argv.includes('--fail-on-warn')) {
    console.log('\n❌ Bundle size check failed')
    process.exit(1)
  }

  console.log('\n✅ Bundle size analysis complete')
}

checkBundleSize()