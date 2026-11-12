/**
 * Social Media Data Analysis & Visualization
 * Static Site Navigation & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  const sections = ['overview', 'problem', 'importance', 'methodology', 'implementation', 'results'];
  const nav = document.querySelector('nav');
  const navButtons = document.querySelectorAll('nav button');
  const menuButton = document.querySelector('.menu-button');
  const header = document.querySelector('.site-header');

  let activeSectionId = 'overview';

  /**
   * Set active navigation button based on current section
   */
  function setActiveNav(id) {
    if (activeSectionId === id) return;
    activeSectionId = id;
    navButtons.forEach((btn) => {
      if (btn.getAttribute('data-target') === id) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  /**
   * Smoothly scroll to a section by its ID and close mobile menu
   */
  function jumpTo(id) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  }

  /**
   * Mobile menu helpers
   */
  function closeMenu() {
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      if (menuButton) {
        menuButton.textContent = 'Menu';
        menuButton.setAttribute('aria-expanded', 'false');
      }
    }
  }

  function toggleMenu() {
    if (!nav || !menuButton) return;
    const isOpen = nav.classList.toggle('open');
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
    menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  if (menuButton) {
    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Close mobile menu if clicked outside header
  document.addEventListener('click', (e) => {
    if (nav && nav.classList.contains('open') && header && !header.contains(e.target)) {
      closeMenu();
    }
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Attach jumpTo to all buttons with data-target
  document.querySelectorAll('[data-target]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = el.getAttribute('data-target');
      if (targetId) {
        jumpTo(targetId);
      }
    });
  });

  /**
   * Tree View Switcher (Static SVG vs Interactive Inspector)
   */
  const treeToggleBtns = document.querySelectorAll('.tree-toggle-btn');
  const staticTree = document.getElementById('staticTreeView');
  const interactiveTree = document.getElementById('interactiveTreeView');
  if (treeToggleBtns.length && staticTree && interactiveTree) {
    treeToggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        treeToggleBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        if (view === 'interactive') {
          staticTree.style.display = 'none';
          interactiveTree.style.display = 'block';
        } else {
          staticTree.style.display = 'block';
          interactiveTree.style.display = 'none';
        }
      });
    });
  }

  /**
   * IntersectionObserver for active section highlight
   */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveNav(visible.target.id);
        }
      },
      { rootMargin: '-25% 0px -55%', threshold: [0.1, 0.4] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
});

