<script setup>
import { roadmap } from '../../data/homeContent.js'
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <p class="footer__name">组迹 · TeamSign</p>
        <p class="footer__desc">面向大学生课程小组与竞赛团队的协作与进度预警工具。</p>
      </div>

      <nav class="footer__nav" aria-label="页脚导航">
        <a href="#features">核心功能</a>
        <a href="#highlights">产品特色</a>
        <a href="#roadmap">开发计划</a>
      </nav>
    </div>

    <div class="container footer__bottom">
      <span>© {{ new Date().getFullYear() }} 组迹 TeamSign · Web 前端课程期末项目</span>
      <span class="footer__version">
        <i></i>
        V0.1 · 开发中 · {{ roadmap.length }} 个版本规划中
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #14161f;
  color: rgba(255, 255, 255, 0.72);
  padding: 56px 0 28px;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding-bottom: 36px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__name {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.footer__desc {
  font-size: 14px;
  max-width: 380px;
}

.footer__nav {
  display: flex;
  gap: 28px;
  flex-shrink: 0;
}

.footer__nav a {
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer__nav a:hover {
  color: #fff;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 24px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}

.footer__version {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.footer__version i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-warning);
  animation: footer-pulse 1.8s ease-out infinite;
}

@keyframes footer-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.45);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(245, 158, 11, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
  }
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
  }

  .footer__nav {
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
