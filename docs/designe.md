这是个很有意思的方向！苹果风格的网页天然适合展示创意作品集——克制的美学、强烈的视觉冲击、流畅的交互体验，和 AIGC 影像作品的气质非常契合。以下是我的整体设计思路 👇

🎨 视觉风格定义
苹果风格的核心是**"少即是多"**——大留白、高对比、精准的字体层级。

配色方案：以 #000000 纯黑 + #FFFFFF 纯白为主调，点缀一个品牌色（建议用冷调渐变，如 #6E6AFF → #A78BFA，呼应 AI/科技感）
字体：中文用 PingFang SC，英文用 SF Pro Display（或 Google Fonts 的 Inter 替代），大标题 bold，正文 light
背景：主页用纯黑，内容区用深灰 #1C1C1E（苹果暗色系标准色），制造层次感
🏗️ 页面结构设计
整体分为 5 个核心模块，参考苹果产品页的叙事逻辑——先震撼，再讲故事，最后留联系。

1. Hero 区（全屏冲击）
全屏黑底，中央放一帧你最强的 AI 影像截图或动态 loop
叠加文字：姓名 + 一句话定位（例如："AI 影像叙事者 / 胡优"）
微动效：文字从下淡入，图像轻微 Ken Burns 效果
2. About 区（极简介绍）
仿照苹果"This is iPhone"的大字排版
一行核心身份：北邮 × 中传 | AIGC 影像 × 智能媒介叙事
小字补充学历背景 + 研究方向
3. Works 区（作品展示核心）
网格瀑布流布局，hover 时卡片轻微上浮 + 亮边框出现
分类 Tab 切换：AI短片 / ComfyUI实践 / AI设计 / 虚拟制作 / 自媒体
点击进入作品详情页，全屏沉浸式展示
4. Skills / Tools 区
用苹果"技术规格"风格的表格或图标墙
展示工具栈：ComfyUI、Stable Diffusion、虚拟制作流程等
5. Contact 区
极简底部：手机 + 邮箱 + 小红书二维码
一句 slogan 收尾
✨ 交互细节（苹果感的灵魂）
这些细节是苹果风格和普通网页的最大差异点：

效果	实现方式	苹果感来源
滚动视差	CSS scroll-driven animations	iPhone 产品页
文字逐字浮现	JS 拆字 + stagger 动画	Apple Event 页
图片懒加载模糊渐清	CSS blur filter transition	App Store
磁吸按钮效果	JS mousemove 偏移	macOS Dock
页面切换丝滑过渡	View Transitions API	Safari 导航
🛠️ 技术选型建议
考虑到你是创作者而非专职开发者，推荐这个技术栈：

框架：Next.js（或纯 HTML/CSS/JS，零依赖更轻量）
动画库：GSAP（最接近苹果官网效果的动画库）+ ScrollTrigger 插件
部署：Vercel（免费、一键部署、自动 HTTPS）
视频托管：作品视频放 Cloudflare R2 或阿里云 OSS，避免页面加载慢
💡 一个关键建议
苹果风格最容易踩的坑是**"做成了白底简约风"而不是"苹果风"**。真正的苹果感来自：

暗色系 + 超大字号 + 极度克制的元素密度 + 每一帧都像产品照

你的 AIGC 影像作品本身就是视觉炸弹，让作品做主角，页面框架退到幕后——这才是最苹果的做法。

需要我直接生成一份完整的 HTML/CSS 代码原型，还是先出一份详细的设计规范文档？

你能不能给我详细的细节设计，让我好执行这个设计

Claude 4.6 Sonnet
好的！下面是一份可以直接执行的完整设计规范，从像素级细节到代码片段全部覆盖 👇

🎨 一、设计令牌（Design Tokens）
所有颜色、字号、间距的唯一真实来源，先定好这些，后面所有模块直接调用。

复制
:root {
  /* ── 颜色系统 ── */
  --color-bg-primary:    #000000;   /* 主背景 */
  --color-bg-secondary:  #1C1C1E;   /* 卡片/区块背景 */
  --color-bg-tertiary:   #2C2C2E;   /* 悬浮态背景 */
  --color-surface:       #3A3A3C;   /* 分割线/边框 */

  --color-text-primary:  #F5F5F7;   /* 主文字（苹果官网标准） */
  --color-text-secondary:#A1A1A6;   /* 副文字 */
  --color-text-tertiary: #6E6E73;   /* 说明文字 */

  --color-accent:        #6E6AFF;   /* 品牌强调色 */
  --color-accent-glow:   rgba(110, 106, 255, 0.35); /* 发光效果 */
  --color-gradient:      linear-gradient(135deg, #6E6AFF 0%, #A78BFA 100%);

  /* ── 字体系统 ── */
  --font-display: "SF Pro Display", "PingFang SC", -apple-system, sans-serif;
  --font-body:    "SF Pro Text",    "PingFang SC", -apple-system, sans-serif;

  --text-hero:    clamp(48px, 8vw, 96px);   /* 英雄区大标题 */
  --text-title:   clamp(32px, 5vw, 56px);   /* 区块标题 */
  --text-heading: clamp(22px, 3vw, 32px);   /* 小标题 */
  --text-body:    17px;                      /* 正文（苹果标准） */
  --text-caption: 14px;                      /* 说明文字 */
  --text-label:   12px;                      /* 标签/角标 */

  /* ── 间距系统（8px 基准网格） ── */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  48px;
  --space-xl:  80px;
  --space-2xl: 120px;
  --space-3xl: 160px;

  /* ── 圆角 ── */
  --radius-sm:  8px;
  --radius-md:  16px;
  --radius-lg:  24px;
  --radius-xl:  32px;

  /* ── 动效时间 ── */
  --ease-apple:  cubic-bezier(0.25, 0.1, 0.25, 1.0);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1.0);
  --duration-fast:   200ms;
  --duration-normal: 400ms;
  --duration-slow:   700ms;
}
🏗️ 二、导航栏（Nav）
苹果导航的精髓：毛玻璃 + 滚动后才显现背景。

