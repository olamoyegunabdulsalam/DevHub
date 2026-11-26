import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { ExternalLink, BookOpen, Video, PenLine, ClipboardList, Home as HomeIcon, Map as MapIcon, Library, MoreHorizontal, X, MessageCircle, Instagram, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import { html, css, js, weeks, assignments, milestones, resources, wUrl, videos } from './data.js'
import { ORG, WHATSAPP_URL, EMAIL } from './config.js'
import Submit from './Submit.jsx'
import Videos, { Player } from './Videos.jsx'
import Feedback from './Feedback.jsx'
import Home from './Home.jsx'
import { sample, tree, previewDoc } from './samples.js'

const nav = [['/', 'Home'], ['/roadmap', 'Learning Roadmap'], ['/resources', 'Resources'], ['/assignments', 'Assignments'], ['/final-project', 'Final Project'], ['/about', 'About the Programme']]
const tabs = [['/', 'Home', HomeIcon], ['/roadmap', 'Roadmap', MapIcon], ['/resources', 'Resources', Library], ['/assignments', 'Tasks', ClipboardList]]
const socials = [[MessageCircle, 'Developers Team WhatsApp', WHATSAPP_URL], [Mail, 'Email', EMAIL && `mailto:${EMAIL}`]]
const Ext = ({ href, children, cls = 'btn-o' }) => <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}<ExternalLink size={14} aria-hidden /></a>
const Page = ({ title, intro, children }) => <div className="mx-auto max-w-4xl px-4 py-8"><h1 className="text-2xl font-bold md:text-3xl">{title}</h1>{intro && <p className="mt-2 max-w-2xl text-ink/70">{intro}</p>}<div className="mt-6">{children}</div></div>

function Logo() {
  const [bad, setBad] = useState(false)
  return bad ? <span className="grid h-16 w-16 place-items-center rounded bg-ink text-3xl font-bold text-brand sm:h-20 sm:w-20">N</span>
    : <img src="/nacos-logo.webp" alt="NACOS logo" className="h-16 w-16 object-contain sm:h-20 sm:w-20" onError={() => setBad(true)} />
}

function Header() {
  const link = ({ isActive }) => `rounded px-3 py-2 text-sm ${isActive ? 'bg-ink/10 font-bold' : 'text-ink/70 hover:text-ink'}`
  return <header className="sticky top-0 z-20 bg-brand text-ink"><div className="mx-auto flex max-w-6xl items-center px-4 py-3 lg:justify-between">
    <Link to="/" className="flex items-center"><Logo /><span className="leading-tight"><span className="block text-lg font-bold">DevHub</span><span className="hidden text-xs sm:block">NACOS Koladaisi University Chapter</span></span></Link>
    <nav aria-label="Main" className="hidden lg:flex">{nav.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={link}>{l}</NavLink>)}</nav></div></header>
}

function TabBar({ onMore }) {
  const cls = ({ isActive }) => `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs ${isActive ? 'bg-brand-100 font-bold text-ink' : 'text-ink/60'}`
  return <nav aria-label="App tabs" className="fixed inset-x-0 bottom-0 z-30 flex border-t border-ink/10 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
    {tabs.map(([to, l, I]) => <NavLink key={to} to={to} end={to === '/'} className={cls}><I size={22} />{l}</NavLink>)}
    <button onClick={onMore} className="flex flex-1 flex-col items-center gap-0.5 py-2 text-xs text-ink/60"><MoreHorizontal size={22} />More</button></nav>
}
function MoreSheet({ open, onClose, onFeedback }) {
  if (!open) return null
  const row = 'flex w-full items-center rounded-md px-3 py-3 text-left hover:bg-brand-100'
  return <div className="fixed inset-0 z-40 bg-ink/40 lg:hidden" onClick={onClose}><div className="absolute inset-x-0 bottom-0 rounded-t-xl bg-white p-4 pb-8" onClick={e => e.stopPropagation()}>
    <div className="mb-2 flex items-center justify-between"><p className="font-bold">More</p><button onClick={onClose} aria-label="Close"><X /></button></div>
    <Link onClick={onClose} className={row} to="/final-project">Final Project</Link><Link onClick={onClose} className={row} to="/videos">Video Tutorials</Link>
    <Link onClick={onClose} className={row} to="/about">About the Programme</Link>
    <button className={row} onClick={() => { onClose(); onFeedback() }}>Share feedback</button></div></div>
}
const Footer = () => <footer className="mt-12 bg-ink text-brand-100"><div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-2">
  <div><p className="text-lg font-bold text-brand">DevHub</p><p>NACOS KolaDaisi University Chapter</p>
    <p className="mt-3 max-w-sm text-sm">An official learning initiative supporting the NACOS Web Development Training Programme and the NACOS Developers Team.</p></div>
  <div className="text-sm"><ul className="grid grid-cols-2 gap-1">{nav.map(([to, l]) => <li key={to}><Link className="hover:text-brand" to={to}>{l}</Link></li>)}</ul>
    <div className="mt-4 flex gap-3">{socials.map(([I, l, u]) => u && <a key={l} href={u} target="_blank" rel="noopener noreferrer" aria-label={l}><I /></a>)}</div></div></div>
  <div className="border-t border-white/10 py-4 text-center text-xs"><p>Built by Abdulsalam Olamoyegun, Director of Innovation and Collaboration, NACOS KolaDaisi University Chapter.</p><p className="mt-1">© {new Date().getFullYear()} NACOS KolaDaisi University Chapter. All rights reserved.</p></div></footer>

