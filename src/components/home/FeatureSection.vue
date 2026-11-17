<script setup>
import { features } from '../../data/homeContent.js'

const icons = {
  folder:
    'M4 8a2 2 0 0 1 2-2h4l2.4 2.4H22a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z m8 5h8 m-8 4h8',
  board: 'M4 4h5v16H4z M10.5 4h5v10h-5z M17 4h5v13h-5z',
  alert:
    'M12 4 21 20H3L12 4z M12 10.5v4.5 M12 17.6v0.4',
  chart: 'M4 20V10 M10 20V4 M16 20v-8 M22 20H2',
}

const tones = {
  indigo: { bg: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5' },
  sky: { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' },
  amber: { bg: 'rgba(245, 158, 11, 0.12)', color: '#d97706' },
  emerald: { bg: 'rgba(16, 185, 129, 0.12)', color: '#059669' },
}
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">核心功能</span>
        <h2 class="section-title">四项核心功能，覆盖小组协作全流程</h2>
        <p class="section-desc">
          从任务分工到进度汇报，组迹将小组协作中的关键动作沉淀为可追溯的数据资产。
        </p>
      </div>

      <div class="feature-grid">
        <article
          v-for="item in features"
          :key="item.key"
          class="feature-card card"
        >
          <div
            class="feature-card__icon"
            :style="{ background: tones[item.tone].bg, color: tones[item.tone].color }"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                :d="icons[item.icon]"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h3 class="feature-card__title">{{ item.title }}</h3>
          <p class="feature-card__desc">{{ item.desc }}</p>

          <span class="feature-card__tag">{{ item.tag }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature-card {
  position: relative;
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.feature-card__icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
}

.feature-card__title {
  font-size: 17px;
  font-weight: 700;
}

.feature-card__desc {
  font-size: 14px;
  color: var(--ink-500);
  flex: 1;
}

.feature-card__tag {
  align-self: flex-start;
  font-size: 12px;
  font-weight: 600;
  color: var(--brand-primary);
  background: rgba(79, 70, 229, 0.08);
  border-radius: var(--radius-pill);
  padding: 4px 12px;
}

@media (max-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
