
// ── DATA ──────────────────────────────────────────────────────────────────
const threats = [
  {
    icon: '🎣',
    title: 'Phishing',
    summary: 'Fake emails or websites that trick you into giving away your passwords or personal info.',
    risk: 'high',
    detail: `Phishing is one of the most common cyberattacks in Ghana and worldwide. Attackers send emails or messages that look like they're from your bank, MTN, Vodafone, or even UPSA — but they're fake.`,
    bullets: [
      'They create a sense of urgency: "Your account will be blocked!"',
      'Links lead to fake websites that look real',
      'They collect your login details or financial info',
      'Can arrive via email, SMS (smishing), or WhatsApp'
    ],
    tip: 'Always check the sender\'s email address carefully. Hover over links before clicking. When in doubt, go directly to the official website by typing the URL yourself.'
  },
  {
    icon: '🦠',
    title: 'Malware',
    summary: 'Malicious software designed to damage, disrupt, or gain unauthorized access to your device.',
    risk: 'high',
    detail: `Malware includes viruses, ransomware, spyware, and trojans. In Ghana, malware often spreads through pirated software downloads, USB drives, and email attachments.`,
    bullets: [
      'Ransomware locks your files and demands payment',
      'Spyware secretly monitors your activity',
      'Trojans disguise themselves as legitimate software',
      'Can spread through USB sticks shared between computers'
    ],
    tip: 'Install a reputable antivirus and keep it updated. Only download software from official sources. Be very careful with USB drives from unknown sources.'
  },
  {
    icon: '🔑',
    title: 'Weak passwords',
    summary: 'Using short, simple, or reused passwords makes it easy for attackers to break into your accounts.',
    risk: 'high',
    detail: `Weak passwords are the leading cause of account breaches. Many Ghanaians use passwords like "password123", their phone number, or their date of birth — all of which can be cracked in seconds.`,
    bullets: [
      'Dictionary attacks try common words automatically',
      'Brute force attacks try all combinations',
      'Credential stuffing reuses passwords from leaked databases',
      'Password reuse means one breach exposes all accounts'
    ],
    tip: 'Use a password that is at least 12 characters long, with uppercase, lowercase, numbers and symbols. Use a different password for every account. Consider a password manager like Bitwarden (free).'
  },
  {
    icon: '🕵️',
    title: 'Social engineering',
    summary: 'Manipulating people psychologically to reveal confidential information or perform certain actions.',
    risk: 'med',
    detail: `Social engineering exploits human psychology rather than technical vulnerabilities. An attacker might call pretending to be IT support, a bank officer, or even a colleague.`,
    bullets: [
      'Pretexting: creating a fake scenario to gain trust',
      'Baiting: leaving infected USB drives for people to find',
      'Vishing: voice calls pretending to be tech support',
      'Impersonation: pretending to be someone with authority'
    ],
    tip: 'Always verify the identity of anyone asking for sensitive information, even if they seem legitimate. No real IT department or bank will ask for your password over the phone.'
  },
  {
    icon: '📶',
    title: 'Public Wi-Fi risks',
    summary: 'Unsecured public networks can allow attackers to intercept your internet traffic.',
    risk: 'med',
    detail: `Free Wi-Fi at places like KFC, malls, and universities in Ghana can be risky. Attackers can set up fake hotspots with similar names or intercept traffic on open networks.`,
    bullets: [
      'Man-in-the-middle attacks intercept your data',
      'Evil twin hotspots mimic legitimate networks',
      'Attackers can capture login credentials and cookies',
      'HTTPS helps but doesn\'t make public Wi-Fi fully safe'
    ],
    tip: 'Avoid accessing your bank account or entering passwords on public Wi-Fi. Use a VPN if you must use public networks. Look for HTTPS in the address bar at all times.'
  },
  {
    icon: '🔄',
    title: 'Unpatched software',
    summary: 'Running outdated software with known security holes gives attackers an easy way in.',
    risk: 'low',
    detail: `Many cyberattacks exploit vulnerabilities in outdated software. When companies release updates, they often include security patches. Ignoring these updates leaves you exposed.`,
    bullets: [
      'Operating system updates fix known security holes',
      'Browser updates patch vulnerabilities used in drive-by attacks',
      'App updates close loopholes attackers actively exploit',
      'Pirated Windows copies in Ghana often can\'t receive updates'
    ],
    tip: 'Enable automatic updates on your phone, laptop, and all apps. If you\'re using a pirated copy of Windows, consider getting a genuine license — the security risk is significant.'
  }
];

