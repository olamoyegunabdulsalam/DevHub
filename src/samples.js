// Builds a sample of the expected result for each assignment (a guide, not the only right answer).
const PHOTO = 'images/event.jpg'
const SECS = [['home', 'Home'], ['about', 'About NACOS'], ['events', 'Events'], ['learning', 'Learning Resources'], ['team', 'Developers Team'], ['projects', 'Projects'], ['contact', 'Contact']]
export function sample(n) {
  const img = `<img src="${PHOTO}" alt="Students at a NACOS workshop" width="320">`
  const head = (extra) => `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n${n >= 5 ? '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' : ''}<title>NACOS KolaDaisi University Chapter</title>\n${n >= 3 ? '<link rel="stylesheet" href="styles.css">\n' : ''}</head>\n<body>\n${extra}\n${n >= 6 ? '<script src="script.js"></script>\n' : ''}</body>\n</html>`
  let html
  if (n === 1) {
    html = head(`<h1>NACOS KolaDaisi University Chapter</h1>\n<p>We bring computing students together to learn, build and collaborate.</p>\n${img}\n<h2>What we do</h2>\n<ul><li>Weekly Saturday classes</li><li>Project showcase</li></ul>\n<h2>How to join</h2>\n<ol><li>Attend a class</li><li>Join the developers team</li></ol>\n<p><a href="https://www.w3schools.com/html/">Learn HTML on W3Schools</a></p>`)
  } else {
    const body = {
      home: `<h1>NACOS KolaDaisi University Chapter</h1>\n<p>We bring computing students together to learn, build and collaborate.</p>${n >= 7 ? '\n<button id="theme-btn">Change theme</button>' : ''}`,
      about: '<h2>About NACOS</h2>\n<p>The Nigerian Association of Computing Students supports students in computing.</p>',
      events: `<h2>Events</h2>\n${img}\n${n >= 7 ? '<ul id="event-list"></ul>' : '<ul><li>Weekly Saturday classes</li><li>Project showcase</li></ul>'}\n<ol><li>Attend a class</li><li>Join the developers team</li></ol>\n<table>\n<tr><th>Date</th><th>Event</th><th>Venue</th></tr>\n<tr><td>Saturday</td><td>Web Development class</td><td>KDU campus</td></tr>\n</table>`,
      learning: `<h2>Learning Resources</h2>\n<p>Tutorials for HTML, CSS and JavaScript.</p>${n >= 8 ? '\n<div class="acc">\n<button class="acc-btn">What will I learn?</button>\n<p class="acc-panel" hidden>HTML, CSS and basic JavaScript.</p>\n</div>' : ''}`,
      team: '<h2>Developers Team</h2>\n<p>Members who build useful digital projects together.</p>',
      projects: '<h2>Projects</h2>\n<p>Projects built by our members.</p>',
      contact: `<h2>Contact</h2>\n<form>\n<label for="name">Name</label>\n<input type="text" id="name" name="name">\n<label for="email">Email</label>\n<input type="email" id="email" name="email">\n<label for="msg">Message</label>\n<textarea id="msg" name="msg"></textarea>\n<button type="submit">Send</button>${n >= 8 ? '\n<p id="form-msg"></p>' : ''}\n</form>`
    }
    const links = SECS.map(([id, l]) => `<li><a href="#${id}">${l}</a></li>`).join('\n')
    const nav = `<nav>\n${n >= 8 ? '<button id="menu-btn" aria-expanded="false">Menu</button>\n' : ''}<ul${n >= 8 ? ' id="menu"' : ''}>\n${links}\n</ul>\n</nav>`
    html = head(`<header>\n${nav}\n</header>\n<main>\n${SECS.map(([id]) => `<section id="${id}">\n${body[id]}\n</section>`).join('\n')}\n</main>\n<footer>\n<p>© NACOS KolaDaisi University Chapter</p>\n</footer>`)
  }
  let css = ''
  if (n >= 3) css += 'body{font-family:Arial,sans-serif;line-height:1.6;color:#17240a;background:#f7fee7}\nh1,h2{color:#4d7c0f}\na{color:#17240a}\n'
  if (n >= 4) css += 'section{padding:24px;margin:16px 0;border:1px solid #bef264;border-radius:8px;background:#fff}\nnav ul{display:flex;gap:16px;list-style:none;padding:0}\nmain{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}\nheader{position:sticky;top:0;background:#a3e635}\n'
  if (n >= 5) css += 'img{max-width:100%;height:auto}\n'
  if (n >= 5 && n < 8) css += '@media (max-width:600px){\n nav ul{flex-direction:column}\n}\n'
  if (n >= 7) css += 'body.dark{background:#17240a;color:#f7fee7}\nbody.dark section{background:#2b3f12}\n'
  if (n >= 8) css += '#menu-btn{display:none}\n.acc-btn{width:100%;text-align:left;padding:10px;background:#ecfccb;border:0;cursor:pointer}\n.acc-panel{padding:10px}\n@media (max-width:600px){\n #menu-btn{display:block}\n #menu{display:none;flex-direction:column}\n #menu.open{display:flex}\n}\n'
  let js = ''
  if (n === 6) js = "const chapter = 'NACOS KDU'\nconst year = 2026\n\nfunction greeting(hour) {\n  if (hour < 12) { return 'Good morning' }\n  else if (hour < 18) { return 'Good afternoon' }\n  return 'Good evening'\n}\n\nconsole.log(greeting(new Date().getHours()) + ', ' + chapter + ' ' + year)"
  if (n >= 7) js = "const events = ['Weekly Saturday classes', 'Project showcase', 'Developers meet-up']\nconst list = document.getElementById('event-list')\nfor (const e of events) {\n  const li = document.createElement('li')\n  li.textContent = e\n  list.appendChild(li)\n}\ndocument.getElementById('theme-btn').addEventListener('click', () => {\n  document.body.classList.toggle('dark')\n})"
  if (n >= 8) js += "\n\nconst btn = document.getElementById('menu-btn')\nconst menu = document.getElementById('menu')\nbtn.addEventListener('click', () => {\n  const open = menu.classList.toggle('open')\n  btn.setAttribute('aria-expanded', open)\n})\n\ndocument.querySelectorAll('.acc-btn').forEach((b) => {\n  b.addEventListener('click', () => {\n    const p = b.nextElementSibling\n    p.hidden = !p.hidden\n  })\n})\n\nconst form = document.querySelector('form')\nform.addEventListener('submit', (e) => {\n  e.preventDefault()\n  const name = document.getElementById('name').value.trim()\n  const email = document.getElementById('email').value.trim()\n  const msg = document.getElementById('form-msg')\n  if (!name || !email.includes('@')) { msg.textContent = 'Please enter your name and a valid email.'; return }\n  msg.textContent = 'Thank you, ' + name + '!'\n})"
  const note = n === 6 ? 'This week’s result is printed in the browser console (press F12, then Console). The page itself looks like your Week 5 work.' : n >= 7 ? 'This preview is interactive. Try the buttons' + (n >= 8 ? ', the menu on a narrow screen, the accordion and the form.' : '.') : ''
  return { html, css, js, note }
}
export const tree = (n) => n < 3 ? 'nacos-website/\n├─ index.html\n└─ images/' : n < 6 ? 'nacos-website/\n├─ index.html\n├─ styles.css\n└─ images/' : 'nacos-website/\n├─ index.html\n├─ styles.css\n├─ script.js\n└─ images/'
export const previewDoc = ({ html, css, js }) => {
  const ph = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="320" height="120"><rect width="100%" height="100%" fill="#ecfccb"/><text x="50%" y="55%" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#17240a">Your event photo</text></svg>')
  return html.replace(PHOTO, () => ph).replace('<link rel="stylesheet" href="styles.css">', () => `<style>${css}</style>`).replace('<script src="script.js"></script>', () => `<script>${js}</script>`)
}