function Sample({ n }) {
  const f = sample(n)
  return <section className="mt-6"><h2 className="font-bold">Sample of what to submit</h2>
    <p className="mt-1 text-sm text-ink/70">This is what your finished work should look like. Work out the code yourself using the lessons, and use your own text, images and design.</p>
    <pre className="mt-3 overflow-x-auto rounded-md bg-ink p-3 font-mono text-sm text-brand">{tree(n)}</pre>
    {f.note && <p className="mt-3 rounded-md bg-brand-100 p-3 text-sm">{f.note}</p>}
    <iframe title={`Sample result for assignment ${n}`} sandbox="allow-scripts" srcDoc={previewDoc(f)} className="mt-3 h-80 w-full rounded-md border border-ink/20 bg-white" /></section>
}

const lists = { html, css, js }
const names = { html: 'HTML', css: 'CSS', js: 'JavaScript' }
const Roadmap = () => <Page title="Learning Roadmap" intro="Nine weeks for absolute beginners: HTML, then CSS, then basic JavaScript, all applied to one NACOS website. Nothing is tracked, so go at your own pace. The calendar may shift around the December break and January examinations.">
  <div className="space-y-4">{weeks.map(w => { const first = w.track ? lists[w.track].findIndex(t => t[5] === w.n) : -1
    return <article key={w.n} className="card">
      <div className="flex items-center gap-2"><span className="text-sm font-bold text-brand-700">Week {w.n}</span><span className={`rounded-full px-2 py-0.5 text-xs font-bold ${w.tech === 'Project' ? 'bg-ink text-brand' : 'bg-brand'}`}>{w.tech}</span></div>
      <h2 className="mt-1 text-lg font-bold">{w.title}</h2>
      <p className="mt-3 text-sm font-medium">{w.track ? 'Topics' : 'Activities'}</p>
      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-ink/80 sm:columns-2">{w.topics.split(';').map(x => <li key={x}>{x}</li>)}</ul>
      <p className="mt-3 text-sm"><b>Expected outcome:</b> {w.outcome}</p>
      <div className="mt-4 flex flex-wrap gap-2">{first >= 0 && <Link className="btn-p" to={`/learn/${w.track}?t=${first}`}>Open Week {w.n} lessons</Link>}<Link className="btn-o" to={`/assignments/${w.n}`}>Assignment {w.n}</Link></div></article> })}</div></Page>

