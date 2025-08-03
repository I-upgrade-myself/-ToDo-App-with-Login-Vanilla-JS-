# 📝 ToDo App with Login (Vanilla JS)

This project is a simple ToDo app with authentication and task storage in `localStorage`. Users can log in via an API, add tasks, edit them, delete them, and see the task completion status.

---

## 🚀 Features

- ✅ Login (email + password) via the [reqres.in](https://reqres.in/) API
- ✅ Email and password validation
- ✅ Storing the authorization token in `localStorage`
- ✅ Displaying the interface only after authentication
- ✅ Creating new tasks with default values
- ✅ Editing tasks directly in the table
- ✅ Task field validation
- ✅ Deleting tasks
- ✅ Maximum of 10 tasks
- ✅ Email validity check and non-empty values validation

---

## 🧪 Test Login Data

- **Email**: `eve.holt@reqres.in`  
- **Password**: `cityslicka`

---

## 🛠️ Technologies

- Vanilla JavaScript (ES6)
- HTML5 + CSS3
- LocalStorage
- API request using `fetch`
- Proxy for CORS: `https://cors-anywhere.herokuapp.com/`

---

## 📂 File Structure

- index.html — основний HTML файл з розміткою
- css/styles.css — стилі
- js/
  - login.js — логіка форми логіну
  - storage.js — робота з localStorage
  - app.js — ініціалізація додатку
  - auth.js — перевірка автентифікації
  - todo.js — логіка роботи зі списком задач
  - utils.js — допоміжні функції (валідація, рендер і т.п.)

---
## ✅ Validation

- **Email:** must be valid (using RegExp)
- **Password:** at least 6 characters, with at least one letter and one digit
- **Task:** cannot be empty, maximum 65 characters
- **Name:** cannot be empty
- **Maximum tasks:** 10

---

## 📌 How to Run

1. Download or clone the repository
2. Open `index.html` in your browser
3. Log in (use the test login data above)
4. Use the task functionality

---

## 🔒 Security

- Password is not stored
- The token is cleared upon logout

---

## 📤 Running Without CORS Errors

The project uses `https://cors-anywhere.herokuapp.com/` as a proxy to bypass CORS issues when making requests to `reqres.in`. If the proxy doesn't work, you can temporarily disable CORS checks or use another proxy.
