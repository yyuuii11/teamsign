<script setup>
import BrandLogo from '../BrandLogo.vue'

defineEmits(['open-roadmap'])

const navLinks = [
  { label: '核心功能', href: '#features' },
  { label: '产品特色', href: '#highlights' },
  { label: '开发计划', href: '#roadmap' },
]
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a class="header__logo" href="#top" aria-label="组迹首页">
        <BrandLogo :size="34" />
      </a>

      <nav class="header__nav" aria-label="页面导航">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="header__link">
          {{ link.label }}
        </a>
      </nav>

      <div class="header__actions">
        <el-button
          class="header__cta"
          type="primary"
          round
          @click="$emit('open-roadmap')"
        >
          查看功能规划
        </el-button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-base);
}

.header__inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.header__link {
  font-size: 15px;
  font-weight: 500;
  color: var(--ink-700);
  transition: color 0.2s ease;
}

.header__link:hover {
  color: var(--brand-primary);
}

.header__cta {
  font-weight: 600;
}

@media (max-width: 768px) {
  .header__nav {
    display: none;
  }
}
</style>
