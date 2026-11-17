/**
 * 首页静态内容（V0.1）
 * 后续接入动态数据时可替换为接口或 localStorage 读取
 */

/** 四项核心功能介绍卡片 */
export const features = [
  {
    key: 'project',
    title: '项目与成员管理',
    desc: '创建小组项目、添加成员，为每个任务设置负责人、截止日期与优先级，分工一目了然。',
    tag: '规划 V0.2',
    tone: 'indigo',
    icon: 'folder',
  },
  {
    key: 'board',
    title: '任务看板与进度汇总',
    desc: '在看板上更新「待办 / 进行中 / 已完成」状态，自动汇总项目整体完成进度。',
    tag: '规划 V0.3',
    tone: 'sky',
    icon: 'board',
  },
  {
    key: 'risk',
    title: '进度风险预警',
    desc: '根据任务状态与截止日期，自动识别临期、逾期任务，生成团队风险提醒清单。',
    tag: '规划 V0.4',
    tone: 'amber',
    icon: 'alert',
  },
  {
    key: 'report',
    title: '贡献留痕与报告',
    desc: '记录任务成果链接、提交时间与修改历史，一键生成成员贡献与项目进度报告。',
    tag: '规划 V0.5',
    tone: 'emerald',
    icon: 'chart',
  },
]

/** 产品特色 */
export const highlights = [
  {
    key: 'warning',
    title: '进度风险预警',
    desc: '临期、逾期任务自动进入风险提醒清单，按紧急程度分级提示，让小组不再因「忘了看」而拖慢整个项目。',
    points: ['按截止日期自动识别临期任务', '逾期任务置顶高亮提醒', '风险清单按紧急程度分级'],
    tone: 'warning',
  },
  {
    key: 'trace',
    title: '团队贡献留痕',
    desc: '每一次任务流转、成果提交与修改都自动记录，汇报答辩时用数据说明每个人的真实投入。',
    points: ['成果链接与提交时间留痕', '任务修改历史完整记录', '成员贡献占比自动统计'],
    tone: 'primary',
  },
]

/** 功能规划（版本路线图） */
export const roadmap = [
  {
    version: 'V0.1',
    name: '首页与品牌展示',
    desc: '完成官网首页、品牌标识与整体视觉体系，搭建规范的前端工程结构。',
    status: 'current',
  },
  {
    version: 'V0.2',
    name: '项目与成员管理',
    desc: '创建小组项目、添加成员，为任务设置负责人、截止日期与优先级。',
    status: 'todo',
  },
  {
    version: 'V0.3',
    name: '任务看板与进度汇总',
    desc: '看板视图与任务状态流转，自动汇总项目整体完成进度。',
    status: 'todo',
  },
  {
    version: 'V0.4',
    name: '进度风险预警',
    desc: '识别临期、逾期任务，生成风险提醒清单。',
    status: 'todo',
  },
  {
    version: 'V0.5',
    name: '贡献留痕与报告',
    desc: '记录成果链接、提交时间与修改历史，生成成员贡献及项目进度报告。',
    status: 'todo',
  },
  {
    version: 'V1.0',
    name: '本地存储与上线部署',
    desc: '数据 localStorage 持久化、移动端体验优化，部署至阿里云 Nginx 提供公网访问。',
    status: 'todo',
  },
]
