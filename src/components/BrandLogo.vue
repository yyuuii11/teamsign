<script setup>
defineProps({
  size: { type: Number, default: 36 },
})
</script>

<template>
  <span class="brand">
    <svg
      class="brand__mark"
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ts-logo-gradient" x1="4" y1="4" x2="44" y2="44">
          <stop offset="0" stop-color="#4f46e5" />
          <stop offset="1" stop-color="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#ts-logo-gradient)" />
      <!-- 协作轨迹：路线 + 节点 + 终点旗帜 -->
      <path
        d="M11 33c3.5-6.5 7.5 2.5 12-5s7.5 2.5 11-4"
        stroke="#fff"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-dasharray="0.5 5.4"
        fill="none"
        opacity="0.9"
      />
      <circle cx="11" cy="33" r="2.6" fill="#fff" />
      <circle cx="23" cy="28" r="2.6" fill="#fff" opacity="0.85" />
      <circle cx="34" cy="24" r="3" fill="#fff" />
      <path d="M34 24v-9.5" stroke="#fff" stroke-width="2" stroke-linecap="round" />
      <path d="M34 14.5h6.5L37 17.5l3.5 3H34z" fill="#fbbf24" />
    </svg>
    <span class="brand__name">组迹</span>
    <span class="brand__sub">TeamSign</span>
  </span>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  line-height: 1;
}

.brand__mark {
  flex-shrink: 0;
}

.brand__name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--ink-900);
}

.brand__sub {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-300);
  padding-top: 4px;
}
</style>
