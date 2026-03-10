# Findings — 设计研究与决策记录

## 苹果风格核心规律

### 颜色
- 主背景 `#000000`，卡片背景 `#1C1C1E`，悬浮态 `#2C2C2E`
- 主文字 `#F5F5F7`（非纯白，苹果官网标准），副文字 `#A1A1A6`
- 品牌色 `#6E6AFF → #A78BFA` 渐变，呼应 AI/科技感

### 字体
- 中文：PingFang SC；英文：SF Pro Display / SF Pro Text
- 大标题 `clamp(56px, 9vw, 112px)`，正文固定 `17px`（苹果标准）
- 字重：标题 700，正文 400，说明 300

### 间距
- 8px 基准网格：8 / 16 / 24 / 48 / 80 / 120 / 160px
- 区块间距用 `--space-3xl: 160px`，内容密度极低

### 动效
- 缓动函数：`cubic-bezier(0.25, 0.1, 0.25, 1.0)`（苹果标准）
- 弹性效果：`cubic-bezier(0.34, 1.56, 0.64, 1.0)`
- 时长：fast 200ms / normal 400ms / slow 700ms

## 关键交互模式

| 效果 | 实现方式 |
|------|----------|
| 导航毛玻璃 | `backdrop-filter: saturate(180%) blur(20px)` |
| 文字浮入 | `opacity:0 + translateY` → CSS animation |
| 卡片悬浮 | `translateY(-6px) scale(1.01)` + 阴影 |
| 滚动入场 | Intersection Observer + `data-animate` 属性 |
| Ken Burns | CSS `scale` keyframes，20s 循环 |
| Hero 无视频时 | CSS radial-gradient 网格背景作为视觉占位 |

## 常见踩坑

1. **白底简约 ≠ 苹果风** — 必须暗色系
2. **元素密度** — 宁可留白过多，不要塞满内容
3. **字号要大** — 标题敢用 96px+，副标题也要 28px+
4. **视频性能** — hero 视频必须压缩到 5MB 以内，用 H.264
5. **移动端** — 用 `100svh` 而非 `100vh`，避免地址栏遮挡
6. **Skills 网格** — `auto-fit minmax` 在奇数列数时会溢出，改用 `repeat(N, 1fr)` 更可控

## Works 区布局决策
- 12列网格：大卡 span 6，中卡 span 4，小卡 span 3
- 平板（≤1024px）：大卡 12，中/小卡 6
- 手机（≤768px）：全部 12（单列）
- 卡片比例固定 `aspect-ratio: 16/10`

## 分类 Tab
全部 / AI短片 / ComfyUI / AI设计 / 虚拟制作 / 自媒体

## 素材命名规范
- 作品封面：`assets/images/work-{category}-{n}.jpg`（如 `work-film-01.jpg`）
- Hero 视频：`assets/videos/hero-reel.mp4`（H.264，< 5MB，已加入 .gitignore）
