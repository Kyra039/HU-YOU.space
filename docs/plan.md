# 项目规划 — 胡优个人作品集网站

## 项目目标
苹果风格的 AIGC 影像作品集，暗色系 + 极简美学 + 流畅交互。单页应用，零依赖。

## 技术栈
- 纯 HTML / CSS / JS（零依赖，轻量）
- 动画：CSS Animations + Intersection Observer API
- 部署：Vercel
- 媒体托管：Cloudflare R2 / 阿里云 OSS（视频/大图）

## 页面结构（6 个模块）

| 模块 | 内容 | 优先级 |
|------|------|--------|
| Nav | 毛玻璃导航，滚动后显现 | P0 |
| Hero | 全屏视频/渐变背景 + 文字浮入 | P0 |
| About | 大字排版 + 数据统计 | P1 |
| Works | Tab 切换 + 12列网格 + 悬浮卡片 | P0 |
| Skills | 工具栈 6列网格 | P2 |
| Contact | 极简底部联系方式 | P1 |

## 开发阶段

### Phase 1 — 骨架搭建 ✅ 完成
- [x] `index.html` 完整单页框架（所有模块）
- [x] `styles/tokens.css` 设计令牌
- [x] 8 个 CSS 文件按模块拆分
- [x] `scripts/main.js` 交互逻辑
- [x] 滚动入场动画 + Tab 切换 + 响应式
- [x] Git 初始化，首次提交 `7dea420`

### Phase 2 — 内容填充（当前阶段）
- [ ] 填写真实联系方式（邮箱、手机、小红书）
- [ ] 放入作品封面图（`assets/images/`），取消注释 `<img>` 标签
- [ ] 放入 Hero 视频（`assets/videos/hero-reel.mp4`），取消注释视频块

### Phase 3 — 视觉升级
- [ ] 细节动效打磨（磁吸按钮、视差滚动）
- [ ] 性能优化（懒加载、视频压缩 < 5MB）

### Phase 4 — 上线
- [ ] Vercel 部署
- [ ] 域名绑定

## 文件结构
```
web_personal/
├── index.html
├── .gitignore
├── styles/
│   ├── tokens.css      # 设计令牌（所有 CSS 变量）
│   ├── main.css        # Reset + 共享样式 + 滚动动画
│   ├── nav.css
│   ├── hero.css
│   ├── about.css
│   ├── works.css
│   ├── skills.css
│   └── contact.css
├── scripts/
│   └── main.js
├── assets/
│   ├── images/         # 作品封面（命名：work-{category}-{n}.jpg）
│   └── videos/         # hero-reel.mp4（gitignore，单独上传）
└── docs/
    ├── designe.md      # 设计规范原稿
    ├── plan.md         # 本文件
    ├── findings.md     # 设计研究记录
    └── implemented.md  # 进度追踪
```
