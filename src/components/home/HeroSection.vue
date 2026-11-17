<script setup>
defineEmits(['open-roadmap'])
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__glow hero__glow--one" aria-hidden="true"></div>
    <div class="hero__glow hero__glow--two" aria-hidden="true"></div>

    <div class="container hero__inner">
      <!-- 左侧：品牌与主文案 -->
      <div class="hero__copy">
        <span class="hero__badge">
          <i class="hero__badge-dot" aria-hidden="true"></i>
          V0.1 · 开发中
        </span>

        <h1 class="hero__title">
          让小组合作，<br />
          每一步<span class="hero__title-mark">都有迹可循</span>。
        </h1>

        <p class="hero__desc">
          组迹是面向大学生课程小组与竞赛团队的协作管理工具，围绕任务分工、进度追踪、风险预警与贡献留痕四个环节，
          让每一次协作都被清晰记录，告别「分工不清、进度拖延、贡献难说」。
        </p>

        <div class="hero__actions">
          <el-button type="primary" size="large" round @click="$emit('open-roadmap')">
            查看功能规划
          </el-button>
          <el-button size="large" round tag="a" href="#features" class="hero__ghost-btn">
            了解核心功能
          </el-button>
        </div>

        <ul class="hero__meta">
          <li>大学生小组协作</li>
          <li>进度风险预警</li>
          <li>团队贡献留痕</li>
        </ul>
      </div>

      <!-- 右侧：看板预览示意 -->
      <div class="hero__visual" aria-hidden="true">
        <div class="board card">
          <div class="board__head">
            <div>
              <p class="board__title">数据库课程设计 · 第 5 组</p>
              <p class="board__sub">当前迭代 · 12 项任务</p>
            </div>
            <span class="board__progress-num">68%</span>
          </div>

          <div class="board__progress">
            <span class="board__progress-bar" style="width: 68%"></span>
          </div>

          <div class="board__columns">
            <div class="board__col">
              <p class="board__col-title board__col-title--todo">待办 · 2</p>
              <div class="board__task">
                <span class="board__task-name">设计 E-R 图</span>
                <span class="board__task-meta"><i class="ava ava--a"></i>周五截止</span>
              </div>
              <div class="board__task">
                <span class="board__task-name">收集参考文献</span>
                <span class="board__task-meta"><i class="ava ava--b"></i>下周三</span>
              </div>
            </div>

            <div class="board__col">
              <p class="board__col-title board__col-title--doing">进行中 · 3</p>
              <div class="board__task">
                <span class="board__task-name">需求分析文档</span>
                <span class="board__task-meta board__task-meta--warn"><i class="ava ava--c"></i>临期 2 天</span>
              </div>
              <div class="board__task">
                <span class="board__task-name">原型页面绘制</span>
                <span class="board__task-meta"><i class="ava ava--a"></i>进行中</span>
              </div>
            </div>

            <div class="board__col">
              <p class="board__col-title board__col-title--done">已完成 · 7</p>
              <div class="board__task board__task--done">
                <span class="board__task-name">选题与开题报告</span>
                <span class="board__task-meta">✓ 已验收</span>
              </div>
              <div class="board__task board__task--done">
                <span class="board__task-name">小组分工确认</span>
                <span class="board__task-meta">✓ 已验收</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 浮动风险提醒 -->
        <div class="float float--risk">
          <span class="float__icon">⚠</span>
          <div>
            <p class="float__title">风险提醒</p>
            <p class="float__desc">「需求分析文档」还有 2 天截止</p>
          </div>
        </div>

        <!-- 浮动贡献统计 -->
        <div class="float float--contrib">
          <span class="float__icon">✦</span>
          <div>
            <p class="float__title">本周贡献</p>
            <p class="float__desc">4 名成员 · 17 次任务更新</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: calc(var(--header-height) + 72px) 0 104px;
  overflow: hidden;
  background:
    radial-gradient(1000px 520px at 85% -10%, rgba(124, 58, 237, 0.1), transparent 60%),
    radial-gradient(900px 480px at -10% 20%, rgba(79, 70, 229, 0.09), transparent 60%),
    var(--bg-page);
}

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}

.hero__glow--one {
  width: 420px;
  height: 420px;
  top: -160px;
  right: -80px;
  background: rgba(124, 58, 237, 0.16);
}

