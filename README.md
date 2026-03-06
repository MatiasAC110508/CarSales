# AutoMarket Pro 🚗💨

> A sleek, modular, and real-time vehicle inventory management system. 

AutoMarket Pro is a full-stack web application designed to manage car inventories efficiently. It features a robust Node.js/Express backend API and a lightweight, lightning-fast Vanilla JavaScript frontend styled with Tailwind CSS. 

The application uses a unified architecture where the Express server statically serves the frontend, completely eliminating CORS issues and simplifying the deployment process.

## ✨ Features

* **Real-time Inventory:** View the latest fleet data instantly.
* **Modular Frontend Architecture:** Built with ES Modules for clean, maintainable, and scalable JavaScript.
* **Tailwind CSS Integration:** Responsive, modern, and clean user interface.
* **RESTful API:** Fully functional backend routing for creating, reading, updating, and deleting (CRUD) vehicle records.
* **Cache-Busting Integration:** Ensures the frontend always fetches the most up-to-date data without browser caching conflicts.

## 🛠️ Tech Stack

* **Frontend:** HTML5, Vanilla JavaScript (ES6 Modules), Tailwind CSS (via CDN).
* **Backend:** Node.js, Express.js, CORS.
* **Architecture:** Monolithic (Express serves static frontend assets).

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed on your machine.
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)

### Installation & Setup

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/your-username/automarket-pro.git
   cd automarket-pro
   \`\`\`

2. **Navigate to the backend directory:**
   *All server logic and dependencies are located inside the backend folder.*
   \`\`\`bash
   cd backend
   \`\`\`

3. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

4. **Environment Variables:**
   Create a \`.env\` file inside the \`backend\` directory and configure your port and database connection (if applicable):
   \`\`\`env
   PORT=3000
   # Add your database URI here if needed
   # DB_URI=your_database_connection_string
   \`\`\`

## 💻 Running the Application

Since the frontend is served directly by the backend, you only need to start a single server.

1. Ensure you are inside the \`backend\` directory:
   \`\`\`bash
   cd backend
   \`\`\`

2. Start the Node.js server:
   \`\`\`bash
   node server.js
   \`\`\`

3. Open your favorite web browser and navigate to:
   👉 **http://127.0.0.1:3000**

## 📂 Project Structure

\`\`\`text
CARS/
├── backend/                # Express server and API logic
│   ├── config/             # Database configurations
│   ├── controllers/        # Route logic and database operations
│   ├── middlewares/        # Custom middlewares (e.g., file uploads)
│   ├── routes/             # API endpoints definitions
│   ├── .env                # Secret environment variables (Ignored by Git)
│   └── server.js           # Main application entry point
├── frontend/               # User Interface
│   ├── src/
│   │   ├── api/            # API communication logic (httpClient)
│   │   └── components/     # Reusable UI elements (CarCard)
│   ├── app.js              # Main frontend orchestrator
│   └── index.html          # Main HTML structure
└── .gitignore              # Files and folders ignored by Git
\`\`\`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is licensed under the MIT License.