function Learn() {
  const { track } = useParams(); const k = track === 'css' || track === 'js' ? track : 'html'; const list = lists[k]
  const [sp, setSp] = useSearchParams(); const t = Math.min(Math.max(+sp.get('t') || 0, 0), list.length - 1)
  const [p, setP] = useState(0); useEffect(() => setP(0), [k, t])
  const [title, path, desc, obj, prac, a] = list[t]
  const vs = videos.filter(v => v.topic === title); const v = vs[Math.min(p, vs.length - 1)]
  const go = (n) => { setSp({ t: n }); window.scrollTo(0, 0) }
  return <Page title={`${names[k]} Tutorial`}>
    <div className="flex flex-wrap gap-2">{Object.keys(names).map(x => <Link key={x} to={`/learn/${x}`} className={x === k ? 'btn-p' : 'btn-o'}>{names[x]}</Link>)}</div>
    <label htmlFor="topic" className="sr-only">Choose a topic</label>
    <select id="topic" value={t} onChange={e => go(+e.target.value)} className="mt-4 w-full rounded-md border border-ink/20 bg-white px-3 py-2.5">{list.map((x, i) => <option key={x[0]} value={i}>Week {x[5]} · {x[0]}</option>)}</select>
    <p className="mt-6 text-sm font-bold text-brand-700">Week {a} · {names[k]}</p>
    <h2 className="text-xl font-bold">{title}</h2><p className="text-ink/70">{desc} You will: {obj.charAt(0).toLowerCase() + obj.slice(1)}</p>
    <Ext href={wUrl(path)} cls="btn-hl mt-4 w-full sm:w-auto"><BookOpen size={16} />Read this lesson on W3Schools</Ext>
    <h3 className="mt-6 font-bold">Video</h3>
    {vs.length > 1 && <div className="mt-2 flex flex-wrap gap-2">{vs.map((x, i) => <button key={x.key} onClick={() => setP(i)} className={i === p ? 'btn-p' : 'btn-o'}>{x.title}</button>)}</div>}
    {v ? <div className="mt-2"><Player v={v} /></div> : <div className="card mt-2 border-brand-600 bg-brand-100"><p className="font-bold">Video not available for this topic</p><p className="text-sm">W3Schools has no video for it. Read the lesson above instead.</p></div>}
    <div className="card mt-4 text-sm"><p><b>Practise:</b> {prac}</p><p className="mt-2"><b>Apply:</b> <Link className="underline" to={`/assignments/${a}`}>Assignment {a} — {assignments[a - 1].title}</Link></p></div>
    <div className="mt-4 flex justify-between"><button className="btn-o" disabled={t === 0} onClick={() => go(t - 1)}><ChevronLeft size={16} />Previous</button><button className="btn-p" disabled={t === list.length - 1} onClick={() => go(t + 1)}>Next topic<ChevronRight size={16} /></button></div></Page>
}

const Resources = () => <Page title="Resources" intro="Written lessons and exercises are your main material, with videos to support them. W3Schools links open in a new tab.">
  <div className="grid gap-3 sm:grid-cols-2">{resources.map(r => <div key={r.t} className="card flex flex-col"><p className="text-xs text-brand-700">{r.type}</p><h2 className="mt-1 font-bold">{r.t}</h2><p className="mt-1 flex-1 text-sm text-ink/70">{r.d}</p>
    <div className="mt-4">{r.to ? <Link className="btn-p" to={r.to}>Open Resource</Link> : <Ext href={r.u}>Open Resource</Ext>}</div></div>)}</div></Page>

const Assignments = () => <Page title="Weekly Assignments" intro="Every assignment adds to one project: the NACOS Website Frontend Prototype.">
  <div className="grid gap-3 sm:grid-cols-2">{assignments.map(a => <Link key={a.n} to={`/assignments/${a.n}`} className="card hover:border-brand-600"><p className="text-sm text-brand-700">Week {a.n}</p><h2 className="font-bold">{a.title}</h2><p className="text-sm text-ink/70">{a.outcome}</p></Link>)}</div></Page>

function Assignment() {
  const a = assignments[useParams().id - 1]
  if (!a) return <Page title="Assignment not found"><Link className="btn-p" to="/assignments">Back to assignments</Link></Page>
  const L = ({ h, items }) => <section className="mt-6"><h2 className="font-bold">{h}</h2><ul className="mt-2 list-disc space-y-1 pl-5 text-ink/80">{items.map(i => <li key={i}>{i}</li>)}</ul></section>
  return <Page title={`Assignment ${a.n}: ${a.title}`}><p className="text-sm text-brand-700">Week {a.n} · {a.topic}</p>
    <p className="mt-4"><b>Objective:</b> {a.objective}</p><L h="Concepts covered" items={a.concepts} /><L h="Instructions" items={a.tasks} />
    <L h="Requirements" items={[`Submit: ${a.submit}.`, 'Accepted files: ZIP, HTML, CSS or JS, up to 5 MB.', 'Build on your previous version of the NACOS website.']} />
    <p className="mt-6"><b>Expected outcome:</b> {a.outcome}</p>
    <Sample n={a.n} />
    <div className="mt-6 flex flex-wrap gap-2">{a.kinds.map(k => <Link key={k} className="btn-o" to={`/learn/${k}`}>{names[k]} Tutorial</Link>)}</div>
    <Link to={`/submit?assignment=${a.n}`} className="btn-p mt-6 w-full sm:w-auto">Submit Assignment</Link></Page>
}

