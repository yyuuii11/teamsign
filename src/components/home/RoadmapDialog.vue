<script setup>
import { roadmap } from '../../data/homeContent.js'

const visible = defineModel({ type: Boolean, default: false })
</script>

<template>
  <el-dialog
    v-model="visible"
    title="产品功能规划"
    width="560px"
    class="roadmap-dialog"
    append-to-body
  >
    <p class="roadmap-intro">
      组迹将按以下版本路线逐步交付，每个版本聚焦一组核心能力，最终形成完整的小组协作与进度预警工具。
    </p>

    <el-timeline class="roadmap-timeline">
      <el-timeline-item
        v-for="item in roadmap"
        :key="item.version"
        :type="item.status === 'current' ? 'primary' : undefined"
        :hollow="item.status !== 'current'"
        :timestamp="item.version"
        placement="top"
      >
        <div class="roadmap-item" :class="{ 'roadmap-item--current': item.status === 'current' }">
          <div class="roadmap-item__head">
            <h4>{{ item.name }}</h4>
            <span v-if="item.status === 'current'" class="roadmap-item__tag">当前版本 · 开发中</span>
            <span v-else class="roadmap-item__tag roadmap-item__tag--plan">规划中</span>
          </div>
          <p>{{ item.desc }}</p>
        </div>
      </el-timeline-item>
    </el-timeline>
  </el-dialog>
</template>

<style scoped>
.roadmap-intro {
  font-size: 14px;
  color: var(--ink-500);
  background: #f8f9fc;
  border-radius: var(--radius-md);
  padding: 12px 16px;
  margin-bottom: 20px;
}

.roadmap-timeline {
  padding-left: 4px;
}

.roadmap-item {
  padding-bottom: 4px;
}

.roadmap-item__head {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.roadmap-item__head h4 {
  font-size: 15px;
  font-weight: 700;
  color: var(--ink-900);
}

.roadmap-item__tag {
  font-size: 12px;
  font-weight: 600;
  color: var(--brand-primary);
  background: rgba(79, 70, 229, 0.08);
  border-radius: var(--radius-pill);
  padding: 2px 10px;
}

.roadmap-item__tag--plan {
  color: var(--ink-300);
  background: #f2f3f7;
}

.roadmap-item p {
  font-size: 13px;
  color: var(--ink-500);
}

.roadmap-item--current {
  background: rgba(79, 70, 229, 0.05);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  margin-left: -14px;
}
</style>

<style>
/* 弹窗全局样式（append-to-body 需要非 scoped） */
.roadmap-dialog {
  border-radius: var(--radius-lg) !important;
}

.roadmap-dialog .el-dialog__header {
  padding-bottom: 8px;
}

@media (max-width: 640px) {
  .roadmap-dialog {
    width: 92% !important;
  }
}
</style>