复制
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: 52px;                        /* 苹果标准导航高度 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(16px, 5vw, 80px);
  transition: background var(--duration-normal) var(--ease-apple),
              backdrop-filter var(--duration-normal) var(--ease-apple);
}

/* 滚动后触发毛玻璃 */
.nav.scrolled {
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 0.5px solid rgba(255,255,255,0.12);
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: -0.3px;
}

.nav-links {
  display: flex;
  gap: var(--space-lg);
  list-style: none;
}

.nav-links a {
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-apple);
}

.nav-links a:hover {
  color: var(--color-text-primary);
}
复制
// 滚动监听
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('scrolled', window.scrollY > 10);
});
🎬 三、Hero 区（全屏首屏）
结构：全屏视频/图像背景 → 渐变遮罩 → 文字从下浮入。

复制
<section class="hero">
  <div class="hero-media">
    <!-- 放你最强的一帧 AI 影像，建议用视频 loop -->
    <video autoplay muted loop playsinline>
      <source src="hero-reel.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay"></div>
  </div>

  <div class="hero-content">
    <p class="hero-eyebrow">AIGC 影像 · 智能媒介叙事</p>
    <h1 class="hero-title">胡优</h1>
    <p class="hero-subtitle">用 AI 重新定义影像叙事的边界</p>
    <a href="#works" class="hero-cta">查看作品</a>
  </div>

  <div class="hero-scroll-hint">
    <span>向下探索</span>
    <div class="scroll-arrow"></div>
  </div>
</section>
复制
.hero {
  position: relative;
  height: 100svh;                /* 移动端安全视口高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-media video {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  scale: 1.05;                   /* 轻微放大，留 Ken Burns 空间 */
  animation: kenBurns 20s ease-in-out infinite alternate;
}

@keyframes kenBurns {
  from { scale: 1.05; }
  to   { scale: 1.12; }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.5) 50%,
    rgba(0,0,0,0.85) 100%
  );
}

.hero-content {
  position: relative;
  text-align: center;
  z-index: 1;
}

.hero-eyebrow {
  font-size: var(--text-label);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp var(--duration-slow) var(--ease-apple) 0.2s forwards;
}

.hero-title {
  font-size: var(--text-hero);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--color-text-primary);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp var(--duration-slow) var(--ease-apple) 0.4s forwards;
}

.hero-subtitle {
  font-size: clamp(18px, 2.5vw, 28px);
  font-weight: 300;
  color: var(--color-text-secondary);
  margin-top: var(--space-sm);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp var(--duration-slow) var(--ease-apple) 0.6s forwards;
}

/* CTA 按钮 */
.hero-cta {
  display: inline-block;
  margin-top: var(--space-lg);
  padding: 14px 32px;
  border-radius: 980px;           /* 苹果胶囊按钮标准 */
  background: var(--color-accent);
  color: #fff;
  font-size: var(--text-body);
  font-weight: 500;
  text-decoration: none;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp var(--duration-slow) var(--ease-apple) 0.8s forwards;
  transition: transform var(--duration-fast) var(--ease-spring),
              box-shadow var(--duration-fast) var(--ease-apple);
}

.hero-cta:hover {
  transform: scale(1.04);
  box-shadow: 0 0 32px var(--color-accent-glow);
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
📋 四、About 区（大字排版）
仿苹果"This is iPhone"的超大文字叙事风格。

复制
.about {
  padding: var(--space-3xl) clamp(16px, 10vw, 200px);
  background: var(--color-bg-primary);
  text-align: center;
}

.about-statement {
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--color-text-primary);
  max-width: 900px;
  margin: 0 auto;
}

