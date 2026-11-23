# NACOS Web Development Learning Hub
Organised by the Directorate of Innovation and Collaboration, NACOS KolaDaisi University Chapter.
React + Vite + Tailwind, deployed on Vercel. Submissions go through Google Apps Script → Drive + Sheets. No accounts, no progress tracking.

## Run
    npm install && cp .env.example .env && npm run dev

## Google setup
1. Google Sheets: create **NACOS Web Development Assignment Submissions**. Copy the ID from its URL (between /d/ and /edit).
2. Google Drive: create a folder **NACOS Web Development Submissions**. Copy the ID from its URL. The ten "Week N — …" subfolders are created automatically on first upload.
3. script.google.com → New project → paste `apps-script/Code.gs`.
4. Replace `ROOT_FOLDER_ID` and `SHEET_ID`.
5. Deploy → New deployment → Web app. **Execute as: Me. Who has access: Anyone.** Authorise the Drive and Sheets prompts.
6. After any later code edit, use Deploy → Manage deployments → Edit → New version. The URL stays the same.
7. Put the Web App URL (ends in /exec) in `.env` as `VITE_GOOGLE_SCRIPT_URL`, and in Vercel → Settings → Environment Variables. Redeploy.
8. Test: submit a small ZIP from the Submit page. Confirm the file in Drive and a new row in the sheet. Opening the /exec URL in a browser should show `{"ok":true,...}`.

Why this approach: the browser sends JSON as `text/plain` so no CORS preflight is triggered (Apps Script cannot answer one). The file travels as base64, which is why the 5 MB limit applies. The app shows success only when the script returns `ok: true`.
Limits: Anonymous submissions can be spammed; the endpoint validates type and size but not identity.
