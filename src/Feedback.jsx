import { useState, useEffect } from 'react'
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { SCRIPT_URL } from './config.js'

export default function Feedback({ open, onClose }) {
  const [f, setF] = useState({ type: 'Suggestion', name: '', email: '', message: '' })
  const [busy, setBusy] = useState(false), [ok, setOk] = useState(false), [err, setErr] = useState('')
  useEffect(() => { if (!open) return; const k = (e) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [open, onClose])
  if (!open) return null
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const close = () => { setOk(false); setErr(''); onClose() }
  async function send(e) {
    e.preventDefault(); if (busy) return
    if (f.message.trim().length < 5) return setErr('Write at least a few words.')
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return setErr('Enter a valid email or leave it empty.')
    if (!SCRIPT_URL) return setErr('Feedback is not set up yet. Nothing was sent.')
    setErr(''); setBusy(true)
    try {
      const r = await fetch(SCRIPT_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ kind: 'feedback', ...f }) })
      const d = await r.json(); if (!d.ok) throw new Error(d.error || 'The server rejected it.')
      setOk(true); setF({ ...f, message: '' })
    } catch (x) { setErr(`Not sent. ${x.message} Try again.`) }
    setBusy(false)
  }
  const cls = 'mt-1 w-full rounded-md border border-ink/20 px-3 py-2'
  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 sm:items-center sm:p-4" onClick={close}>
    <div role="dialog" aria-modal="true" aria-labelledby="fbt" className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-xl bg-white p-5 sm:rounded-xl" onClick={e => e.stopPropagation()}>
      <div className="flex items-center justify-between"><h2 id="fbt" className="text-xl font-bold">Share feedback</h2><button onClick={close} aria-label="Close"><X /></button></div>
      {ok ? <div role="status" className="py-6 text-center"><CheckCircle2 className="mx-auto text-brand-700" /><p className="mt-2 font-medium">Thank you. Your message has been sent to the team.</p><button className="btn-p mt-4" onClick={close}>Close</button></div>
        : <form onSubmit={send} noValidate className="mt-4 space-y-3">
          <div><label htmlFor="ft" className="text-sm font-medium">Type</label><select id="ft" className={cls} value={f.type} onChange={set('type')}><option>Suggestion</option><option>Feedback</option><option>Complaint</option></select></div>
          <div><label htmlFor="fm" className="text-sm font-medium">Your message *</label><textarea id="fm" rows="4" className={cls} value={f.message} onChange={set('message')} /></div>
          <div className="grid gap-3 sm:grid-cols-2"><div><label htmlFor="fn" className="text-sm font-medium">Name (optional)</label><input id="fn" className={cls} value={f.name} onChange={set('name')} /></div>
            <div><label htmlFor="fe" className="text-sm font-medium">Email (optional)</label><input id="fe" type="email" className={cls} value={f.email} onChange={set('email')} /></div></div>
          {err && <p role="alert" className="flex gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700"><AlertCircle size={18} className="shrink-0" />{err}</p>}
          <button className="btn-p w-full" disabled={busy}>{busy ? <><Loader2 className="animate-spin" size={16} />Sending…</> : 'Send'}</button></form>}
    </div></div>
}