const questions = [
  { q: "What is phishing?", opts: ["A type of fishing sport", "A cyberattack using fake emails or websites to steal information", "A software virus that deletes files", "A method of encrypting data"], ans: 1, exp: "Phishing uses deceptive emails or websites to trick people into revealing passwords, credit card numbers, or other sensitive information." },
  { q: "Which of these is the strongest password?", opts: ["password123", "Prince2004", "Gh@na#Acc$ra99!", "12345678"], ans: 2, exp: "A strong password is long, uses uppercase, lowercase, numbers, and special characters, and avoids personal information." },
  { q: "What does 2FA (Two-Factor Authentication) do?", opts: ["Doubles your internet speed", "Adds a second layer of security beyond just a password", "Encrypts your hard drive", "Scans for viruses automatically"], ans: 1, exp: "2FA requires a second form of verification (like a code sent to your phone), so even if your password is stolen, attackers can't get in." },
  { q: "You receive an email from 'GCB Bank' asking you to click a link and verify your account urgently. What should you do?", opts: ["Click the link immediately and enter your details", "Forward it to your friends", "Delete it and contact the bank directly through their official number", "Reply to the email asking if it's genuine"], ans: 2, exp: "This is a classic phishing tactic. Always contact the organization directly using verified contact details, never through links in suspicious emails." },
  { q: "What is malware?", opts: ["Software that improves computer performance", "Malicious software designed to harm or gain unauthorized access to systems", "A type of firewall", "Software that encrypts your Wi-Fi"], ans: 1, exp: "Malware (malicious software) includes viruses, ransomware, spyware, and trojans — all designed to damage or gain unauthorized access to systems." },
  { q: "Why is using public Wi-Fi at a mall risky?", opts: ["It is too slow", "Attackers can intercept your data on unsecured networks", "It uses too much battery", "It automatically downloads viruses"], ans: 1, exp: "On unsecured public Wi-Fi, attackers can perform man-in-the-middle attacks to intercept your data, especially if the sites you visit don't use HTTPS." },
  { q: "What is social engineering in cybersecurity?", opts: ["Building security systems for social media", "Manipulating people psychologically to reveal confidential information", "Encrypting social media messages", "A type of antivirus software"], ans: 1, exp: "Social engineering exploits human psychology rather than technical flaws — attackers manipulate people into giving up passwords or granting access." },
  { q: "Someone calls you claiming to be from your company's IT department and asks for your password to fix an issue. What do you do?", opts: ["Give them your password — it's IT support!", "Ask them to hold while you verify their identity through official channels", "Give them a fake password", "Ignore the call"], ans: 1, exp: "No legitimate IT department ever needs your password. Always verify identity through official channels before sharing any sensitive information." },
  { q: "What is ransomware?", opts: ["Software that speeds up your computer", "A type of phishing email", "Malware that locks your files and demands payment to unlock them", "A secure backup tool"], ans: 2, exp: "Ransomware encrypts your files and demands a ransom (usually cryptocurrency) for the decryption key. Prevention through backups and security updates is key." },
  { q: "Which of the following is a safe practice when using passwords?", opts: ["Use the same password for all accounts for easy remembering", "Write your password on a sticky note on your monitor", "Use a unique, strong password for each account", "Use your phone number as your password"], ans: 2, exp: "Using unique passwords for each account means a breach on one site doesn't compromise your other accounts. A password manager makes this easy." },
  { q: "What does HTTPS in a website URL indicate?", opts: ["The site is very fast", "The connection between your browser and the site is encrypted", "The site is a government website", "The site is free to use"], ans: 1, exp: "HTTPS means the data transmitted between your browser and the website is encrypted, making it harder for attackers to intercept. Always look for HTTPS, especially when entering sensitive data." },
  { q: "What is the best way to keep your devices protected from known vulnerabilities?", opts: ["Restart your device weekly", "Keep your software and operating system up to date", "Change your wallpaper regularly", "Use a VPN at all times"], ans: 1, exp: "Software updates frequently include security patches for known vulnerabilities. Keeping your OS and apps updated closes security holes that attackers exploit." },
  { q: "You find a USB drive in the UPSA car park. What should you do?", opts: ["Plug it into your computer to see what's on it", "Give it to a trusted authority without plugging it in", "Format it and use it yourself", "Share it among friends to find the owner"], ans: 1, exp: "This is a baiting attack. Attackers leave infected USB drives hoping someone will plug them in. Never connect an unknown USB drive to your computer." },
  { q: "What is a VPN used for?", opts: ["Making your internet faster", "Encrypting your internet traffic and masking your IP address", "Protecting against viruses", "Automatically backing up your files"], ans: 1, exp: "A VPN (Virtual Private Network) encrypts your internet connection and hides your IP address, which is especially useful on public Wi-Fi." },
  { q: "Which of these is NOT a good cybersecurity habit?", opts: ["Enabling automatic software updates", "Using different passwords for different accounts", "Sharing your password with a trusted friend for safekeeping", "Locking your screen when you leave your computer"], ans: 2, exp: "You should never share your password with anyone, even trusted friends. If they're compromised or you have a falling out, your accounts are at risk." }
];

