# 🧩 Form Submission App

A simple full-stack web app built with **Express.js**, **EJS**, and **Tailwind CSS**.  
Users can submit their name, email, and message through a clean responsive form — and see a confirmation after submission.

---

## 🚀 Features

✅ User-friendly form UI built with **Tailwind CSS**  
✅ Dynamic rendering using **EJS templates**  
✅ Express server with modular routes & controllers  
✅ Auto-reloading via **Nodemon**  
✅ Live Tailwind build via CLI watcher

---

## 🗂️ Project Structure

```
task-1/
│
├── controllers/
│   └── formController.js       # Handles rendering and form submission logic
│
├── routes/
│   └── formRoutes.js           # Defines form-related routes
│
├── views/
│   └── index.ejs               # Frontend form template
│
├── public/
│   └── css/
│       ├── input.css           # Tailwind source file
│       └── output.css          # Compiled Tailwind file
│
├── server.js                   # Express server setup
├── package.json                # Project metadata and dependencies
└── README.md                   # Documentation (you’re reading this)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Savi118/Congnifyz-task-1
cd task-1
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the app

```bash
npm start
```

This command:

- Starts the Express server using **nodemon**
- Compiles and watches Tailwind CSS using **@tailwindcss/cli**

This app is live at  
👉 **https://form-submission-app-kcbu.onrender.com/**

---

## 🧠 Tech Stack

| Layer         | Technology           |
| ------------- | -------------------- |
| Backend       | Node.js + Express.js |
| Frontend      | EJS + Tailwind CSS   |
| Server Reload | Nodemon              |
| CSS Compiler  | @tailwindcss/cli     |

---

## 🧾 Form Fields

- **Name** (text input)
- **Email** (email input)
- **Message** (textarea)

When the user submits, the server renders a success message with their submitted info.

---

## 🧪 Example

### Before submission:

![Form Screenshot](https://res.cloudinary.com/dayxvtzfm/image/upload/v1761932558/Screenshot_2025-10-31_041940_uqfkml.png)

### After submission:

![Result Screenshot](https://res.cloudinary.com/dayxvtzfm/image/upload/v1761932640/Screenshot_2025-10-31_041931_vn762i.png)

---

## 🧰 Available Scripts

| Command                                                                             | Description   |
| ----------------------------------------------------------------------------------- | ------------- |
| `npm start`                                                                         | Runs server   |
| `npx @tailwindcss/cli -i ./public/css/input.css -o ./public/css/output.css --watch` | Runs Tailwind |

---

## 💡 Future Improvements

- Add form validation with Express middleware
- Connect to MongoDB or Firebase for data storage
- Add toast notifications using vanilla JS or React frontend

---

## 👨‍💻 Author

**Saksham**  
📍 Full Stack Developer & Web Enthusiast  
🚀 _“Where ideas meet intelligence.”_
