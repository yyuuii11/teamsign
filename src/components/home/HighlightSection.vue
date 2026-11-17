<script setup>
import { highlights } from '../../data/homeContent.js'
</script>

<template>
  <section id="highlights" class="section section--alt">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">产品特色</span>
        <h2 class="section-title">两大特色，让协作既高效又可证明</h2>
        <p class="section-desc">
          组迹不只帮小组把任务推进，更把过程中的每一步变成可回溯、可展示的证据。
        </p>
      </div>

      <div class="hl-grid">
        <article
          v-for="item in highlights"
          :key="item.key"
          class="hl-card card"
          :class="`hl-card--${item.tone}`"
        >
          <div class="hl-card__body">
            <span class="hl-card__badge">
              {{ item.tone === 'warning' ? '预警' : '留痕' }}
            </span>
            <h3 class="hl-card__title">{{ item.title }}</h3>
            <p class="hl-card__desc">{{ item.desc }}</p>
            <ul class="hl-card__points">
              <li v-for="point in item.points" :key="point">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12.5 10 17.5 19 6.5"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- 特色示意小图 -->
          <div class="hl-card__demo" aria-hidden="true">
            <!-- 风险预警清单示意 -->
            <template v-if="item.tone === 'warning'">
              <div class="demo demo--risk">
                <p class="demo__head">本周风险清单</p>
                <div class="demo__row demo__row--overdue">
                  <span>数据库连接池设计</span>
                  <em>已逾期 1 天</em>
                </div>
                <div class="demo__row demo__row--near">
                  <span>需求分析文档</span>
                  <em>临期 2 天</em>
                </div>
                <div class="demo__row demo__row--near">
                  <span>原型页面评审</span>
                  <em>临期 4 天</em>
                </div>
              </div>
            </template>

            <!-- 贡献留痕示意 -->
            <template v-else>
              <div class="demo demo--trace">
                <p class="demo__head">成员贡献占比</p>
                <div v-for="(w, i) in [82, 64, 47, 31]" :key="i" class="demo__bar">
                  <span class="demo__bar-name">成员 {{ i + 1 }}</span>
                  <span class="demo__bar-track">
                    <span class="demo__bar-fill" :style="{ width: w + '%' }"></span>
                  </span>
                  <span class="demo__bar-num">{{ w }}%</span>
                </div>
              </div>
            </template>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hl-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.hl-card {
  display: flex;
  align-items: stretch;
  gap: 20px;
  padding: 32px 28px;
  border-radius: var(--radius-lg);
}

.hl-card--warning {
  border-top: 3px solid var(--color-warning);
}

.hl-card--primary {
  border-top: 3px solid var(--brand-primary);
}

.hl-card__body {
  flex: 1;
  min-width: 0;
}

.hl-card__badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  border-radius: var(--radius-sm);
  padding: 4px 10px;
  margin-bottom: 14px;
}

.hl-card--warning .hl-card__badge {
  color: #b45309;
  background: #fef3c7;
}

.hl-card--primary .hl-card__badge {
  color: var(--brand-primary);
  background: rgba(79, 70, 229, 0.1);
}

.hl-card__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.hl-card__desc {
  font-size: 14px;
  color: var(--ink-500);
  margin-bottom: 18px;
}

.hl-card__points {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hl-card__points li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--ink-700);
  font-weight: 500;
}

.hl-card--warning .hl-card__points svg {
  color: var(--color-warning);
}

.hl-card--primary .hl-card__points svg {
  color: var(--brand-primary);
}

/* ---- 示意小图 ---- */
.hl-card__demo {
  width: 220px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.demo {
  width: 100%;
  background: #f8f9fc;
  border: 1px solid var(--border-base);
  border-radius: var(--radius-md);
  padding: 14px;
}

.demo__head {
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-500);
  margin-bottom: 10px;
}

.demo__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  border: 1px solid var(--border-base);
  border-radius: 8px;
  padding: 7px 10px;
  margin-bottom: 8px;
  font-size: 12px;
  color: var(--ink-700);
  font-weight: 600;
}

.demo__row em {
  font-style: normal;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: var(--radius-pill);
}

.demo__row--overdue em {
  color: #b91c1c;
  background: #fee2e2;
}

.demo__row--near em {
  color: #b45309;
  background: #fef3c7;
}

.demo__bar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.demo__bar:last-child {
  margin-bottom: 0;
}

.demo__bar-name {
  font-size: 11px;
  color: var(--ink-500);
  width: 44px;
  flex-shrink: 0;
}

.demo__bar-track {
  flex: 1;
  height: 8px;
  background: #eceef5;
  border-radius: var(--radius-pill);
  overflow: hidden;
}

.demo__bar-fill {
  display: block;
  height: 100%;
  border-radius: var(--radius-pill);
  background: var(--brand-gradient);
}

.demo__bar-num {
  font-size: 11px;
  font-weight: 700;
  color: var(--brand-primary);
  width: 32px;
  text-align: right;
}

/* ---- 响应式 ---- */
@media (max-width: 960px) {
  .hl-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hl-card {
    flex-direction: column;
    padding: 26px 22px;
  }

  .hl-card__demo {
    width: 100%;
  }
}
</style>