const Final = () => <Page title="Final Project" intro="Build the NACOS Website Frontend Prototype with seven pages or sections: Home, About NACOS, Events, Learning Resources, Developers Team, Projects and Contact. Each week adds to it, and you present it in Week 9.">
  <div className="grid gap-3 md:grid-cols-3">{[['HTML', 'Structures the website, organises content and builds navigation and forms with semantic elements.'], ['CSS', 'Creates the visual design, styles navigation, sections and cards, and works on mobile, tablet and desktop.'], ['JavaScript', 'Adds a mobile menu, an accordion or tabs, basic form validation and one more interactive feature.']].map(([t, d]) => <div key={t} className="card"><h2 className="font-bold">{t}</h2><p className="mt-1 text-sm text-ink/70">{d}</p></div>)}</div>
  <h2 className="mb-3 mt-8 font-bold">Milestones</h2>
  <ol className="space-y-2">{milestones.map((m, i) => <li key={m}><Link to={`/assignments/${i + 1}`} className="card flex items-center gap-3 py-3 hover:border-brand-600"><span className="text-sm font-bold text-brand-700">Week {i + 1}</span>{m}</Link></li>)}</ol>
  <p className="mt-6 text-sm text-ink/60">React, backend development and APIs are not part of this programme.</p></Page>

const About = ({ onFeedback }) => <Page title="About the Programme"><div className="max-w-2xl space-y-4 text-ink/80">
  <p>The NACOS Web Development Training Programme is an initiative of the NACOS KolaDaisi University Chapter.</p>
  <p>It introduces students to practical web development through structured learning, recommended educational resources and progressive project-based assignments.</p>
  <p>The programme is designed for absolute beginners and runs for nine weeks. Students learn HTML, CSS and basic JavaScript, and apply them to one collaborative website.</p>
  <p>The long-term goal is to support the growth of a NACOS Developers Team that collaborates on useful digital projects.</p>
  <p className="font-medium text-ink">{ORG}</p></div>
  <section className="mt-10"><h2 className="text-xl font-bold">Join the Developers Team</h2><p className="mt-1 text-ink/70">Get updates, ask questions and work with other developers.</p>
    <div className="mt-4 grid gap-3 sm:grid-cols-3">{socials.map(([I, l, u]) => u ? <a key={l} href={u} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-3 hover:border-brand-600"><I className="text-brand-700" />{l}</a>
      : <div key={l} className="card flex items-center gap-3 text-ink/50"><I />{l}<span className="ml-auto text-xs">Link coming soon</span></div>)}</div></section>
  <section className="card mt-10"><h2 className="text-xl font-bold">Feedback, complaints or suggestions?</h2><p className="mt-1 text-ink/70">Tell the team what to fix or improve.</p><button className="btn-p mt-4" onClick={onFeedback}>Share feedback</button></section></Page>

export default function App() {
  const [more, setMore] = useState(false), [fb, setFb] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return <><Header /><main className="pb-20 lg:pb-0"><Routes>
    <Route path="/" element={<Home />} /><Route path="/roadmap" element={<Roadmap />} /><Route path="/learn/:track" element={<Learn />} />
    <Route path="/resources" element={<Resources />} /><Route path="/assignments" element={<Assignments />} /><Route path="/assignments/:id" element={<Assignment />} />
    <Route path="/videos" element={<Videos />} /><Route path="/submit" element={<Submit />} /><Route path="/final-project" element={<Final />} />
    <Route path="/about" element={<About onFeedback={() => setFb(true)} />} />
    <Route path="*" element={<Page title="Page not found"><Link className="btn-p" to="/">Go home</Link></Page>} /></Routes>
    <div className="pb-6 lg:pb-0"><Footer /></div></main>
    <TabBar onMore={() => setMore(true)} /><MoreSheet open={more} onClose={() => setMore(false)} onFeedback={() => setFb(true)} /><Feedback open={fb} onClose={() => setFb(false)} /></>
}
