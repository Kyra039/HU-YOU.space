// Nav 滚动毛玻璃
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Works Tab 切换
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

// 悬停播放 / 离开暂停
document.querySelectorAll('.work-card').forEach(card => {
  const video = card.querySelector('video');
  if (!video) return;
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});

// 滚动入场动画
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-animate], [data-stagger]').forEach(el => observer.observe(el));
