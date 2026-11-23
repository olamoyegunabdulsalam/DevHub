// Builds a sample submission for each assignment (a guide, not the only right answer).
const PHOTO = 'images/event.jpg'
export function sample(n) {
  const S = n >= 4
  const T = (t, a, i) => (S ? `<${t}${a}>${i}</${t}>` : `<div${a}>${i}</div>`)
  const secs = n >= 5
    ? [['home', 'Home'], ['about', 'About NACOS'], ['events', 'Events'], ['learning', 'Learning Resources'], ['team', 'Developers Team'], ['projects', 'Projects'], ['contact', 'Contact']]
    : [['home', 'Home'], ['about', 'About NACOS'], ['events', 'Events'], ['contact', 'Contact']]
  const events = n >= 3
    ? `<h2>Events</h2>\n<img src="${PHOTO}" alt="Students at a NACOS workshop" width="320">\n<ul><li>Weekly Saturday classes</li><li>Project showcase</li></ul>\n<ol><li>Attend a class</li><li>Join the developers team</li></ol>\n<table>\n<tr><th>Date</th><th>Event</th><th>Venue</th></tr>\n<tr><td>Saturday</td><td>Web Development class</td><td>KDU campus</td></tr>\n</table>`
    : '<h2>Events</h2>\n<p>Our classes and events are listed here.</p>'
  const form = '<h2>Contact</h2>\n<form>\n<label for="name">Name</label>\n<input type="text" id="name" name="name">\n<label for="email">Email</label>\n<input type="email" id="email" name="email">\n<label for="msg">Message</label>\n<textarea id="msg" name="msg"></textarea>\n<button type="submit">Send</button>\n</form>'
  const body = {
    home: '<h1>NACOS KolaDaisi University Chapter</h1>\n<p>We bring computing students together to learn, build and collaborate.</p>',
    about: '<h2>About NACOS</h2>\n<p>The Nigerian Association of Computing Students supports students in computing.</p>',
    events, learning: '<h2>Learning Resources</h2>\n<p>Tutorials and videos for HTML and CSS.</p>',
    team: '<h2>Developers Team</h2>\n<p>Members who build useful digital projects together.</p>',
    projects: '<h2>Projects</h2>\n<p>Projects built by our members.</p>',
    contact: n >= 4 ? form : '<h2>Contact</h2>\n<p>Reach us through the chapter.</p>'
  }
  const nav = n >= 2 ? T('nav', '', `<ul>\n${secs.map(([id, l]) => `<li><a href="#${id}">${l}</a></li>`).join('\n')}\n</ul>`) : ''
  const main = n === 1 ? body.home : secs.map(([id]) => T('section', ` id="${id}"`, '\n' + body[id] + '\n')).join('\n')
  const html = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n${n >= 9 ? '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' : ''}<title>NACOS KolaDaisi University Chapter</title>\n${n >= 6 ? '<link rel="stylesheet" href="styles.css">\n' : ''}</head>\n<body>\n${S ? `<header>\n${nav}\n</header>\n<main>\n${main}\n</main>\n<footer>\n<p>© NACOS KolaDaisi University Chapter</p>\n</footer>` : nav + '\n' + main}\n</body>\n</html>`
  let c = ''
  if (n >= 6) c += 'body{font-family:Arial,sans-serif;line-height:1.6;color:#17240a;background:#f7fee7}\nh1,h2{color:#4d7c0f}\na{color:#17240a}\n'
  if (n >= 7) c += 'section{padding:24px;margin:16px 0;border:1px solid #bef264;border-radius:8px;background:#fff}\nimg{max-width:100%;height:auto}\n'
  if (n >= 8) c += 'nav ul{display:flex;gap:16px;list-style:none;padding:0}\nmain{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}\n'
  if (n >= 9) c += '@media (max-width:600px){\n nav ul{flex-direction:column}\n main{padding:0 8px}\n}\n'
  return { html, css: c.trim() }
}
export const tree = (n) => n < 3 ? 'nacos-website/\n└─ index.html' : n < 6 ? 'nacos-website/\n├─ index.html\n└─ images/' : 'nacos-website/\n├─ index.html\n├─ styles.css\n└─ images/'
export const previewDoc = ({ html, css }) => {
  const ph = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="320" height="120"><rect width="100%" height="100%" fill="#ecfccb"/><text x="50%" y="55%" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#17240a">Your event photo</text></svg>')
  return html.replace(PHOTO, ph).replace('<link rel="stylesheet" href="styles.css">', `<style>${css}</style>`)
}
