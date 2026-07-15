/**
 * VigoraDeck - Navegação do Investor Deck
 * ~100 LOC, zero dependências
 */
class VigoraDeck {
  constructor() {
    this.track = document.querySelector('.deck__track');
    this.slides = document.querySelectorAll('.slide');
    this.prevBtn = document.querySelector('.nav__prev');
    this.nextBtn = document.querySelector('.nav__next');
    this.dotsContainer = document.querySelector('.nav__dots');
    this.currentEl = document.querySelector('.nav__current');
    this.totalEl = document.querySelector('.nav__total');
    
    this.total = this.slides.length;
    this.current = 0;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
  }
  
  init() {
    this.totalEl.textContent = this.total;
    this.createDots();
    this.bindEvents();
    this.goTo(this.getInitialSlide(), false);
  }
  
  getInitialSlide() {
    const hash = window.location.hash;
    const match = hash.match(/#slide-(\d+)/);
    return match ? Math.min(Math.max(0, parseInt(match[1]) - 1), this.total - 1) : 0;
  }
  
  createDots() {
    for (let i = 0; i < this.total; i++) {
      const dot = document.createElement('button');
      dot.className = 'nav__dot';
      dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
      dot.addEventListener('click', () => this.goTo(i));
      this.dotsContainer.appendChild(dot);
    }
  }
  
  bindEvents() {
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); this.next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); this.prev(); }
      else if (e.key === 'Home') { e.preventDefault(); this.goTo(0); }
      else if (e.key === 'End') { e.preventDefault(); this.goTo(this.total - 1); }
    });
    
    let touchStartX = 0;
    this.track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    this.track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
    }, { passive: true });
    
    window.addEventListener('hashchange', () => this.goTo(this.getInitialSlide(), false));
  }
  
  goTo(index, updateHash = true) {
    if (index < 0 || index >= this.total || index === this.current) return;
    
    this.slides[this.current].classList.remove('slide--active');
    this.current = index;
    this.slides[this.current].classList.add('slide--active');
    
    this.updateUI();
    if (updateHash) history.replaceState(null, '', `#slide-${this.current + 1}`);
    
    this.slides[this.current].focus({ preventScroll: true });
  }
  
  updateUI() {
    this.currentEl.textContent = this.current + 1;
    this.prevBtn.disabled = this.current === 0;
    this.nextBtn.disabled = this.current === this.total - 1;
    
    document.querySelectorAll('.nav__dot').forEach((dot, i) => {
      dot.classList.toggle('nav__dot--active', i === this.current);
      dot.setAttribute('aria-current', i === this.current ? 'true' : 'false');
    });
    
    this.track.setAttribute('aria-live', 'polite');
  }
  
  prev() { this.goTo(this.current - 1); }
  next() { this.goTo(this.current + 1); }
}

document.addEventListener('DOMContentLoaded', () => new VigoraDeck());
