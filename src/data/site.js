import {
  BadgeCheck,
  BarChart3,
  Blocks,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  HeartPulse,
  Layers3,
  LockKeyhole,
  MapPin,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  UtensilsCrossed,
  Wrench,
  Zap
} from 'lucide-react'

export const navItems = [
  { label: '首页', href: '/' },
  { label: '小程序开发', href: '/miniapp' },
  { label: '软件开发', href: '/software' },
  { label: '案例中心', href: '/case' },
  { label: '解决方案', href: '/solution' },
  { label: '技术实力', href: '/technology' },
  { label: '关于我们', href: '/about' }
]

export const contact = {
  phone: '193 3397 3918',
  tel: '19333973918',
  wechat: 'DYBSSG666',
  qr: '/images/wechat-qr.jpg'
}

export const stats = [
  { value: 300, suffix: '+', label: '项目交付' },
  { value: 100, suffix: '+', label: '合作企业' },
  { value: 98, suffix: '%', label: '客户满意度' },
  { value: 24, suffix: 'h', label: '响应机制' }
]

export const services = [
  { icon: Code2, title: '微信小程序定制', desc: '商城、预约、点餐、会员、企业工具与多端一体化开发。', href: '/miniapp' },
  { icon: Layers3, title: '企业软件开发', desc: 'CRM、ERP、OA、数据看板和业务中台系统研发。', href: '/software' },
  { icon: BrainCircuit, title: 'AI 应用落地', desc: '智能客服、知识库问答、业务自动化和报表分析。', href: '/software' },
  { icon: ShieldCheck, title: '运维与长期迭代', desc: '性能优化、安全加固、日志监控、版本发布和售后维护。', href: '/contact' }
]

export const solutions = [
  { id: 'commerce', title: '电商零售', icon: ShoppingBag, desc: '商品交易、会员积分、优惠券、分销裂变和经营看板。' },
  { id: 'education', title: '教育培训', icon: GraduationCap, desc: '课程售卖、预约报名、直播课堂、作业打卡和学员运营。' },
  { id: 'medical', title: '医疗健康', icon: HeartPulse, desc: '预约挂号、在线咨询、健康档案和服务评价。' },
  { id: 'food', title: '餐饮连锁', icon: UtensilsCrossed, desc: '扫码点餐、外卖、桌台管理、门店运营和会员储值。' },
  { id: 'enterprise', title: '企业服务', icon: Building2, desc: 'CRM、OA 审批、项目协同、权限管理和数据中台。' },
  { id: 'local', title: '本地生活', icon: MapPin, desc: '同城服务、上门预约、商家入驻和订单履约。' }
]

