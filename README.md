# 🍽️ Cravato - Full Stack Food Ordering Web App

Cravato is a full-featured food ordering system built with the MERN stack. It supports real-time ordering, admin controls, and multiple payment methods including Cash on Delivery (COD) and Stripe.

---

### ✅ Features

- 🔐 JWT-based user authentication
- 🛒 Add to cart with quantity management
- 💳 COD or Stripe online payment options
- 📦 Order management with latest orders first
- 🧑‍🍳 Category-based dish browsing (Explore Menu)
- 📟 Admin dashboard to manage food and orders
- 📱 Fully responsive UI (mobile-friendly)
- ↺ Scrollable menu navigation arrows
- ⬆️ Scroll-to-top button

---

### 🧑‍💻 Tech Stack

- **Frontend**: React.js, React Router, Context API, Vite
- **Backend**: Node.js, Express.js, JWT
- **Database**: MongoDB (Mongoose ODM)
- **Payment Gateway**: Stripe

---

### 📁 Folder Structure

```
Cravato/
├── frontend/      # User-facing React app
├── backend/       # Node.js API server
├── admin/         # Admin panel (React)
├── .gitignore
├── README.md
```

---

### ⚙️ Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/JigarHingu/Cravato_FullStack.git
cd Cravato_FullStack
```

---

#### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `/backend` directory:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

---

#### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at: [http://localhost:5173](http://localhost:5173)

---

#### 4. Setup Admin Panel

```bash
cd ../admin
npm install
npm run dev
```

Admin runs at: [http://localhost:5174](http://localhost:5174)

---

### 📟 .env Sample for Backend

```env
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/CravatoDB
STRIPE_SECRET_KEY=sk_test_***************
JWT_SECRET=your_jwt_secret_key
```

---

### 💡 What You Can Do

- ✅ Add/remove items from cart
- ✅ Scroll through menu with arrows
- ✅ Place order with address + payment
- ✅ Pay via Stripe or select Cash on Delivery
- ✅ Admin: CRUD on food items
- ✅ Admin: Update and track order statuses

---

### 🔐 Payment Integration

- **Stripe**: Credit/Debit card (via Stripe Checkout Session)
- **COD**: For offline/cash-based orders

---

### 🛠️ Future Enhancements (Optional)

- 📦 Order tracking notifications
- 📈 Analytics for admin
- 🔎 Search/filter for dishes
- 🔐 Role-based login (admin/user)

---

### 🙇‍♂️ Author

Made with ❤️ by [**Jigar Hingu**](https://github.com/JigarHingu)

---

### 📃 License



---