# 🚚 Food Truck Hub HQ

The all-in-one web platform (and future app) that connects food trucks with event vendors to simplify event bookings, approvals, and visibility — built for desktop, mobile web, and app conversion later.

---

## 🌟 Project Goals

- Help food trucks find and apply for local events
- Allow vendors to post events and approve applicants
- Build an admin-accessible system with scalable backend logic
- Keep structure modular for future app support (React Native or Expo)

---

## 🗂️ Project Structure


---

## 📌 Core Features

### ✅ Food Truck Side
- View list of upcoming events
- Apply to an event
- Track application status (Pending / Booked)

### 🛠 Vendor Side (In Progress)
- Upload events or event calendar
- View applications for each event
- Approve or reject applicants

### 🔐 Admin (Later Phase)
- View all trucks and vendors
- Moderate listings
- Send system-wide announcements or emails

---

## 🔄 API Endpoints

| Method | Route               | Purpose                       |
|--------|---------------------|-------------------------------|
| GET    | /api/events         | Get all upcoming events       |
| POST   | /api/apply          | Submit application to event   |
| GET    | /api/applications   | Vendor views submitted apps   |
| POST   | /api/approve        | Vendor approves an application|

---

## 🧠 Current Progress (as of August 2025)

- [x] Created project folder structure
- [x] Built frontend file layout
- [x] Set up Express backend
- [x] Fetched event data dynamically from backend
- [ ] Submit application POST route
- [ ] Vendor dashboard UI
- [ ] Approve/reject functionality

---

## 💻 Tech Stack

- Frontend: HTML, CSS (truck.css), Vanilla JS
- Backend: Node.js + Express
- Data: Local JSON (mockData.json)
- Planned: React Native or Expo for mobile app support

---

## 📲 App-Ready Approach

- API-first design
- Responsive layout for mobile browsers
- All data pulled via fetch → ready for React Native reuse
- User roles (truck, vendor, admin) already outlined

---

## 🚧 To-Do / Future Upgrades

- [ ] Add auth system (JWT or Firebase)
- [ ] Enable file uploads for vendor calendars
- [ ] Build admin control panel
- [ ] Implement notifications (email/SMS/push)
---

## 🗃 Project Docs

📄 [Master Builder Log (Google Doc)]https://docs.google.com/document/d/15DEtAlV9F1rRG3f_6ETMUcENgJldDJAcmycWIDAqi-w/edit?usp=sharing

Includes:
- MVP feature roadmap
- User flow mapping
- Onboarding copy
- Weekly dev logs
- Launch strategy

---
