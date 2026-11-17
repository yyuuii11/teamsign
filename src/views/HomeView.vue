<script setup>
import { ref } from 'vue'
import SiteHeader from '../components/home/SiteHeader.vue'
import HeroSection from '../components/home/HeroSection.vue'
import FeatureSection from '../components/home/FeatureSection.vue'
import HighlightSection from '../components/home/HighlightSection.vue'
import RoadmapDialog from '../components/home/RoadmapDialog.vue'
import SiteFooter from '../components/home/SiteFooter.vue'

const roadmapVisible = ref(false)
</script>

<template>
  <SiteHeader @open-roadmap="roadmapVisible = true" />

  <main>
    <HeroSection @open-roadmap="roadmapVisible = true" />
    <FeatureSection />
    <HighlightSection />

    <!-- 功能规划引导区 -->
    <section id="roadmap" class="section">
      <div class="container">
        <div class="cta card">
          <div class="cta__text">
            <span class="cta__badge">
              <i class="cta__dot" aria-hidden="true"></i>
              V0.1 · 开发中
            </span>
            <h2 class="cta__title">功能规划持续迭代中</h2>
            <p class="cta__desc">
              从项目创建到贡献报告，组迹规划了 6 个版本逐步交付，点击查看完整的开发路线图。
            </p>
          </div>
          <el-button
            type="primary"
            size="large"
            round
            class="cta__btn"
            @click="roadmapVisible = true"
          >
            查看功能规划
          </el-button>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter />

  <RoadmapDialog v-model="roadmapVisible" />
</template>

<style scoped>
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 40px 48px;
  background:
    radial-gradient(520px 220px at 100% 0%, rgba(124, 58, 237, 0.08), transparent 65%),
    radial-gradient(520px 220px at 0% 100%, rgba(79, 70, 229, 0.08), transparent 65%),
    var(--surface);
}

.cta__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #92400e;
  background: #fef3c7;
  border-radius: var(--radius-pill);
  padding: 4px 14px;
  margin-bottom: 14px;
}

.cta__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-warning);
  animation: cta-pulse 1.8s ease-out infinite;
}

@keyframes cta-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.45);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(245, 158, 11, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
  }
}

.cta__title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.cta__desc {
  font-size: 15px;
  color: var(--ink-500);
  max-width: 520px;
}

.cta__btn {
  flex-shrink: 0;
  font-weight: 600;
}

@media (max-width: 768px) {
  .cta {
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 24px;
  }
}
</style>
