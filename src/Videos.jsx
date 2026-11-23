import { useSearchParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, VideoOff, BookOpen, ExternalLink } from 'lucide-react'
import { videos, noVideo, lessonPath, wUrl, ytId } from './data.js'

export function Player({ v }) {
  const id = ytId(v.yt)
  return <div className="aspect-video overflow-hidden rounded-lg bg-ink">
    {id ? <iframe key={id} className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}`} title={v.title} loading="lazy" allow="encrypted-media; picture-in-picture" allowFullScreen />
      : <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center text-white/80"><VideoOff /><p className="font-medium text-white">Video coming soon</p><p className="text-sm">Use the W3Schools lesson for now.</p></div>}
  </div>
}

export default function Videos() {
  const [params, setParams] = useSearchParams()
  const i = Math.max(0, videos.findIndex(x => x.key === params.get('v')))
  const v = videos[i], lp = lessonPath(v.topic)
  const go = (k) => { setParams({ v: k }); window.scrollTo(0, 0) }
  return <div className="mx-auto max-w-6xl px-4 py-8">
    <h1 className="text-2xl font-bold">Video Tutorials</h1>
    <p className="mt-1 text-ink/70">Every video from the W3Schools YouTube channel.</p>
    <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_300px]">
      <div><Player v={v} />
        <h2 className="mt-4 text-xl font-bold">{v.title}</h2>
        <p className="text-sm text-ink/60">{v.topic ? `Roadmap topic: ${v.topic}` : 'Extra video (not in our roadmap)'} · {i + 1} of {videos.length} · {v.dur}</p>
        {lp && <a href={wUrl(lp)} target="_blank" rel="noopener noreferrer" className="btn-hl mt-3 w-full sm:w-auto"><BookOpen size={16} />Read this topic on W3Schools<ExternalLink size={14} /></a>}
        <div className="mt-4 flex gap-2">
          <button className="btn-o" disabled={i === 0} onClick={() => go(videos[i - 1].key)}><ChevronLeft size={16} />Previous</button>
          <button className="btn-p flex-1 sm:flex-none" disabled={i === videos.length - 1} onClick={() => go(videos[i + 1].key)}>Next tutorial<ChevronRight size={16} /></button></div></div>
      <nav aria-label="Video list" className="max-h-96 overflow-y-auto rounded-lg border border-ink/10 bg-white lg:max-h-[32rem]">
        {['html', 'css'].map(g => <div key={g}><p className="sticky top-0 bg-brand-100 px-4 py-2 text-sm font-bold">{g.toUpperCase()} videos</p>
          {videos.map((x, n) => x.track === g && <button key={x.key} onClick={() => go(x.key)} aria-current={n === i} className={`flex w-full justify-between gap-2 px-4 py-2.5 text-left text-sm hover:bg-brand-50 ${n === i ? 'bg-brand font-bold' : ''}`}><span>{x.title}</span><span className="text-ink/50">{x.dur}</span></button>)}</div>)}
      </nav></div>
    <section className="mt-10"><h2 className="text-lg font-bold">Topics without a video</h2>
      <p className="text-sm text-ink/70">W3Schools has no video for these. Read the lesson instead.</p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">{noVideo.map(n => <li key={n.title}><a href={wUrl(n.path)} target="_blank" rel="noopener noreferrer" className="card flex items-center justify-between py-3 text-sm hover:border-brand-600">{n.title}<span className="font-bold text-brand-700">Read on W3Schools</span></a></li>)}</ul></section>
  </div>
}