.hero__glow--two {
  width: 360px;
  height: 360px;
  bottom: -180px;
  left: -100px;
  background: rgba(59, 130, 246, 0.12);
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 56px;
}

/* ---- 左侧文案 ---- */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #92400e;
  background: #fef3c7;
  border: 1px solid rgba(245, 158, 11, 0.35);
  border-radius: var(--radius-pill);
  padding: 6px 16px;
  margin-bottom: 22px;
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-warning);
  animation: pulse 1.8s ease-out infinite;
}

@keyframes pulse {
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

.hero__title {
  font-size: 46px;
  font-weight: 800;
  line-height: 1.28;
  letter-spacing: 0.01em;
  margin-bottom: 20px;
}

.hero__title-mark {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__desc {
  font-size: 17px;
  color: var(--ink-500);
  max-width: 520px;
  margin-bottom: 32px;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.hero__ghost-btn {
  font-weight: 600;
}

.hero__meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero__meta li {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-700);
  background: var(--surface);
  border: 1px solid var(--border-base);
  border-radius: var(--radius-pill);
  padding: 6px 14px;
}

/* ---- 右侧看板预览 ---- */
.hero__visual {
  position: relative;
}

.board {
  padding: 24px;
  border-radius: var(--radius-lg);
}

.board__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.board__title {
  font-size: 16px;
  font-weight: 700;
}

.board__sub {
  font-size: 12px;
  color: var(--ink-300);
  margin-top: 2px;
}

.board__progress-num {
  font-size: 22px;
  font-weight: 800;
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.board__progress {
  height: 8px;
  border-radius: var(--radius-pill);
  background: #eef0f6;
  overflow: hidden;
  margin-bottom: 20px;
}

.board__progress-bar {
  display: block;
  height: 100%;
  border-radius: var(--radius-pill);
  background: var(--brand-gradient);
}

.board__columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.board__col {
  background: #f8f9fc;
  border-radius: var(--radius-md);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.board__col-title {
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 2px;
}

.board__col-title--todo {
  color: var(--ink-500);
}

.board__col-title--doing {
  color: var(--color-info);
}

.board__col-title--done {
  color: var(--color-success);
}

.board__task {
  background: var(--surface);
  border: 1px solid var(--border-base);
  border-radius: 10px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.board__task--done {
  opacity: 0.7;
}

.board__task-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-700);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.board__task-meta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--ink-300);
}

.board__task-meta--warn {
  color: var(--color-warning);
  font-weight: 600;
}

.ava {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
}

.ava--a {
  background: #6366f1;
}

.ava--b {
  background: #10b981;
}

.ava--c {
  background: #f59e0b;
}

/* ---- 浮动信息卡 ---- */
.float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--border-base);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-pop);
  padding: 10px 14px;
}

.float--risk {
  left: -28px;
  bottom: 52px;
  animation: floaty 4s ease-in-out infinite;
}

.float--contrib {
  right: -20px;
  top: 44px;
  animation: floaty 4.6s ease-in-out infinite reverse;
}

.float__icon {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 14px;
  flex-shrink: 0;
}

.float--risk .float__icon {
  background: #fef2f2;
  color: var(--color-danger);
}

.float--contrib .float__icon {
  background: rgba(79, 70, 229, 0.1);
  color: var(--brand-primary);
}

.float__title {
  font-size: 12px;
  font-weight: 700;
}

.float__desc {
  font-size: 11px;
  color: var(--ink-500);
  white-space: nowrap;
}

@keyframes floaty {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* ---- 响应式 ---- */
@media (max-width: 960px) {
  .hero {
    padding: calc(var(--header-height) + 48px) 0 72px;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero__title {
    font-size: 34px;
  }

  .hero__desc {
    font-size: 16px;
  }

  .hero__visual {
    max-width: 560px;
  }

  .float--risk {
    left: 8px;
    bottom: 36px;
  }

  .float--contrib {
    right: 8px;
    top: 28px;
  }
}

@media (max-width: 640px) {
  .hero__title {
    font-size: 28px;
  }

  .board__columns {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .float {
    padding: 8px 12px;
  }

  .float__desc {
    white-space: normal;
  }

  .float--contrib {
    top: -18px;
  }
}
</style>