// ── STATE ──────────────────────────────────────────────────────────────────
let currentQ = 0;
let score = 0;
let answered = false;
let wrongTopics = [];

// ── NAVIGATION ─────────────────────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  window.scrollTo(0,0);
  if (name === 'dashboard') {
    if (!adminLoggedIn) {
      document.getElementById('admin-gate-wrap').style.display = 'block';
      document.getElementById('admin-dashboard-wrap').style.display = 'none';
    } else {
      document.getElementById('admin-gate-wrap').style.display = 'none';
      document.getElementById('admin-dashboard-wrap').style.display = 'block';
      refreshDashboard();
    }
  }
}

// ── THREATS ────────────────────────────────────────────────────────────────
function renderThreats() {
  const grid = document.getElementById('threat-grid');
  grid.innerHTML = threats.map((t, i) => `
    <div class="threat-card" onclick="openModal(${i})">
      <div class="threat-icon">${t.icon}</div>
      <h3>${t.title}</h3>
      <p>${t.summary}</p>
      <span class="threat-badge badge-${t.risk}">${t.risk === 'high' ? 'High risk' : t.risk === 'med' ? 'Medium risk' : 'Awareness'}</span>
    </div>
  `).join('');
}

function openModal(i) {
  const t = threats[i];
  document.getElementById('modal-title').textContent = t.icon + '  ' + t.title;
  document.getElementById('modal-body').innerHTML = `
    <p>${t.detail}</p>
    <p><strong style="color:var(--text)">How it works:</strong></p>
    <ul>${t.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="modal-tip">
      <div class="modal-tip-label">// How to protect yourself</div>
      <p>${t.tip}</p>
    </div>
  `;
  document.getElementById('threat-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('threat-modal').classList.remove('open');
}

document.getElementById('threat-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ── PASSWORD CHECKER ───────────────────────────────────────────────────────
function checkPassword(val) {
  const criteria = {
    'c-length': val.length >= 8,
    'c-upper': /[A-Z]/.test(val),
    'c-lower': /[a-z]/.test(val),
    'c-number': /[0-9]/.test(val),
    'c-symbol': /[^A-Za-z0-9]/.test(val),
    'c-long': val.length >= 12
  };
  let met = Object.values(criteria).filter(Boolean).length;
  Object.entries(criteria).forEach(([id, ok]) => {
    const el = document.getElementById(id);
    if (ok) el.classList.add('met'); else el.classList.remove('met');
  });
  const fill = document.getElementById('strength-fill');
  const label = document.getElementById('strength-text');
  if (!val) { fill.style.width = '0%'; fill.style.background = ''; label.textContent = '—'; label.style.color = 'var(--muted)'; return; }
  const pct = Math.round((met / 6) * 100);
  fill.style.width = pct + '%';
  if (pct <= 33) { fill.style.background = 'var(--red)'; label.textContent = 'Weak'; label.style.color = 'var(--red)'; }
  else if (pct <= 66) { fill.style.background = 'var(--amber)'; label.textContent = 'Fair'; label.style.color = 'var(--amber)'; }
  else if (pct < 100) { fill.style.background = 'var(--cyan)'; label.textContent = 'Good'; label.style.color = 'var(--cyan)'; }
  else { fill.style.background = 'var(--green)'; label.textContent = 'Strong ✓'; label.style.color = 'var(--green)'; }
}

function togglePw() {
  const input = document.getElementById('pw-input');
  input.type = input.type === 'password' ? 'text' : 'password';
}

function checkRegPw(val) {
  const criteria = [val.length >= 8, /[A-Z]/.test(val), /[0-9]/.test(val), /[^A-Za-z0-9]/.test(val), val.length >= 12];
  const met = criteria.filter(Boolean).length;
  const bar = document.getElementById('reg-pw-bar');
  const pct = (met / 5) * 100;
  bar.style.width = pct + '%';
  if (pct <= 40) bar.style.background = 'var(--red)';
  else if (pct <= 70) bar.style.background = 'var(--amber)';
  else bar.style.background = 'var(--green)';
}

// ── QUIZ ───────────────────────────────────────────────────────────────────
function renderQuestion() {
  const q = questions[currentQ];
  document.getElementById('q-counter').textContent = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById('q-score-live').textContent = `Score: ${score}`;
  document.getElementById('q-num').textContent = `Question ${String(currentQ + 1).padStart(2, '0')}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('quiz-progress').style.width = ((currentQ / questions.length) * 100) + '%';

  const opts = document.getElementById('q-options');
  const letters = ['A','B','C','D'];
  opts.innerHTML = q.opts.map((o, i) => `
    <button class="option-btn" onclick="selectAnswer(${i})" id="opt-${i}">
      <span class="option-letter">${letters[i]}</span>
      ${o}
    </button>
  `).join('');

  document.getElementById('q-feedback').className = 'feedback-box';
  document.getElementById('q-feedback').textContent = '';
  document.getElementById('next-btn').style.display = 'none';
  answered = false;
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  const q = questions[currentQ];
  const isCorrect = idx === q.ans;
  if (isCorrect) {
    score++;
    document.getElementById(`opt-${idx}`).classList.add('correct');
  } else {
    document.getElementById(`opt-${idx}`).classList.add('wrong');
    document.getElementById(`opt-${q.ans}`).classList.add('correct');
    wrongTopics.push(currentQ);
  }
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  const fb = document.getElementById('q-feedback');
  fb.className = 'feedback-box show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  fb.innerHTML = (isCorrect ? '✓ Correct! ' : '✗ Not quite. ') + q.exp;
  document.getElementById('next-btn').style.display = 'block';
  document.getElementById('q-score-live').textContent = `Score: ${score}`;
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= questions.length) { showResults(); return; }
  renderQuestion();
}


function showResults() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('results-container').style.display = 'block';
  const pct = Math.round((score / questions.length) * 100);
  document.getElementById('result-score-text').textContent = pct + '%';

  let label, desc, grade, color, emoji;
  if (pct >= 90) { label = 'Cybersecurity Expert 🏆'; desc = 'Outstanding! You have excellent cybersecurity awareness. You can help educate others around you.'; grade = 'A'; color = 'var(--green)'; emoji = '🏆'; }
  else if (pct >= 75) { label = 'Security Savvy 💪'; desc = 'Great job! You have solid cybersecurity knowledge with just a few areas to brush up on.'; grade = 'B'; color = 'var(--cyan)'; emoji = '💪'; }
  else if (pct >= 55) { label = 'Getting There 📚'; desc = 'You have a basic understanding but there are important gaps. Review the learn section to improve.'; grade = 'C'; color = 'var(--amber)'; emoji = '📚'; }
  else { label = 'Needs Improvement ⚠️'; desc = 'You are at risk of falling for common cyberattacks. Please go through the learning module carefully.'; grade = 'D'; color = 'var(--red)'; emoji = '⚠️'; }

  document.getElementById('result-score-text').style.color = color;
  document.getElementById('result-label').textContent = label;
  document.getElementById('result-desc').textContent = desc;
  document.getElementById('bd-correct').textContent = score + ' / ' + questions.length;
  document.getElementById('bd-wrong').textContent = (questions.length - score) + ' / ' + questions.length;
  document.getElementById('bd-total').textContent = questions.length;
  document.getElementById('bd-grade').textContent = grade;
  document.getElementById('result-emoji').textContent = emoji;

  // Save to participant store
  const regName = document.getElementById('reg-name') ? document.getElementById('reg-name').value.trim() : '';
  const regOrg = document.getElementById('reg-org') ? document.getElementById('reg-org').value.trim() : '';
  const regRole = document.getElementById('reg-role') ? document.getElementById('reg-role').value : '';
  saveParticipant({ name: regName || 'Anonymous', org: regOrg || '—', role: regRole || '—', score, pct, grade });

  const tipMap = [
    { topic: 'phishing', tip: 'Learn to spot phishing emails — check sender addresses, hover over links, and never enter details on sites you reached via email.' },
    { topic: 'password strength', tip: 'Use the password checker tool to build stronger passwords. Aim for 12+ characters with mixed types.' },
    { topic: '2FA', tip: 'Enable two-factor authentication on your email, social media, and banking apps right now.' },
    { topic: 'phishing response', tip: 'When in doubt about an email or message, contact the sender through official, verified channels directly.' },
    { topic: 'malware', tip: 'Install a reputable antivirus and avoid downloading software from unofficial sources.' },
    { topic: 'public Wi-Fi', tip: 'Use a VPN on public Wi-Fi. Never access banking or sensitive accounts on unsecured networks.' },
    { topic: 'social engineering', tip: 'Always verify someone\'s identity before sharing sensitive info — even if they seem to be from IT or management.' },
    { topic: 'impersonation calls', tip: 'Hang up and call back the organization directly using their published number when you receive suspicious calls.' },
    { topic: 'ransomware', tip: 'Back up important files to an external drive or cloud service regularly. This is your best defense against ransomware.' },
    { topic: 'password hygiene', tip: 'Use a free password manager like Bitwarden to generate and store unique passwords for every account.' },
    { topic: 'HTTPS', tip: 'Always check for HTTPS in the URL bar, especially on login pages and shopping sites.' },
    { topic: 'software updates', tip: 'Turn on automatic updates for your phone, laptop, and all apps to stay protected.' },
    { topic: 'USB safety', tip: 'Never plug in a USB drive you found or received from an unknown source without scanning it first.' },
    { topic: 'VPN usage', tip: 'Consider getting a free or paid VPN for use on public networks. Proton VPN offers a free tier.' },
    { topic: 'password sharing', tip: 'Never share passwords — use shared accounts or permission systems instead.' }
  ];

  const tipsEl = document.getElementById('result-tips');
  const tipsToShow = wrongTopics.length > 0
    ? wrongTopics.slice(0, 5).map(i => tipMap[i])
    : tipMap.slice(0, 3);

  tipsEl.innerHTML = tipsToShow.map(t => `
    <div class="tip-item">
      <span class="tip-icon">→</span>
      <span>${t.tip}</span>
    </div>
  `).join('');
}

function restartQuiz() {
  currentQ = 0; score = 0; answered = false; wrongTopics = [];
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('results-container').style.display = 'none';
  renderQuestion();
}

// ── REGISTER ───────────────────────────────────────────────────────────────
function handleRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const role = document.getElementById('reg-role').value;
  if (!name || !email || !role) { alert('Please fill in all required fields.'); return; }
  if (!email.includes('@')) { alert('Please enter a valid email address.'); return; }
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('register-success').style.display = 'block';
}


// ── ADMIN & DASHBOARD ──────────────────────────────────────────────────────
const ADMIN_PASSWORD = 'admin123';
let adminLoggedIn = false;
let activeFilter = 'all';

// In-memory participant store (persists during session)
let participants = [];

function adminLogin() {
  const pw = document.getElementById('admin-pw-input').value;
  if (pw === ADMIN_PASSWORD) {
    adminLoggedIn = true;
    document.getElementById('admin-gate-wrap').style.display = 'none';
    document.getElementById('admin-dashboard-wrap').style.display = 'block';
    refreshDashboard();
  } else {
    document.getElementById('admin-error').textContent = 'Incorrect password. Try again.';
    document.getElementById('admin-pw-input').value = '';
  }
}

function adminLogout() {
  adminLoggedIn = false;
  document.getElementById('admin-gate-wrap').style.display = 'block';
  document.getElementById('admin-dashboard-wrap').style.display = 'none';
  document.getElementById('admin-pw-input').value = '';
  document.getElementById('admin-error').textContent = '';
}

function saveParticipant(data) {
  participants.push({
    id: participants.length + 1,
    name: data.name || 'Anonymous',
    org: data.org || '—',
    role: data.role || '—',
    score: data.score,
    pct: data.pct,
    grade: data.grade,
    date: new Date().toLocaleString('en-GB', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' })
  });
}

function getGradeColor(g) {
  return g === 'A' ? 'var(--green)' : g === 'B' ? 'var(--cyan)' : g === 'C' ? 'var(--amber)' : 'var(--red)';
}

function refreshDashboard() {
  const total = participants.length;
  document.getElementById('kpi-total').textContent = total;

  if (total === 0) {
    document.getElementById('kpi-avg').textContent = '—';
    document.getElementById('kpi-topgrade').textContent = '0';
    document.getElementById('kpi-atrisk').textContent = '0';
  } else {
    const avg = Math.round(participants.reduce((s, p) => s + p.pct, 0) / total);
    document.getElementById('kpi-avg').textContent = avg + '%';
    document.getElementById('kpi-topgrade').textContent = participants.filter(p => p.grade === 'A').length;
    document.getElementById('kpi-atrisk').textContent = participants.filter(p => p.grade === 'D').length;
  }

  renderGradeChart();
  renderRoleChart();
  renderTable();
}

function renderGradeChart() {
  const grades = ['A','B','C','D'];
  const colors = ['var(--green)','var(--cyan)','var(--amber)','var(--red)'];
  const counts = grades.map(g => participants.filter(p => p.grade === g).length);
  const max = Math.max(...counts, 1);
  const chart = document.getElementById('grade-chart');
  chart.innerHTML = grades.map((g, i) => {
    const h = Math.round((counts[i] / max) * 90);
    return `<div class="grade-bar-wrap">
      <div class="grade-bar-count" style="color:${colors[i]}">${counts[i]}</div>
      <div class="grade-bar" style="height:${Math.max(h,4)}px;background:${colors[i]};opacity:0.85;"></div>
      <div class="grade-bar-label">${g}</div>
    </div>`;
  }).join('');
}

function renderRoleChart() {
  const roleMap = {};
  participants.forEach(p => { roleMap[p.role] = (roleMap[p.role] || 0) + 1; });
  const total = participants.length || 1;
  const roles = Object.entries(roleMap).sort((a,b) => b[1]-a[1]);
  const el = document.getElementById('role-chart');
  if (roles.length === 0) {
    el.innerHTML = '<p style="color:var(--muted);font-size:13px;">No data yet.</p>';
    return;
  }
  el.innerHTML = roles.map(([role, count]) => {
    const pct = Math.round((count / total) * 100);
    return `<div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
        <span>${role}</span><span style="color:var(--cyan);font-family:var(--font-mono)">${count} (${pct}%)</span>
      </div>
      <div style="height:6px;background:var(--panel2);border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:var(--cyan);opacity:0.7;border-radius:3px;transition:width 0.4s;"></div>
      </div>
    </div>`;
  }).join('');
}

function filterTable(grade, btn) {
  activeFilter = grade;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTable();
}

function renderTable() {
  const search = (document.getElementById('dash-search')?.value || '').toLowerCase();
  let rows = participants.filter(p => {
    const matchFilter = activeFilter === 'all' || p.grade === activeFilter;
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.org.toLowerCase().includes(search);
    return matchFilter && matchSearch;
  });

  const tbody = document.getElementById('dash-tbody');
  const empty = document.getElementById('dash-empty');
  const count = document.getElementById('table-count');

  if (rows.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    count.textContent = '';
    return;
  }

  empty.style.display = 'none';
  count.textContent = `Showing ${rows.length} of ${participants.length} participant${participants.length !== 1 ? 's' : ''}`;

  tbody.innerHTML = rows.map((p, i) => `
    <tr>
      <td style="color:var(--muted);font-family:var(--font-mono);font-size:12px;">${i+1}</td>
      <td style="font-weight:500;">${escHtml(p.name)}</td>
      <td style="color:var(--muted);">${escHtml(p.org)}</td>
      <td style="color:var(--muted);font-size:13px;">${escHtml(p.role)}</td>
      <td>
        <div style="font-family:var(--font-mono);font-size:13px;">${p.pct}%</div>
        <div class="score-bar-mini"><div class="score-fill-mini" style="width:${p.pct}%;background:${getGradeColor(p.grade)};"></div></div>
      </td>
      <td><span class="grade-pill grade-${p.grade}">${p.grade}</span></td>
      <td style="color:var(--muted);font-size:13px;font-family:var(--font-mono);">${p.date}</td>
    </tr>
  `).join('');
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function exportCSV() {
  if (participants.length === 0) { alert('No data to export yet.'); return; }
  const header = ['#','Name','Organization','Role','Score (%)','Grade','Date'];
  const rows = participants.map(p => [p.id, p.name, p.org, p.role, p.pct, p.grade, p.date]);
  const csv = [header, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'CyberShieldGH_participants.csv';
  a.click();
}

function addSampleData() {
  const names = ['Kofi Mensah','Ama Owusu','Kwame Asante','Akosua Boateng','Yaw Darko','Abena Sarpong','Kweku Frimpong','Efua Antwi','Nana Adjei','Adjoa Tetteh'];
  const orgs = ['UPSA','Legon','KNUST','GCB Bank','MTN Ghana','Vodafone','Ministry of Finance','Zenith Bank','UG Business School','GIMPA'];
  const roles = ['Student','Student','IT Professional','Employee','Student','Business owner','Employee','Student','IT Professional','Student'];
  const scores = [14,11,13,8,12,9,7,15,13,10];
  names.forEach((name, i) => {
    const pct = Math.round((scores[i] / 15) * 100);
    const grade = pct >= 90 ? 'A' : pct >= 75 ? 'B' : pct >= 55 ? 'C' : 'D';
    participants.push({
      id: participants.length + 1,
      name, org: orgs[i], role: roles[i],
      score: scores[i], pct, grade,
      date: new Date(Date.now() - Math.random() * 7 * 86400000).toLocaleString('en-GB', {day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})
    });
  });
  refreshDashboard();
}

// Dashboard logic is handled inside showPage() above

function quickAdminLogin() {
  document.getElementById('admin-pw-input').value = 'admin123';
  adminLogin();
}

// ── INIT ───────────────────────────────────────────────────────────────────
renderThreats();
renderQuestion();