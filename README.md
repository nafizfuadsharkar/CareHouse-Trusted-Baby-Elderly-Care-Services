# 🌟 CareHouse - Your Trusted Caregiving Platform

CareHouse helps you **book reliable caregiving services** for your **child, elderly, or sick family members**. With CareHouse, everything is **easy, safe, and fast**! 

🌐 **Live Website:** https://care-house-blue.vercel.app/


Here’s what you can do step by step:

---

## 🏠 Homepage - Start Your CareHouse Journey

When you first visit CareHouse, you are welcomed by a **bright and friendly banner** 🌈, showing that **help and care are just a click away**. It sets the tone for the whole platform: **safe, reliable, and easy caregiving**.  

As you scroll, you’ll discover the **mission of CareHouse** 📝:  
> “Making caregiving simple, safe, and accessible for every family.”  

Next, you get a glimpse of the **services we offer**:  

- Baby Care  – Trusted caregivers for your little ones, giving them love and attention while you focus on your day.  
- Elderly Care – Compassionate support for your elderly loved ones, ensuring comfort, safety, and companionship.  
- Sick People Care – Reliable assistance for family members who are ill, helping them recover with proper attention.  

Further down, you’ll find **testimonials from real users** 🌟, sharing their experiences and trust in CareHouse. You’ll also see **success metrics**, showing how many families we’ve helped — giving you confidence that **you’re in the right place**.  

Finally, from the homepage, it’s easy to **navigate to any service detail page** with just one click. Each service card invites you to **learn more and book the care your loved one deserves**.  

> The homepage is your starting point — here, you get inspired, informed, and ready to take the next step in caring for your loved ones. 💖


## 🔹 Service Detail Page

When you open a service detail page (e.g., `/service/:service_id`):

- Read **all details about the service** 🧐  
- See the **service charge** 💰  
- Click **"Book Service"** to go to the **Booking Page** 📝  

---

## 📝 Booking Page

On the booking page (`/booking/:service_id`), you can:

1. **Select Duration** ⏳  
   - Choose **hours or days** for the service  
2. **Select Location** 📍  
   - Pick **Division → District → City → Area → Address**  
3. **See Total Cost** 💵  
   - The price **updates automatically** based on your duration  
4. **Confirm Booking** ✅  
   - Your booking is saved with **status = Pending**  
   - You will receive an **email invoice** ✉️  

> ⚠️ You must be logged in to book a service. If you’re not logged in, you will be asked to login or register first.

---

## 🔑 Authentication (Login / Register)

- **Login** using your **Email & Password** or **Google account** 🔐  
- **Register** with:
  - NID Number  
  - Name  
  - Email  
  - Contact  
  - Password (6+ characters, at least 1 uppercase & 1 lowercase) ✍️  
- After registration, you are **automatically redirected** to the **Booking Page** 🚀  
- Once logged in, you **won’t be redirected to login** on private pages  

---

## 📂 My Booking Page

On `/my-bookings`, you can:

- **See all your bookings** 🗂️  
  - Service Name  
  - Duration  
  - Location  
  - Total Cost  
  - Status: Pending / Confirmed / Completed / Cancelled  
- **View Booking Details** 🔍  
- **Cancel a Booking** ❌  

This page helps you **keep track of all your bookings in one place**.

---

## ❌ Error Page (404)

- If you visit a wrong page, you’ll see a **friendly “Not Found” message**  
- Click a button to **return to Home** 🏠  

---

## 💡 Optional / Future Features

- **Stripe Payment** 💳 – Pay online and your booking will be created automatically  
- **Admin Dashboard** 📊 – Track all bookings and payments  

---

## 🌱 Getting Started (for users)

1. Open CareHouse on your browser  
2. Browse services on the **Homepage**  
3. Click a service to **see details**  
4. Click **Book Service** → select **duration & location**  
5. Confirm booking → check your **email for invoice**  
6. Go to **My Booking Page** to track or cancel bookings  

---


## Environment Variables

- All configuration keys are stored in environment variables (`.env`) for security.

---

## Tech Stack

- **Frontend & Backend**: React.js &  Next.js 
- **Authentication**: NextAuth with Email/Password + Google OAuth 
- **Database**:  MongoDB
- **Email Service**: Nodemailer

---

## Getting Started

1. Clone the repository:

```bash
https://github.com/nafizfuadsharkar/CareHouse-Trusted-Baby-Elderly-Care-Services.git
cd carehouse
```
2. Install dependencies:

```bash
npm install
```
3. Add environment variables in .env file:

```bash
NEXT_PUBLIC_API_URL=<your_api_url>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
EMAIL_SERVICE_KEY=<your_email_service_key>
STRIPE_API_KEY=<your_stripe_key> # optional
```
4. Run the development server:

```bash
npm run dev
```
5. Open http://localhost:3000 to view the app.

## 🤝 Contact

Created by **Nafiz Fuad Sharkar**  
- GitHub: https://github.com/nafizfuadsharkar
- Email: `sharkarnafiz@gmail.com`  

**CareHouse - Making caregiving simple, safe, and accessible ❤️**
