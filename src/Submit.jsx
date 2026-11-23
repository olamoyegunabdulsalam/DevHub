import { useState, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Upload, Loader2, X, CheckCircle2, AlertCircle } from 'lucide-react'
import { assignments } from './data.js'
import { MAX_MB, ALLOWED_EXT, SCRIPT_URL, ORG } from './config.js'

const ok = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
const size = (b) => (b / 1024 / 1024).toFixed(2) + ' MB'
const toB64 = (f) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.onerror = () => rej(new Error('Could not read the file.')); r.readAsDataURL(f) })
const blank = { fullName: '', email: '', department: '', level: '', comments: '' }

export default function Submit() {
  const [params] = useSearchParams()
  const [f, setF] = useState(blank)
  const [asg, setAsg] = useState(params.get('assignment') || '')
  const [file, setFile] = useState(null)
  const [err, setErr] = useState({})
  const [busy, setBusy] = useState(false)
  const [fail, setFail] = useState('')
  const [done, setDone] = useState(null)
  const input = useRef()
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const pick = (e) => {
    const p = e.target.files[0]; if (!p) return
    const ext = p.name.split('.').pop().toLowerCase()
    if (!ALLOWED_EXT.includes(ext)) { setErr({ ...err, file: `.${ext} files are not accepted. Upload a ZIP, HTML or CSS file.` }); e.target.value = ''; return }
    if (p.size > MAX_MB * 1024 * 1024) { setErr({ ...err, file: `This file is ${size(p.size)}. The limit is ${MAX_MB} MB.` }); e.target.value = ''; return }
    setErr({ ...err, file: '' }); setFile(p)
  }
  const clear = () => { setFile(null); if (input.current) input.current.value = '' }

  async function onSubmit(e) {
    e.preventDefault(); if (busy) return
    const v = {}
    if (!f.fullName.trim()) v.fullName = 'Enter your full name.'
    if (!ok(f.email)) v.email = 'Enter a valid email address.'
    if (!f.department.trim()) v.department = 'Enter your department.'
    if (!f.level) v.level = 'Select your level.'
    if (!asg) v.asg = 'Select an assignment.'
    if (!file) v.file = 'Choose a file to upload.'
    setErr(v); setFail(''); if (Object.keys(v).length) return
    if (!SCRIPT_URL) { setFail('Submissions are not set up yet: VITE_GOOGLE_SCRIPT_URL is missing. Nothing was sent.'); return }
    setBusy(true)
    try {
      const a = assignments[asg - 1]
      const payload = { ...f, assignmentNumber: a.n, fileName: file.name, mimeType: file.type || 'application/octet-stream', fileSize: file.size, fileData: await toB64(file) }
      // text/plain avoids a CORS preflight, which Apps Script cannot answer.
      const res = await fetch(SCRIPT_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || 'The server rejected the submission.')
      setDone({ id: data.submissionId, title: `Week ${a.n} — ${a.title}`, file: file.name, when: data.submittedAt })
      setF(blank); setAsg(''); clear()
    } catch (x) { setFail(`Your file was not submitted. ${x.message} Check your connection and try again.`) }
    setBusy(false)
  }

  if (done) return <div className="mx-auto max-w-xl px-4 py-12"><div className="card" role="status">
    <CheckCircle2 className="text-green-600" /><h1 className="mt-2 text-2xl font-bold">Submission received</h1>
    <p className="mt-2">Your assignment has been submitted successfully. Thank you for participating in the NACOS Web Development Training Programme.</p>
    <dl className="mt-4 space-y-1 text-sm"><div><b>Assignment:</b> {done.title}</div><div><b>File:</b> {done.file}</div><div><b>Submission ID:</b> {done.id}</div>{done.when && <div><b>Time:</b> {done.when}</div>}</dl>
    <p className="mt-4 text-sm text-ink/60">{ORG}</p><button className="btn-p mt-5" onClick={() => setDone(null)}>Submit another</button> <Link className="btn-o mt-5" to="/assignments">Assignments</Link></div></div>

  const Field = ({ k, label, children }) => <div><label className="text-sm font-medium" htmlFor={k}>{label} <span className="text-red-600" aria-hidden>*</span></label>{children}{err[k] && <p className="mt-1 text-sm text-red-600">{err[k]}</p>}</div>
  const cls = 'mt-1 w-full rounded-md border border-ink/20 bg-white px-3 py-2'
  return <div className="mx-auto max-w-xl px-4 py-10"><h1 className="text-3xl font-bold">Submit Assignment</h1>
    <p className="mt-2 text-ink/70">No account needed. Upload your project and the NACOS team receives it.</p>
    <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
      <Field k="fullName" label="Full name"><input id="fullName" className={cls} value={f.fullName} onChange={set('fullName')} autoComplete="name" /></Field>
      <Field k="email" label="Email address"><input id="email" type="email" className={cls} value={f.email} onChange={set('email')} autoComplete="email" /></Field>
      <Field k="department" label="Department"><input id="department" className={cls} value={f.department} onChange={set('department')} /></Field>
      <Field k="level" label="Level"><select id="level" className={cls} value={f.level} onChange={set('level')}><option value="">Select level</option>{[100, 200, 300, 400, 500].map(l => <option key={l}>{l}</option>)}</select></Field>
      <Field k="asg" label="Assignment / week"><select id="asg" className={cls} value={asg} onChange={e => setAsg(e.target.value)}><option value="">Select assignment</option>{assignments.map(a => <option key={a.n} value={a.n}>Week {a.n} — {a.title}</option>)}</select></Field>
      <Field k="file" label="Project file"><div className="mt-1 rounded-md border border-dashed border-ink/30 bg-white p-4 text-center">
        <Upload className="mx-auto text-brand-700" aria-hidden /><input ref={input} id="file" type="file" accept=".zip,.html,.css" onChange={pick} className="sr-only" />
        <label htmlFor="file" className="btn-o mt-2 cursor-pointer">Choose File</label>
        <p className="mt-2 text-xs text-ink/60">Accepted: ZIP (preferred), HTML, CSS · Max {MAX_MB} MB</p>
        {file && <p className="mt-2 flex items-center justify-center gap-2 text-sm"><span className="truncate">{file.name} ({size(file.size)})</span><button type="button" onClick={clear} aria-label="Remove selected file"><X size={16} /></button></p>}</div></Field>
      <div><label className="text-sm font-medium" htmlFor="comments">Additional comments (optional)</label><textarea id="comments" rows="3" className={cls} value={f.comments} onChange={set('comments')} /></div>
      {fail && <p role="alert" className="flex gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700"><AlertCircle size={18} className="shrink-0" />{fail}</p>}
      <button className="btn-p w-full" disabled={busy}>{busy ? <><Loader2 className="animate-spin" size={16} />Uploading…</> : 'Submit Assignment'}</button>
    </form></div>
}
