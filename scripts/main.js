/* =============================================
   胡优 · AIGC 影像作品集 · 主交互脚本
   ============================================= */

/* ─────────────────────────────────────────
   1. Nav 滚动毛玻璃
   ───────────────────────────────────────── */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ─────────────────────────────────────────
   2. Works Tab 切换
   ───────────────────────────────────────── */
const tabs = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('.work-card');
tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    cards.forEach(card => {
      card.style.display = (tab === 'all' || card.dataset.category === tab) ? '' : 'none';
    });
  });
});

/* ─────────────────────────────────────────
   3. 悬停播放 / 离开暂停
   ───────────────────────────────────────── */
document.querySelectorAll('.work-card').forEach(card => {
  const video = card.querySelector('video');
  if (!video) return;
  card.addEventListener('mouseenter', () => video.play().catch(() => {}));
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});

/* ─────────────────────────────────────────
   4. 滚动入场动画
   ───────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-animate], [data-stagger]').forEach(el => observer.observe(el));

/* ─────────────────────────────────────────
   5. i18n · 中英双语切换
   ───────────────────────────────────────── */
const i18n = {
  zh: {
    /* Nav */
    'nav.logo':    '胡优',
    'nav.about':   '关于',
    'nav.works':   '作品',
    'nav.skills':  '工具',
    'nav.contact': '联系',

    /* Hero */
    'hero.eyebrow':  'AIGC 影像 · 智能媒介叙事',
    'hero.title':    '胡优',
    'hero.subtitle': '用 AI 重新定义影像叙事的边界',
    'hero.cta':      '查看作品',
    'hero.scroll':   '向下探索',

    /* About */
    'about.statement1': '用 ',
    'about.highlight':  'AI 影像',
    'about.statement2': ' 讲述',
    'about.statement3': '只有这个时代才能讲述的故事',
    'about.body':       '北京邮电大学 × 中国传媒大学，专注 AIGC 影像创作与智能媒介叙事研究。用 ComfyUI、Stable Diffusion、虚拟制作等工具探索 AI 与影像的边界。',
    'about.meta1.v':    '北邮 × 中传',
    'about.meta1.l':    '双校背景',
    'about.meta2.v':    '智能媒介叙事',
    'about.meta2.l':    '研究方向',
    'about.meta3.v':    '2027',
    'about.meta3.l':    '预计毕业',

    /* Works */
    'works.label':       'Portfolio',
    'works.title':       '作品',
    'works.tab.all':     '全部',
    'works.tab.film':    'AI 短片',
    'works.tab.comfyui': 'ComfyUI',
    'works.tab.design':  'AI 设计',
    'works.tab.virtual': '虚拟制作',
    'works.tab.media':   '自媒体',

    /* Card categories */
    'cat.film':         'AI 短片',
    'cat.film.demo':    'AI 短片 · Demo',
    'cat.experimental': '实验短片',
    'cat.comfyui':      'ComfyUI',
    'cat.design':       'AI 设计',
    'cat.virtual':      '虚拟制作',
    'cat.internet':     '互联网实践',
    'cat.media':        '自媒体运营',
    'cat.screenplay':   '剧作实践',

    /* Card titles & descriptions */
    'card.film1.title':    '中国古风工笔淡彩',
    'card.film1.desc':     '水墨写意 + 工笔重彩 · 小红书',
    'card.film2.title':    '织光之途 · 细腻工笔水彩',
    'card.film2.desc':     '空灵东方美学 · 工笔水彩质感',
    'card.film3.title':    '稚拙手绘 · 治愈插画',
    'card.film3.desc':     '温暖复古田园 · 手绘逐帧质感',
    'card.film4.title':    '金鱼缸',
    'card.film4.desc':     '实验影像 · AI 叙事探索',
    'card.comfy1.title':   '风格转绘设计',
    'card.comfy1.desc':    '线稿结构控制 · IP-Adapter 风格迁移',
    'card.design1.title':  '怪奇物语 MAX · 海报设计',
    'card.design1.desc':   '日系复古风格 · 丝网印刷质感',
    'card.design2.title':  '灵喵墨韵 · 字体设计',
    'card.design2.desc':   '水墨书法风格 · 中文字体创作',
    'card.design3.title':  'Nyota · IP 海报设计',
    'card.design3.desc':   '原创 IP 视觉 · 四季插画风格',
    'card.virtual1.title': 'C4D · Blender · Unity',
    'card.virtual1.desc':  '动态 GIF · 粒子光效 · 赛车游戏开发',
    'card.media1.title':   '小程序开发 · 创新大赛',
    'card.media1.desc':    '挑战杯三等奖 · 中国国际大学生创新大赛金奖',
    'card.media2.title':   '轻舟竟川 · 小红书影评',
    'card.media2.desc':    '2000+ 粉丝 · 1.7 万点赞与收藏',
    'card.media3.title':   '剧本分析 · 原创剧作',
    'card.media3.desc':    '结构分析 · IP 改编 · 原创都市情感剧本',

    /* Skills */
    'skills.label':    'Toolstack',
    'skills.title':    '工具与技能',
    'skill.comfy.n':   'ComfyUI',
    'skill.comfy.t':   'AI 生图',
    'skill.sd.n':      'Stable Diffusion',
    'skill.sd.t':      'AI 生图',
    'skill.runway.n':  'Runway',
    'skill.runway.t':  'AI 视频',
    'skill.kling.n':   'Kling',
    'skill.kling.t':   'AI 视频',
    'skill.virtual.n': '虚拟制作',
    'skill.virtual.t': '影视技术',
    'skill.pr.n':      'Premiere Pro',
    'skill.pr.t':      '剪辑',

    /* Contact */
    'contact.slogan1': '让我们一起',
    'contact.slogan2': '创造下一帧',
    'contact.email':   '邮箱',
    'contact.phone':   '手机',
    'contact.xhs':     '小红书',
    'contact.footer':  '© 2026 胡优 · AIGC 影像叙事者',
  },

  en: {
    /* Nav */
    'nav.logo':    'Hu You',
    'nav.about':   'About',
    'nav.works':   'Works',
    'nav.skills':  'Toolkit',
    'nav.contact': 'Contact',

    /* Hero */
    'hero.eyebrow':  'AIGC Film · Intelligent Media Narrative',
    'hero.title':    'Hu You',
    'hero.subtitle': 'Redefining visual storytelling with AI',
    'hero.cta':      'View Works',
    'hero.scroll':   'Scroll to explore',

    /* About */
    'about.statement1': 'Telling stories ',
    'about.highlight':  'only this era',
    'about.statement2': ' can tell —',
    'about.statement3': 'through AI-generated visuals.',
    'about.body':       'BUPT × Communication University of China. Focused on AIGC filmmaking and intelligent-media narrative research — exploring the frontier of AI and the moving image with ComfyUI, Stable Diffusion, and virtual production.',
    'about.meta1.v':    'BUPT × CUC',
    'about.meta1.l':    'Dual-University Background',
    'about.meta2.v':    'Intelligent Narrative',
    'about.meta2.l':    'Research Focus',
    'about.meta3.v':    '2027',
    'about.meta3.l':    'Expected Graduation',

    /* Works */
    'works.label':       'Portfolio',
    'works.title':       'Works',
    'works.tab.all':     'All',
    'works.tab.film':    'AI Film',
    'works.tab.comfyui': 'ComfyUI',
    'works.tab.design':  'AI Design',
    'works.tab.virtual': 'Virtual Production',
    'works.tab.media':   'Social Media',

    /* Card categories */
    'cat.film':         'AI Film',
    'cat.film.demo':    'AI Film · Demo',
    'cat.experimental': 'Experimental Film',
    'cat.comfyui':      'ComfyUI',
    'cat.design':       'AI Design',
    'cat.virtual':      'Virtual Production',
    'cat.internet':     'Internet Practice',
    'cat.media':        'Social Media',
    'cat.screenplay':   'Screenwriting',

    /* Card titles & descriptions */
    'card.film1.title':    'Chinese Gongbi Watercolor',
    'card.film1.desc':     'Ink wash + fine brushwork · Xiaohongshu',
    'card.film2.title':    'Path of Woven Light · Gongbi Watercolor',
    'card.film2.desc':     'Ethereal Eastern aesthetics · Gongbi watercolor texture',
    'card.film3.title':    'Naive Hand-Drawn · Healing Illustration',
    'card.film3.desc':     'Warm pastoral · Frame-by-frame hand-drawn texture',
    'card.film4.title':    'Goldfish Bowl',
    'card.film4.desc':     'Experimental film · AI narrative exploration',
    'card.comfy1.title':   'Style-Transfer Design',
    'card.comfy1.desc':    'Lineart structure control · IP-Adapter style transfer',
    'card.design1.title':  'Stranger Things MAX · Poster Design',
    'card.design1.desc':   'Japanese retro style · Silkscreen print texture',
    'card.design2.title':  'Lingmiao Moyun · Typeface Design',
    'card.design2.desc':   'Ink calligraphy style · Chinese typeface creation',
    'card.design3.title':  'Nyota · IP Poster Design',
    'card.design3.desc':   'Original IP visuals · Four-seasons illustration style',
    'card.virtual1.title': 'C4D · Blender · Unity',
    'card.virtual1.desc':  'Motion GIF · Particle effects · Racing game development',
    'card.media1.title':   'Mini-Program Dev · Innovation Contest',
    'card.media1.desc':    'Challenge Cup 3rd Prize · CICIC Gold Award',
    'card.media2.title':   'Qingzhou Jingchuan · Xiaohongshu Film Review',
    'card.media2.desc':    '2,000+ followers · 17,000 likes & saves',
    'card.media3.title':   'Script Analysis · Original Screenwriting',
    'card.media3.desc':    'Structural analysis · IP adaptation · Original urban drama',

    /* Skills */
    'skills.label':    'Toolstack',
    'skills.title':    'Tools & Skills',
    'skill.comfy.n':   'ComfyUI',
    'skill.comfy.t':   'AI Image',
    'skill.sd.n':      'Stable Diffusion',
    'skill.sd.t':      'AI Image',
    'skill.runway.n':  'Runway',
    'skill.runway.t':  'AI Video',
    'skill.kling.n':   'Kling',
    'skill.kling.t':   'AI Video',
    'skill.virtual.n': 'Virtual Production',
    'skill.virtual.t': 'Film Technology',
    'skill.pr.n':      'Premiere Pro',
    'skill.pr.t':      'Editing',

    /* Contact */
    'contact.slogan1': "Let's create",
    'contact.slogan2': 'the next frame together',
    'contact.email':   'Email',
    'contact.phone':   'Phone',
    'contact.xhs':     'Xiaohongshu',
    'contact.footer':  '© 2026 Hu You · AIGC Visual Storyteller',
  }
};

const LangManager = {
  current: 'zh',

  init() {
    // 读取偏好：localStorage > 浏览器语言 > 默认中文
    const saved = localStorage.getItem('site-lang');
    const browser = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    this.current = saved || browser;

    this.apply(this.current, false);
    this.bindToggle();
  },

  apply(lang, animate = true) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    const update = () => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = i18n[lang] && i18n[lang][key];
        if (value !== undefined) el.textContent = value;
      });

      // 按钮显示对方语言
      const btnText = document.querySelector('.lang-text');
      if (btnText) btnText.textContent = lang === 'zh' ? 'EN' : '中';

      document.body.classList.remove('lang-switching');
    };

    if (animate) {
      document.body.classList.add('lang-switching');
      setTimeout(update, 200);
    } else {
      update();
    }

    localStorage.setItem('site-lang', lang);
    this.current = lang;
  },

  bindToggle() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      this.apply(this.current === 'zh' ? 'en' : 'zh');
    });
  }
};

document.addEventListener('DOMContentLoaded', () => LangManager.init());