/* 关键词高亮渐变 */
.about-statement .highlight {
  background: var(--color-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-meta {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 0.5px solid var(--color-surface);
}

.about-meta-item {
  text-align: center;
}

.about-meta-item .value {
  font-size: var(--text-heading);
  font-weight: 600;
  color: var(--color-text-primary);
  display: block;
}

.about-meta-item .label {
  font-size: var(--text-caption);
  color: var(--color-text-tertiary);
  margin-top: 4px;
}
复制
<section class="about">
  <p class="about-statement">
    用 <span class="highlight">AI 影像</span> 讲述<br>
    只有这个时代才能讲述的故事
  </p>

  <div class="about-meta">
    <div class="about-meta-item">
      <span class="value">北邮 × 中传</span>
      <span class="label">双校背景</span>
    </div>
    <div class="about-meta-item">
      <span class="value">智能媒介叙事</span>
      <span class="label">研究方向</span>
    </div>
    <div class="about-meta-item">
      <span class="value">2027</span>
      <span class="label">预计毕业</span>
    </div>
  </div>
</section>
🖼️ 五、Works 区（作品展示）
Tab 切换 + 网格布局 + 悬浮卡片，这是页面的核心区域。

复制
/* Tab 切换栏 */
.works-tabs {
  display: flex;
  gap: var(--space-xs);
  justify-content: center;
  margin-bottom: var(--space-xl);
  padding: 4px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-xl);
  width: fit-content;
  margin-inline: auto;
}

.tab-btn {
  padding: 8px 20px;
  border-radius: var(--radius-lg);
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  font-size: var(--text-caption);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-apple);
}

.tab-btn.active {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  box-shadow: 0 1px 4px rgba(0,0,0,0.4);
}

/* 作品网格 */
.works-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-sm);
  padding: 0 clamp(16px, 5vw, 80px);
}

/* 大卡片（跨6列）*/
.card-large  { grid-column: span 6; }
/* 中卡片（跨4列）*/
.card-medium { grid-column: span 4; }
/* 小卡片（跨3列）*/
.card-small  { grid-column: span 3; }

/* 卡片基础样式 */
.work-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-bg-secondary);
  cursor: pointer;
  aspect-ratio: 16/10;

  /* 关键：苹果感的过渡 */
  transition: transform var(--duration-normal) var(--ease-spring),
              box-shadow var(--duration-normal) var(--ease-apple);
}

.work-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 24px 60px rgba(0,0,0,0.6),
              0 0 0 0.5px rgba(255,255,255,0.08);
}

.work-card img,
.work-card video {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-apple);
}

.work-card:hover img,
.work-card:hover video {
  transform: scale(1.05);
}

/* 卡片信息遮罩 */
.card-info {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: var(--space-md);
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
  transform: translateY(8px);
  opacity: 0;
  transition: all var(--duration-normal) var(--ease-apple);
}

.work-card:hover .card-info {
  transform: translateY(0);
  opacity: 1;
}

.card-category {
  font-size: var(--text-label);
  color: var(--color-accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
}

.card-title {
  font-size: var(--text-heading);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-top: 4px;
}
⚙️ 六、滚动触发动画
用 Intersection Observer 实现苹果式的内容入场，不依赖任何库。

复制
// 通用滚动入场动画
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // 只触发一次
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
});

// 给所有需要动画的元素加监听
document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});
复制
/* 动画基础状态 */
[data-animate="fade-up"] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity var(--duration-slow) var(--ease-apple),
              transform var(--duration-slow) var(--ease-apple);
}

[data-animate="fade-in"] {
  opacity: 0;
  transition: opacity var(--duration-slow) var(--ease-apple);
}

[data-animate="scale-in"] {
  opacity: 0;
  transform: scale(0.94);
  transition: opacity var(--duration-slow) var(--ease-apple),
              transform var(--duration-slow) var(--ease-spring);
}

/* 触发后的状态 */
[data-animate].visible {
  opacity: 1;
  transform: none;
}

/* 子元素错落入场 */
[data-stagger] > * {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--duration-normal) var(--ease-apple),
              transform var(--duration-normal) var(--ease-apple);
}

[data-stagger].visible > *:nth-child(1) { transition-delay: 0ms;   opacity: 1; transform: none; }
[data-stagger].visible > *:nth-child(2) { transition-delay: 80ms;  opacity: 1; transform: none; }
[data-stagger].visible > *:nth-child(3) { transition-delay: 160ms; opacity: 1; transform: none; }
[data-stagger].visible > *:nth-child(4) { transition-delay: 240ms; opacity: 1; transform: none; }
[data-stagger].visible > *:nth-child(5) { transition-delay: 320ms; opacity: 1; transform: none; }
📱 七、响应式断点
复制
/* 平板（≤1024px）：12列 → 双列 */
@media (max-width: 1024px) {
  .card-large  { grid-column: span 12; }
  .card-medium { grid-column: span 6; }
  .card-small  { grid-column: span 6; }
}

/* 手机（≤768px）：全部单列 */
@media (max-width: 768px) {
  .card-large,
  .card-medium,
  .card-small  { grid-column: span 12; }

  .about-meta  { flex-direction: column; gap: var(--space-lg); }

  .works-tabs  {
    overflow-x: auto;
    width: 100%;
    border-radius: var(--radius-md);
    justify-content: flex-start;
    padding: var(--space-xs);
  }
}

