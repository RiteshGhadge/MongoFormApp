# 🧾MongoFormApp

**MongoFormApp** is a full-stack **User Management CRUD** application built with **Node.js**, **Express**, **MongoDB (via Mongoose)**, and **EJS templates**. The project offers a responsive, modern UI using **Tailwind CSS**, supporting essential operations like creating, reading, editing, and deleting user records.

---

## 🚀 Features

* ✅ Add new users with name, email, and image URL
* ✅ Display all users in card-based UI
* ✅ Edit user email and image (name is read-only)
* ✅ Delete users with a single click
* ✅ Responsive design using Tailwind CSS
* ✅ MongoDB backend with file-free dynamic storage

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS templating engine, Tailwind CSS
* **Database:** MongoDB (using Mongoose ODM)
* **Tools:** Git, VS Code, Nodemon

---

## 📂 Project Structure

```
MongoFormApp/
├── models/
│   └── user.js
├── public/
│   └── (static files, optional)
├── views/
│   ├── index.ejs
│   ├── read.ejs
│   └── edit.ejs
├── app.js
├── package.json
└── .gitignore
```

---

## 📦 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/RiteshGhadge/MongoFormApp.git
cd MongoFormApp
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure MongoDB Connection

In `models/user.js`, update your MongoDB connection string:

```js
mongoose.connect('your-mongodb-connection-string');
```

Use **MongoDB Atlas** or local MongoDB instance as preferred.

### 4️⃣ Run Application

```bash
node app.js
```

By default, your app will be running at:

```
http://localhost:3000/
```

---

## 🔑 Core Routes Summary

| Route         | Method | Purpose                     |
| ------------- | ------ | --------------------------- |
| `/`           | GET    | Render form to create users |
| `/create`     | POST   | Add new user                |
| `/read`       | GET    | Display all users           |
| `/delete/:id` | GET    | Delete user by ID           |
| `/edit/:id`   | GET    | Render edit form for user   |
| `/update/:id` | POST   | Update user data by ID      |

---

## 🎨 UI Design

* Fully responsive UI using Tailwind CSS.
* Image avatars displayed using provided image URLs.
* Form-based user creation & update interface.
* Card-based user listing.

---

## 🚧 Future Improvements

* Image file upload support (using Multer)
* User authentication (Login/Signup)
* REST API (JSON endpoints for API clients)
* Input validation & sanitization
* Error handling improvements
* Deployment (Render, Railway, Vercel serverless, etc.)

---

## 👤 Author

**Ritesh Ghadge**

---

## 📄 License

This project is open-source and free to use for learning and development.
