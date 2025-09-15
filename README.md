# 📧 BulkMail - Send Multiple Emails at Once

BulkMail is a full-stack application built with **React.js (frontend)** and **Node.js + Express.js (backend)** that helps businesses send bulk emails to multiple recipients at once. It allows users to write a message, upload an Excel file containing email addresses, and send emails to all recipients in one click using **Nodemailer**.

---

## 🚀 Features
- ✅ Compose and send a single message to multiple email addresses
- ✅ Upload `.xlsx` / `.csv` files containing recipient emails
- ✅ Automatically parse and display total emails & list of recipients
- ✅ Send emails using Gmail SMTP with Nodemailer
- ✅ Simple and clean UI built with **React + Tailwind CSS**
- ✅ Status indicator for email sending

---

## 🖥️ Tech Stack
### Frontend:
- React.js
- Axios (for API calls)
- XLSX (for reading Excel files)
- Tailwind CSS (for styling)

### Backend:
- Node.js
- Express.js
- Nodemailer
- CORS & Body Parser

---
Backend setup
- cd backend
- npm install
  
---
Frontend setup
- cd frontend
- npm install
- npm start

---
📊 How to Use

- Start both frontend and backend servers.

- Open the React app in browser (http://localhost:3000).

- Type your email message in the text area.

- Upload an Excel/CSV file containing recipient emails (first column).

- Check the total emails and list preview.

- Click Send → Emails will be sent to all recipients via Gmail SMTP.
