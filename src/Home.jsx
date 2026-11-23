import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Palette, PlayCircle, ClipboardList, Hammer, Users, ArrowRight } from 'lucide-react'
import { ORG } from './config.js'

function HeroArt() {
  const [bad, setBad] = useState(false)
  if (!bad) return <img src="/hero.webp" alt="NACOS KDU students learning web development" className="aspect-video w-full rounded-lg object-cover md:aspect-[4/3]" onError={() => setBad(true)} />
  return <div aria-hidden className="hidden rounded-lg bg-ink p-3 md:block"><div className="flex gap-1.5 pb-2"><i className="h-2.5 w-2.5 rounded-full bg-brand" /><i className="h-2.5 w-2.5 rounded-full bg-brand/60" /><i className="h-2.5 w-2.5 rounded-full bg-brand/30" /></div>
    <div className="rounded bg-white p-4"><div className="flex items-center justify-between"><b>NACOS KDU</b><span className="flex gap-3 text-xs"><span>Home</span><span>About</span><span>Events</span></span></div><div className="mt-4 h-24 rounded bg-brand" /><div className="mt-3 h-3 w-2/3 rounded bg-ink/20" /><div className="mt-2 h-3 w-1/2 rounded bg-ink/10" /></div></div>
}

const resources = [
  [BookOpen, 'HTML Tutorial', 'Learn the structure and building blocks of websites.', '/learn/html'],
  [Palette, 'CSS Tutorial', 'Learn how to style and design web pages.', '/learn/css'],
  [PlayCircle, 'Video Tutorials', 'Follow selected video lessons alongside the curriculum.', '/videos'],
  [ClipboardList, 'Assignments', 'Apply what you learn through weekly practical tasks.', '/assignments']]
const facts = [['Duration', '10 weeks'], ['Class day', 'Saturday'], ['Class time', '2:00 PM – 4:00 PM'], ['Resource', 'W3Schools'], ['Focus', 'HTML and CSS']]
const pillars = [
  [BookOpen, 'Learn', 'Develop a strong foundation in web development.'],
  [Hammer, 'Build', 'Apply your knowledge through practical projects.'],
  [Users, 'Collaborate', 'Work with other aspiring developers and grow together.']]

// Abstract wireframes (not a screenshot): the same page at three points in the programme.
const Frame = ({ children }) => <div aria-hidden className="h-28 overflow-hidden rounded-md border border-ink/15 bg-white p-2">{children}</div>
const Stage = ({ weeks, title, children }) => <li className="card p-4"><Frame>{children}</Frame><p className="mt-3 text-xs font-bold text-brand-700">{weeks}</p><p className="font-bold">{title}</p></li>

export default function Home() {
  return <>
    <section className="bg-brand"><div className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-10 pt-4 md:grid-cols-2 md:gap-10 md:py-14">
      <div><h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Don’t Just Learn to Code. Build Something.</h1>
        <p className="mt-3 max-w-md">Learn HTML and CSS, practise through guided exercises, and apply your skills by building real projects alongside other aspiring developers.</p>
        <div className="mt-5 flex flex-wrap gap-3"><Link to="/roadmap" className="btn-p">Explore Learning Roadmap</Link><Link to="/assignments" className="btn bg-white hover:bg-brand-100">View Assignments</Link></div>
        <p className="mt-4 text-sm">{ORG}</p></div>
      <HeroArt /></div></section>

    <div className="mx-auto max-w-5xl px-4">
      <section aria-labelledby="res" className="mt-8"><h2 id="res" className="sr-only">Learning resources</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{resources.map(([I, t, d, to]) => <Link key={t} to={to} className="card flex flex-col transition-colors hover:border-brand-600">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-100"><I className="text-brand-700" size={22} /></span>
          <span className="mt-3 font-bold">{t}</span><span className="mt-1 flex-1 text-sm text-ink/70">{d}</span></Link>)}</div></section>

      <section aria-labelledby="glance" className="mt-14"><h2 id="glance" className="text-2xl font-bold">Your Learning Journey at a Glance</h2>
        <p className="mt-2 max-w-2xl text-ink/70">A structured learning programme combining guided lessons, practical exercises and collaborative project development.</p>
        <dl className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-5">{facts.map(([k, v]) => <div key={k} className="card p-4 last:col-span-2 md:last:col-span-1"><dt className="text-xs text-ink/60">{k}</dt><dd className="font-medium">{v}</dd></div>)}</dl></section>

      <section aria-labelledby="build" className="mt-14"><h2 id="build" className="text-2xl font-bold">Learning Through Building</h2>
        <p className="mt-2 max-w-2xl text-ink/70">Students won’t just learn HTML and CSS in isolation. They’ll apply each concept to a collaborative project, gradually developing a complete website as the programme progresses.</p>
        <p className="mt-4 text-lg font-bold text-brand-700">One project. Ten weeks. Practical experience.</p>
        <p className="mt-1 max-w-2xl text-ink/70">Each weekly assignment adds to the same NACOS website, so the final project is the result of ten weeks of steady work.</p>
        <ol className="mt-5 grid gap-3 md:grid-cols-3">
          <Stage weeks="Weeks 1–5" title="HTML structure"><div className="space-y-1.5"><div className="h-3.5 w-2/3 bg-ink/70" /><div className="h-2 w-full bg-ink/25" /><div className="h-2 w-5/6 bg-ink/25" /><div className="mt-2 h-2 w-1/3 bg-ink/25" /><div className="h-2 w-1/4 bg-ink/25" /><div className="h-2 w-2/5 bg-ink/25" /></div></Stage>
          <Stage weeks="Weeks 6–7" title="CSS styling and spacing"><div className="h-5 rounded-sm bg-brand" /><div className="mt-2 h-3.5 w-1/2 rounded-sm bg-brand-700" /><div className="mt-2 rounded border border-brand-600/50 bg-brand-50 p-1.5"><div className="h-2 w-5/6 bg-ink/25" /><div className="mt-1 h-2 w-2/3 bg-ink/25" /></div></Stage>
          <Stage weeks="Weeks 8–10" title="Layout and responsive design"><div className="h-5 rounded-sm bg-brand" /><div className="mt-2 grid grid-cols-3 gap-1.5"><div className="h-14 rounded border border-brand-600/50 bg-brand-50" /><div className="h-14 rounded border border-brand-600/50 bg-brand-50" /><div className="h-14 rounded border border-brand-600/50 bg-brand-50" /></div></Stage></ol>
        <Link to="/final-project" className="btn-o mt-5">See the final project<ArrowRight size={16} /></Link></section>

      <section aria-labelledby="team" className="mt-14 rounded-lg bg-brand-100 p-5 md:p-8"><h2 id="team" className="text-2xl font-bold">Building More Than Websites</h2>
        <p className="mt-2 max-w-2xl text-ink/80">This programme is an opportunity for students to develop practical skills, collaborate with fellow learners and prepare to contribute to the NACOS Developers Team.</p>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">{pillars.map(([I, t, d]) => <li key={t} className="card flex gap-3"><I className="mt-0.5 shrink-0 text-brand-700" /><div><h3 className="font-bold">{t}</h3><p className="text-sm text-ink/70">{d}</p></div></li>)}</ul>
        <Link to="/about" className="btn-p mt-5">About the Programme</Link></section>
    </div></>
}
