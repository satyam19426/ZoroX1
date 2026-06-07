// =====================================================
//   MAIN APP JAVASCRIPT – TechPro Institute
// =====================================================

// ── Dark Mode ─────────────────────────────────────────────────
const initDarkMode = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');
};
initDarkMode();

document.addEventListener('DOMContentLoaded', () => {
  // ── Dark Mode Toggle ───────────────────────────────────────
  document.querySelectorAll('.dark-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      updateDarkIcons();
    });
  });

  function updateDarkIcons() {
    const isDark = document.body.classList.contains('dark-mode');
    document.querySelectorAll('.dark-toggle').forEach(btn => {
      btn.innerHTML = isDark
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    });
  }
  updateDarkIcons();

  // ── Mobile Nav ─────────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileNavClose && mobileNav) {
    mobileNavClose.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // ── Sidebar Toggle (Dashboard) ─────────────────────────────
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (sidebarOverlay) sidebarOverlay.classList.toggle('active');
    });
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
    });
  }

  // ── Active Nav Link ─────────────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace('../', '').replace('./', ''))) {
      link.classList.add('active');
    }
  });

  // ── FAQ Accordion ──────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');
      document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('active');
        answer.classList.add('open');
      }
    });
  });

  // ── Tabs ───────────────────────────────────────────────────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      const tabsContainer = btn.closest('[data-tabs]') || btn.closest('.tabs-wrapper');
      if (tabsContainer) {
        tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        tabsContainer.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      } else {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      }
      btn.classList.add('active');
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    });
  });

  // ── Modal ──────────────────────────────────────────────────
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modalOpen);
      if (modal) modal.classList.add('active');
    });
  });
  document.querySelectorAll('[data-modal-close], .modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay').classList.remove('active');
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // ── Scroll Animations ──────────────────────────────────────
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  };
  observeElements();

  // ── Counter Animation ──────────────────────────────────────
  const animateCounters = () => {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString('en-IN') + (el.dataset.suffix || '');
      }, 16);
    });
  };
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const statsSection = document.querySelector('[data-stats]');
  if (statsSection) statsObserver.observe(statsSection);

  // ── Toast Notifications ────────────────────────────────────
  window.showToast = (message, type = 'info', duration = 3500) => {
    const colors = { success: '#10b981', danger: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    const icons = {
      success: '✓', danger: '✕', warning: '⚠', info: 'ℹ'
    };
    const toast = document.createElement('div');
    toast.style.cssText = `
      position:fixed; bottom:2rem; right:2rem; z-index:9999;
      background:#fff; border:1px solid #e5e7eb; border-left:4px solid ${colors[type]};
      border-radius:0.75rem; padding:1rem 1.5rem; min-width:280px; max-width:400px;
      box-shadow:0 20px 40px rgba(0,0,0,0.15);
      display:flex; align-items:center; gap:0.875rem;
      transform:translateX(120%); transition:transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
      font-family:'Inter',sans-serif; font-size:0.9rem;
    `;
    toast.innerHTML = `
      <span style="width:1.75rem;height:1.75rem;background:${colors[type]};color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">${icons[type]}</span>
      <span style="flex:1;color:#111827;font-weight:500">${message}</span>
      <button onclick="this.closest('div').remove()" style="color:#9ca3af;font-size:1.25rem;line-height:1;cursor:pointer;background:none;border:none;font-family:inherit">×</button>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.style.transform = 'translateX(0)', 10);
    setTimeout(() => {
      toast.style.transform = 'translateX(120%)';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  };

  // ── Form Validation Helper ─────────────────────────────────
  window.validateForm = (formEl) => {
    let isValid = true;
    formEl.querySelectorAll('[required]').forEach(field => {
      const errorEl = field.parentElement.querySelector('.form-error');
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = 'var(--danger)';
        if (errorEl) errorEl.textContent = 'This field is required.';
      } else {
        field.style.borderColor = '';
        if (errorEl) errorEl.textContent = '';
      }
    });
    return isValid;
  };

  // ── Search Filter ──────────────────────────────────────────
  window.filterItems = (input, itemSelector, searchFields) => {
    const query = input.value.toLowerCase().trim();
    document.querySelectorAll(itemSelector).forEach(item => {
      const text = searchFields.map(f => (item.dataset[f] || '')).join(' ').toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  };

  // ── Chart Placeholder (mini bar chart via CSS) ─────────────
  window.renderMiniChart = (canvas, data, color = '#1a56db') => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const max = Math.max(...data);
    const w = canvas.width, h = canvas.height;
    const barW = (w - (data.length - 1) * 4) / data.length;
    ctx.clearRect(0, 0, w, h);
    data.forEach((val, i) => {
      const barH = (val / max) * h * 0.9;
      const x = i * (barW + 4);
      const y = h - barH;
      const r = Math.min(4, barW / 2, barH / 2);
      const grad = ctx.createLinearGradient(0, y, 0, h);
      grad.addColorStop(0, color);
      grad.addColorStop(1, color + '40');
      ctx.fillStyle = grad;
      ctx.beginPath();
      // Cross-browser rounded rect (no ctx.roundRect needed)
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + barW - r, y);
      ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
      ctx.lineTo(x + barW, y + barH);
      ctx.lineTo(x, y + barH);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fill();
    });
  };

  // ── Print functionality ────────────────────────────────────
  window.printSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    // Dynamically resolve CSS path based on current page depth
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    const prefix = depth > 1 ? '../'.repeat(depth - 1) : '';
    const cssPath = prefix + 'assets/css/styles.css';
    const printWin = window.open('', '_blank');
    printWin.document.write(`<!DOCTYPE html><html><head><title>Print</title><link rel="stylesheet" href="${cssPath}"><style>body{padding:2rem}@media print{.no-print{display:none!important}}</style></head><body>${el.outerHTML}<script>window.print();window.close();<\/script></body></html>`);
    printWin.document.close();
  };

  // ── Highlight Active Sidebar Link ──────────────────────────
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const currentFile = window.location.pathname.split('/').pop();
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentFile)) link.classList.add('active');
  });

  // ── Sticky Navbar Shadow ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // ── Smooth Scroll ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // ── Image Error Fallback ───────────────────────────────────
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
    });
  });

  console.log('%cTechPro Institute CMS loaded ✓', 'color:#1a56db;font-weight:bold;font-size:14px');
});