export const cases = [
  {
    slug: 'omni-mall',
    title: '全渠道会员商城小程序',
    category: '商城',
    industry: '电商零售',
    metric: 'GMV +236%',
    cycle: '32 天',
    coverGradient: 'from-blue-700 to-sky-400',
    cover: '商城增长中台',
    desc: '为零售品牌打造商城交易、会员运营、营销工具与数据后台，支持线上线下一体化增长。',
    background: '客户已有线下门店与私域流量，但缺少可持续运营的线上交易入口，会员数据分散在多个系统中。',
    analysis: ['统一商品、库存、会员与订单数据', '搭建私域营销活动配置能力', '打通微信支付与分销裂变路径'],
    architecture: ['微信小程序用户端', 'Node.js API 网关', '订单/会员/营销服务', 'MySQL + Redis 数据层', '运营管理后台'],
    results: ['上线 60 天 GMV 提升 236%', '会员复购率提升 42%', '营销活动配置时间缩短 70%'],
    resultData: ['GMV +236%', '复购 +42%', '配置 -70%'],
    quote: '这套系统不是展示页，是真正能承接交易和复购运营的增长工具。',
    stack: ['Next.js', '微信小程序', 'Node.js', 'MySQL', 'Redis', '微信支付'],
    features: ['商品交易', '会员积分', '优惠券', '分销裂变', '经营看板'],
    screens: ['商城首页', '商品详情', '会员中心', '订单后台']
  },
  {
    slug: 'edu-growth',
    title: '在线教育增长平台',
    category: '教育',
    industry: '教育培训',
    metric: '完课率 +31%',
    cycle: '45 天',
    coverGradient: 'from-indigo-700 to-blue-500',
    cover: '教育增长平台',
    desc: '面向培训机构搭建课程售卖、报名预约、直播课堂、作业打卡与学员运营系统。',
    background: '机构希望将线下咨询、课程交付和学员服务迁移到微信生态，并提升续费转化。',
    analysis: ['构建课程售卖与报名闭环', '设计学员学习进度与打卡体系', '沉淀咨询、试听、报名、续费数据'],
    architecture: ['小程序学习端', '课程服务', '直播/录播接入', '学员运营后台', '数据统计模块'],
    results: ['学员完课率提升 31%', '咨询到报名转化提升 27%', '人工排课工作量下降 55%'],
    resultData: ['完课 +31%', '转化 +27%', '排课 -55%'],
    quote: '未来码力把教学业务和运营数据一起设计进了系统，后续招生明显更顺。',
    stack: ['React', '微信小程序', 'Java', 'Spring Boot', 'MySQL', '腾讯云'],
    features: ['课程售卖', '报名预约', '直播课堂', '作业打卡', '学员运营'],
    screens: ['课程首页', '课程详情', '学习进度', '运营后台']
  },
  {
    slug: 'medical-service',
    title: '智慧医疗预约服务',
    category: '医疗',
    industry: '医疗健康',
    metric: '排队 -68%',
    cycle: '38 天',
    coverGradient: 'from-cyan-600 to-emerald-400',
    cover: '医疗服务平台',
    desc: '整合科室医生、预约挂号、报告查询、在线咨询和随访提醒，优化服务体验。',
    background: '医疗服务流程依赖电话与线下登记，高峰时段排队明显，用户无法实时查看服务进度。',
    analysis: ['优化预约挂号路径', '设计医生排班与服务状态', '沉淀评价与随访提醒机制'],
    architecture: ['小程序预约端', '医生排班服务', '预约订单服务', '消息通知服务', '服务管理后台'],
    results: ['线下排队时间减少 68%', '预约履约率提升 39%', '服务评价覆盖率提升 3.2 倍'],
    resultData: ['排队 -68%', '履约 +39%', '评价 3.2x'],
    quote: '上线后用户知道该去哪、什么时候到，前台沟通压力降低很多。',
    stack: ['Vue', '微信小程序', 'Node.js', 'PostgreSQL', 'Redis', '短信服务'],
    features: ['预约挂号', '医生排班', '报告查询', '随访提醒', '服务评价'],
    screens: ['科室列表', '医生主页', '预约确认', '服务后台']
  },
  {
    slug: 'enterprise-workbench',
    title: '企业数字化工作台',
    category: '企业服务',
    industry: '企业服务',
    metric: '审批 -42%',
    cycle: '60 天',
    coverGradient: 'from-slate-900 to-blue-600',
    cover: '企业工作台',
    desc: '将 CRM、OA 审批、项目协作和经营报表整合进统一工作台，提升组织协同效率。',
    background: '客户业务横跨销售、交付与售后，多个表格和聊天群承载流程，管理层缺少实时数据视图。',
    analysis: ['拆分销售、交付、售后三条主流程', '设计客户档案与审批权限模型', '建立经营指标自动汇总规则'],
    architecture: ['Web 工作台', '权限中心', 'CRM 服务', '审批流程引擎', '报表数据层'],
    results: ['审批周期缩短 42%', '客户跟进遗漏率下降 64%', '管理报表自动化率达到 85%'],
    resultData: ['审批 -42%', '遗漏 -64%', '报表 85%'],
    quote: '原来靠表格和群消息流转，现在关键业务能在一个工作台里闭环。',
    stack: ['Next.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
    features: ['CRM', 'OA 审批', '项目协同', '权限体系', '经营报表'],
    screens: ['工作台', '客户详情', '审批流程', '数据大屏']
  },
  {
    slug: 'booking-service',
    title: '高端预约服务小程序',
    category: '预约系统',
    industry: '本地生活',
    metric: '到店率 +46%',
    cycle: '28 天',
    coverGradient: 'from-sky-600 to-blue-500',
    cover: '预约服务系统',
    desc: '面向美容、家政、维修、场馆等预约型业务，搭建服务项目、时间段、人员排班与订单履约系统。',
    background: '客户长期依赖人工登记预约，时间冲突、爽约和客户提醒问题频繁，门店难以统计服务效率。',
    analysis: ['设计服务项目与人员排班模型', '建立时间段冲突检测规则', '配置预约提醒与到店核销流程'],
    architecture: ['小程序预约端', '排班服务', '订单履约服务', '通知提醒服务', '门店管理后台'],
    results: ['预约到店率提升 46%', '人工排班时间减少 62%', '客户爽约率下降 33%'],
    resultData: ['到店 +46%', '排班 -62%', '爽约 -33%'],
    quote: '预约变得可视化以后，门店接待节奏稳定很多，客户也更愿意提前下单。',
    stack: ['Next.js', '微信小程序', 'Node.js', 'PostgreSQL', 'Redis', '微信订阅消息'],
    features: ['服务预约', '人员排班', '时间冲突', '到店核销', '门店后台'],
    screens: ['服务列表', '时间预约', '技师主页', '预约后台']
  }
]

export const process = [
  { num: '01', title: '商业诊断', desc: '梳理业务目标、用户路径、功能优先级与预算边界。' },
  { num: '02', title: '体验设计', desc: '输出信息架构、原型、Figma 高保真 UI 与组件规范。' },
  { num: '03', title: '敏捷研发', desc: '前后端并行开发、每周同步进度、阶段性验收。' },
  { num: '04', title: '上线增长', desc: '发布部署、数据监控、运营迭代和长期维护。' }
]

export const techStack = [
  'Next.js', 'React', 'Vue', 'Node.js', 'Java', 'Spring Boot',
  'MySQL', 'PostgreSQL', 'Redis', 'Docker', '微信云开发', 'GSAP'
]

export const testimonials = [
  '方案很清晰，报价前就把业务流程拆透了，后续开发几乎没有大的返工。',
  'UI 质感比我们原来的外包团队高很多，上线后转化数据也更好看。',
  '后台不是摆设，订单、会员、运营数据都能真正拿来管理业务。'
]

export const softwareCapabilities = [
  { icon: Database, title: '业务中台', desc: '统一客户、订单、库存、财务和权限数据。' },
  { icon: BarChart3, title: '数据看板', desc: '实时展示经营指标、转化漏斗和团队效率。' },
  { icon: LockKeyhole, title: '权限安全', desc: '细粒度角色权限、审计日志和安全策略。' },
  { icon: Cloud, title: '云端部署', desc: '支持腾讯云、阿里云、Vercel、Docker 部署。' },
  { icon: Wrench, title: '系统集成', desc: '对接企业微信、支付、短信、ERP 和第三方 API。' },
  { icon: Rocket, title: '持续迭代', desc: '按业务阶段扩展功能，降低一次性建设风险。' }
]

export const miniappScreens = [
  { label: '商城首页', metric: '¥128,430', color: 'from-blue-700 to-sky-400' },
  { label: '课程中心', metric: '8,240人', color: 'from-indigo-700 to-blue-500' },
  { label: '医疗预约', metric: '92%', color: 'from-cyan-600 to-emerald-400' },
  { label: '企业工作台', metric: '1,280', color: 'from-slate-900 to-blue-600' },
  { label: '预约系统', metric: '+46%', color: 'from-sky-600 to-blue-500' }
]

export const technologyStrengths = [
  { title: '前端工程', desc: 'Next.js App Router、React Server Components、组件化设计系统与性能优化。', icon: Code2 },
  { title: '后端架构', desc: 'Node.js/Java 服务拆分、权限模型、队列缓存、审计日志与数据一致性。', icon: Database },
  { title: '云原生部署', desc: 'Docker、CI/CD、云服务器、对象存储、CDN、监控告警与弹性扩展。', icon: Cloud },
  { title: '安全合规', desc: '角色权限、接口鉴权、敏感数据脱敏、日志追踪与备份策略。', icon: LockKeyhole },
  { title: '体验设计', desc: 'Figma 高保真设计、可复用组件库、复杂业务流程交互设计。', icon: Blocks },
  { title: 'AI 集成', desc: '智能客服、知识库问答、数据分析助手与业务自动化工作流。', icon: BrainCircuit }
]
