/** NACOS Web Development submissions. Paste into a standalone Apps Script project. */
const ROOT_FOLDER_ID = '1tgliKmuiRX51DLYRtMPyrJHEuZgXeARM'   // "NACOS Web Development Submissions" folder
const SHEET_ID = '1DjoDCq1en14-II8MDqUVt30uJPOis_2wPwMdQ3fGGTU'          // "NACOS Web Development Assignment Submissions"
const MAX_BYTES = 5 * 1024 * 1024                // keep in sync with src/config.js
const ALLOWED = ['zip', 'html', 'css']
const TITLES = ['HTML Foundations', 'Website Structure and Navigation', 'Images, Lists and Tables', 'Forms and Semantic HTML', 'HTML Revision and Integration', 'Introduction to CSS', 'CSS Box Model and Spacing', 'Flexbox and Grid', 'Responsive Design', 'Final Project']
const HEADERS = ['Submission ID', 'Submission Date', 'Student Full Name', 'Email Address', 'Department', 'Level', 'Assignment Number', 'Assignment Title', 'Uploaded File Name', 'Google Drive File URL', 'Additional Comments']

function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON) }
function doGet() { return out({ ok: true, message: 'NACOS submission endpoint is running.' }) }

function doPost(e) {
  const lock = LockService.getScriptLock()
  try {
    lock.waitLock(20000)
    const d = JSON.parse(e.postData.contents)
    if (d.kind === 'feedback') return saveFeedback(d)
    const str = (v, n) => String(v || '').trim().slice(0, n)
    const name = str(d.fullName, 120), email = str(d.email, 120), dept = str(d.department, 120), level = str(d.level, 10)
    const n = parseInt(d.assignmentNumber, 10)
    if (!name || !dept || !level) return out({ ok: false, error: 'Name, department and level are required.' })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return out({ ok: false, error: 'Invalid email address.' })
    if (!(n >= 1 && n <= 10)) return out({ ok: false, error: 'Invalid assignment.' })
    const safe = str(d.fileName, 150).replace(/[^\w.\- ]/g, '_')
    const ext = (safe.split('.').pop() || '').toLowerCase()
    if (safe.indexOf('.') < 0 || ALLOWED.indexOf(ext) < 0) return out({ ok: false, error: 'Only ZIP, HTML or CSS files are accepted.' })
    if (!d.fileData) return out({ ok: false, error: 'No file received.' })
    const bytes = Utilities.base64Decode(d.fileData)
    if (bytes.length > MAX_BYTES) return out({ ok: false, error: 'File exceeds the 5 MB limit.' })
    if (ext === 'zip' && !(bytes[0] === 0x50 && bytes[1] === 0x4b)) return out({ ok: false, error: 'This is not a valid ZIP file.' })

    const folderName = 'Week ' + n + ' — ' + TITLES[n - 1]
    const root = DriveApp.getFolderById(ROOT_FOLDER_ID)
    const it = root.getFoldersByName(folderName)
    const folder = it.hasNext() ? it.next() : root.createFolder(folderName)

    const id = 'NACOS-W' + n + '-' + Utilities.formatDate(new Date(), 'UTC', 'yyMMddHHmmss') + '-' + Math.floor(Math.random() * 900 + 100)
    const stored = id + '_' + name.replace(/[^\w]+/g, '_') + '_' + safe
    const mime = ext === 'zip' ? 'application/zip' : ext === 'html' ? 'text/html' : 'text/css'
    const file = folder.createFile(Utilities.newBlob(bytes, mime, stored))

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0]
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS)
    const now = new Date()
    sheet.appendRow([id, now, name, email, dept, level, n, TITLES[n - 1], safe, file.getUrl(), str(d.comments, 1000)])
    return out({ ok: true, submissionId: id, submittedAt: Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm'), driveUrl: file.getUrl() })
  } catch (err) {
    return out({ ok: false, error: 'Server error: ' + err.message })
  } finally { try { lock.releaseLock() } catch (x) {} }
}

function saveFeedback(d) {
  const msg = String(d.message || '').trim().slice(0, 2000)
  if (msg.length < 5) return out({ ok: false, error: 'Message is too short.' })
  const types = ['Feedback', 'Suggestion', 'Complaint']
  const type = types.indexOf(d.type) >= 0 ? d.type : 'Feedback'
  const ss = SpreadsheetApp.openById(SHEET_ID)
  const sh = ss.getSheetByName('Feedback') || ss.insertSheet('Feedback')
  if (sh.getLastRow() === 0) sh.appendRow(['Date', 'Type', 'Name', 'Email', 'Message'])
  sh.appendRow([new Date(), type, String(d.name || '').slice(0, 120), String(d.email || '').slice(0, 120), msg])
  return out({ ok: true })
}
