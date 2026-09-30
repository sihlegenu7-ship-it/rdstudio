    /* ── PANEL SWITCHER — replaces old tab switcher ── */
    function showPanel(panel) {
      document.getElementById('panel-signin').classList.toggle('active', panel === 'signin');
      document.getElementById('panel-signup').classList.toggle('active', panel === 'signup');
      closeMenu();
    }

    function checkStrength(val) {
      let s = 0;
      if (val.length >= 8)          s++;
      if (/[A-Z]/.test(val))        s++;
      if (/[0-9]/.test(val))        s++;
      if (/[^A-Za-z0-9]/.test(val)) s++;
      const lvl = [
        { pct: '0%',   col: 'rgba(224,92,0,0.2)', txt: 'Enter a password' },
        { pct: '25%',  col: '#e05c00',             txt: 'Weak'             },
        { pct: '50%',  col: '#e05c00',             txt: 'Fair'             },
        { pct: '75%',  col: '#ff7a1a',             txt: 'Good'             },
        { pct: '100%', col: '#4caf50',             txt: 'Strong ✓'         },
      ][s];
      document.getElementById('pwBar').style.width      = lvl.pct;
      document.getElementById('pwBar').style.background = lvl.col;
      document.getElementById('pwLbl').textContent      = lvl.txt;
    }

    function goTo(url) {
      document.getElementById('overlay').classList.add('go');
      setTimeout(() => window.location.href = url, 650);
    }

    document.getElementById('signinForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email    = document.getElementById('si-email').value.trim();
      const password = document.getElementById('si-password').value;
      if (!email || !password) { alert('Please fill in your email and password.'); return; }
      const btn = this.querySelector('.btn-auth');
      btn.disabled = true;
      btn.querySelector('span').textContent = 'Signing in…';
      setTimeout(() => {
        document.getElementById('signin-form-wrap').style.display = 'none';
        document.getElementById('signin-success').style.display   = 'block';
        setTimeout(() => goTo('index.html'), 1600);
      }, 1200);
    });

    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name     = document.getElementById('su-name').value.trim();
      const email    = document.getElementById('su-email').value.trim();
      const password = document.getElementById('su-password').value;
      const confirm  = document.getElementById('su-confirm').value;
      if (!name || !email || !password || !confirm) { alert('Please fill in all fields.'); return; }
      if (password !== confirm) {
        const c = document.getElementById('su-confirm');
        c.style.borderColor = 'var(--orange)';
        c.value = '';
        c.placeholder = 'Passwords do not match';
        return;
      }
      if (password.length < 8) { alert('Password must be at least 8 characters.'); return; }
      const btn = this.querySelector('.btn-auth');
      btn.disabled = true;
      btn.querySelector('span').textContent = 'Creating account…';
      setTimeout(() => {
        document.getElementById('signup-form-wrap').style.display = 'none';
        document.getElementById('signup-success').style.display   = 'block';
      }, 1300);
    });

    function showForgot(e) {
      e.preventDefault();
      const email = document.getElementById('si-email').value.trim();
      if (email) { alert('A reset link has been sent to ' + email + '.'); }
      else { alert('Enter your email address first, then click "Forgot password?".'); }
    }

    const toggle   = document.getElementById('navToggle');
    const menu     = document.getElementById('navMenu');
    const backdrop = document.getElementById('navBackdrop');

    function openMenu()  { menu.classList.add('open'); backdrop.classList.add('open'); toggle.classList.add('open'); toggle.setAttribute('aria-expanded','true');  document.body.style.overflow='hidden'; }
    function closeMenu() { menu.classList.remove('open'); backdrop.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }

    toggle.addEventListener('click', () => menu.classList.contains('open') ? closeMenu() : openMenu());
    backdrop.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

    if (new URLSearchParams(window.location.search).get('tab') === 'signup') {
      showPanel('signup');
    }
    