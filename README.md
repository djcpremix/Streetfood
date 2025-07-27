# StreetVendorConnect

<img width="1902" height="916" alt="Screenshot 2025-07-27 190714" src="https://github.com/user-attachments/assets/0c7a77c2-0060-417f-85df-2d1422b191c1" />
<img width="1893" height="910" alt="Screenshot 2025-07-27 190703" src="https://github.com/user-attachments/assets/cc566118-bcd4-4987-8803-56845f168916" />
<img width="1897" height="908" alt="Screenshot 2025-07-27 190650" src="https://github.com/user-attachments/assets/24bec587-89c8-4634-9ee9-eac9b81a7dd5" />
<img width="1901" height="915" alt="Screenshot 2025-07-27 190637" src="https://github.com/user-attachments/assets/f3b873a6-d4c0-43c8-bbca-97fcafe1dd55" />
<img width="1897" height="913" alt="Screenshot 2025-07-27 190623" src="https://github.com/user-attachments/assets/01694732-2a3c-48d1-a732-61ba963226f4" />
<img width="1894" height="904" alt="Screenshot 2025-07-27 190555" src="https://github.com/user-attachments/assets/79b6523b-e4d6-4316-b507-b9b740b6a369" />

**StreetVendorConnect is a full-stack B2B web platform designed to empower street food entrepreneurs by connecting them with raw material suppliers and delivery partners.**

This application serves as a central hub for vendors to manage their business, from sourcing ingredients to managing their menu, all while leveraging modern web technologies and AI for a seamless experience.

## ✨ Key Features

StreetVendorConnect is packed with features designed for vendors, distributors, and delivery partners.

### For Street Food Vendors
- **Supplier Directory**: Browse, search, and filter a comprehensive list of raw material distributors.
- **Distributor Profiles**: View detailed profiles for each distributor, including their product catalog, location, and company information.
- **E-commerce Functionality**: Add products from multiple distributors to a unified shopping cart and proceed to a secure checkout.
- **User Authentication**: Secure sign-up and login with email/password or Google, including password reset functionality.
- **Vendor Dashboard**: A private, authenticated dashboard where vendors can perform CRUD (Create, Read, Update, Delete) operations on their menu items.
- **AI Product Namer**: An AI-powered tool to suggest creative names for new menu items based on a description.
- **My Store Hub**: A central page for vendors to manage their business and get a shareable link to their public-facing store page.

### Platform Features
- **Dynamic Pages**: Publicly accessible, SEO-friendly pages for each vendor and distributor.
- **AI-Powered Chatbot**: An intelligent chatbot, powered by Firebase Genkit, to assist users with navigating the site and answering questions.
- **Responsive Design**: A beautiful, modern, and fully responsive UI built with ShadCN UI and Tailwind CSS.
- **Static & Info Pages**: Includes standard pages like About Us, Contact, FAQ, Blog, and Terms of Service.
- **Firebase Integration**: Leverages Firebase for authentication and Firestore for database management.

## 🛠️ Technology Stack

This project is built with a modern, robust, and scalable technology stack.

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
- **AI Functionality**: [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **Backend & Database**: [Firebase Authentication](https://firebase.google.com/docs/auth) & [Firestore](https://firebase.google.com/docs/firestore)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- `npm` or your favorite package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/StreetVendorConnect.git
    cd StreetVendorConnect
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Set up Firebase:**
    - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    - In your project settings, add a new Web App.
    - Copy the `firebaseConfig` object and paste it into `src/lib/firebase.ts`.

4.  **Run the development servers:**
    - Run the Next.js development server for the main application:
      ```bash
      npm run dev
      ```
    - In a separate terminal, run the Genkit development server for the AI features:
      ```bash
      npm run genkit:dev
      ```

5.  **Open the application:**
    - Open [http://localhost:7070](http://localhost:7070) in your browser to see the result.
    - The Genkit developer UI will be available at [http://localhost:9090](http://localhost:9090).

---
