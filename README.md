# JanaSahay – One Portal, Every Government Benefit
### Smart Government Schemes Discovery and Assistance Portal (South India Zone)
**Academic Mini-Project Prototype | Computer Science & Engineering (AIML) – Third Semester**

---

## 📌 Project Overview

**JanaSahay** is a centralized, transparent web platform designed to streamline the discovery, understanding, comparison, and tracking of government welfare schemes across **South India**:
- 🟡 **Karnataka**
- 🟢 **Kerala**
- 🔵 **Tamil Nadu**
- 🟣 **Andhra Pradesh**
- 🟠 **Telangana**
- 🇮🇳 **Central Government (Nationwide Flagship Schemes)**

In India, citizens frequently miss out on critical subsidies, tuition fee reimbursements, healthcare insurance, and direct benefit cash transfers (DBT) due to fragmented departmental websites, complex eligibility legalities, and lack of document preparation checklists.

JanaSahay bridges this gap by organizing **36+ authentic, verified government schemes** into a citizen-first portal featuring an interactive **Smart Scheme Finder**, a **Side-by-Side Comparison Matrix**, an interactive **Printable Document Checklist**, an **Application Tracker**, and an intelligent local AI assistant (**SahayBot**).

> **Academic Disclosure & Ethics Notice:**  
> JanaSahay is an academic demonstration developed for third-semester CSE AIML project presentation. It does **NOT** claim to be an official government portal, does **NOT** collect or store sensitive personal documents (Aadhaar/Passbooks), and is **NOT** directly connected to live confidential government backends. All applications are directed to sanctioned departmental government portals (`.gov.in` / `.nic.in`).

---

## 🚀 Key Features

1. **Unified South India & Central Database**:
   - 36+ real, officially verified welfare schemes (at least 6 per state + 6 central schemes).
   - Structured metadata: Scheme ID, Department, Category, Benefit Amount, Structured Criteria (age, income ceiling, gender, occupation), Required Documents, and Step-by-Step Procedure.
2. **Smart Scheme Finder (Interactive AI Questionnaire)**:
   - 5-step questionnaire analyzing state, demographics, occupation, household income, and welfare interest.
   - Algorithmic percentage match scoring with detailed *"Why You Qualify"* explanations.
3. **Multi-Scheme Side-by-Side Comparison Matrix**:
   - Compare 2 to 3 schemes simultaneously across financial benefits, age criteria, income limits, target group, and documents.
4. **Interactive Document Checklist & Print Utility**:
   - Real-time progress bar tracking documents gathered before applying.
   - Clean, formatted print-friendly checklist (`window.print()` optimized).
5. **Citizen Application Tracker**:
   - Citizen demonstration workflow: save application reference numbers, track status (`Interested`, `Applied`, `Under Review`, `Approved`, `Rejected`), and update personal notes.
6. **SahayBot AI Guide (Chatbot)**:
   - Real-time question answering powered by the scheme knowledgebase.
   - Provides instant answers for student scholarships in Karnataka, farmer subsidies in Telangana, women welfare in Tamil Nadu, and required certificates.
7. **Multilingual Interface Dictionary**:
   - 5 languages supported: **English**, **Kannada (ಕನ್ನಡ)**, **Tamil (தமிழ்)**, **Telugu (తెలుగు)**, and **Malayalam (മലയാളം)**.
8. **Admin Control Dashboard**:
   - State-wise and category-wise scheme counts.
   - Full CRUD: Add Scheme, Edit Scheme, Delete Scheme with confirmation modals, and Publish Announcements.
9. **Announcements & Deadlines Feed**:
   - Verification drives, application opening dates, and closing deadlines.

---

## 🛠️ Technology Stack

| Component | Technology | Description |
|---|---|---|
| **Development Environment** | Visual Studio Code | Primary IDE |
| **Frontend Framework** | React.js (v18) + Vite | Fast, modern component-based UI |
| **Styling & Icons** | Custom CSS3 & Inline SVG Icons | Accessible, responsive, Indian tricolor-inspired theme |
| **Routing** | React Router DOM (v6) | Seamless client-side navigation |
| **Backend Server** | Node.js & Express.js | RESTful API architecture |
| **Data Persistence** | JSON File Database + localStorage | Atomic reads/writes without complex database setup |
| **Version Control** | Git & GitHub | Modular repository structure |

*No paid APIs, Python, or Java dependencies are required.*

---

## 📁 Clean Folder Structure

```
JanaSahay/
├── client/
│   ├── public/
│   │   └── favicon.svg           # Indian emblem motif favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── DisclaimerBanner.jsx  # Academic notice alert
│   │   │   ├── DocumentChecklist.jsx # Interactive & printable checklist
│   │   │   ├── Footer.jsx            # State directory & emergency helplines
│   │   │   ├── Icons.jsx             # Comprehensive inline SVG icon library
│   │   │   ├── Navbar.jsx            # Responsive navigation & language selector
│   │   │   ├── SchemeCard.jsx        # Scheme card with badges & actions
│   │   │   └── ChatbotWidget.jsx     # Global floating AI assistant
│   │   ├── context/
│   │   │   ├── AuthContext.jsx       # Citizen & Admin authentication state
│   │   │   └── LanguageContext.jsx   # 5-language dictionary provider
│   │   ├── data/
│   │   │   ├── schemesData.js        # 36 authentic South Indian schemes
│   │   │   ├── southIndiaStates.js   # State metadata & portals
│   │   │   └── translations.js       # EN, KN, TA, TE, ML translations
│   │   ├── pages/
│   │   │   ├── HomePage.jsx          # Hero, state cards, categories, statistics
│   │   │   ├── ExploreSchemesPage.jsx# Multi-filter search & schemes grid
│   │   │   ├── SchemeDetailsPage.jsx # In-depth scheme view & procedures
│   │   │   ├── SmartFinderPage.jsx   # 5-step questionnaire & match scoring
│   │   │   ├── ComparePage.jsx       # Side-by-side comparison matrix
│   │   │   ├── ApplicationTrackerPage.jsx # Application tracking pipeline
│   │   │   ├── SavedSchemesPage.jsx  # Bookmarked schemes
│   │   │   ├── NotificationsPage.jsx # Curated deadlines & announcements
│   │   │   ├── ChatbotPage.jsx       # Full-screen SahayBot interface
│   │   │   ├── AdminDashboardPage.jsx# Admin metrics, scheme CRUD & notifs
│   │   │   ├── LoginPage.jsx         # Login, Register & 1-click Demo buttons
│   │   │   ├── AboutPage.jsx         # Project vision, tech stack & ethics
│   │   │   └── ContactPage.jsx       # Helpline directory & grievance form
│   │   ├── styles/
│   │   │   ├── App.css               # Complete styling system
│   │   │   └── index.css             # Base CSS variables & print stylesheet
│   │   ├── App.jsx                   # Route configuration
│   │   └── main.jsx                  # React application entry point
│   ├── index.html                    # HTML5 shell with Google Fonts
│   ├── vite.config.js                # Vite server & API proxy config
│   └── package.json                  # Frontend dependencies
│
├── server/
│   ├── data/
│   │   ├── applications.json         # User-tracked application records
│   │   ├── dbHelper.js               # Safe atomic JSON read/write helper
│   │   ├── notifications.json        # Curated government announcements
│   │   ├── schemes.json              # 36 comprehensive schemes database
│   │   └── users.json                # Demo citizen & admin credentials
│   ├── routes/
│   │   ├── applications.js           # Tracker CRUD endpoints
│   │   ├── auth.js                   # Authentication & profile endpoints
│   │   ├── chatbot.js                # AI question-matching NLP route
│   │   ├── notifications.js          # Announcement routes
│   │   ├── schemes.js                # Scheme search & filter endpoints
│   │   └── stats.js                  # Analytics dashboard metrics
│   ├── server.js                     # Express app setup on port 5000
│   └── package.json                  # Backend dependencies
│
├── .gitignore
├── package.json                      # Root workspace scripts
└── README.md                         # Complete project documentation
```

---

## ⚡ Quick Start Guide (How to Run Frontend & Backend)

### Prerequisites
Make sure you have **Node.js (v18+)** and **npm** installed on your system.

### Step 1: Open Terminal in VS Code
Open the project directory in VS Code:
```bash
cd JanaSahay
```

### Step 2: Install Dependencies
Run the install command for both backend and frontend:

**Option A (Single Command from Root):**
```bash
npm run install:all
```

**Option B (Separate Directories):**
```bash
# Install Server Dependencies
cd server
npm install

# Install Client Dependencies
cd ../client
npm install
```

---

### Step 3: Run the Application

#### 1. Start the Backend Server (Terminal 1)
```bash
# From JanaSahay root:
npm run server

# Or from JanaSahay/server:
node server.js
```
*Backend runs on: `http://localhost:5000`*  
*Health Check: `http://localhost:5000/api/health`*

#### 2. Start the Frontend Client (Terminal 2)
```bash
# Open a second terminal and navigate to client:
cd client
npm run dev
```
*Frontend runs on: `http://localhost:3000`*

Open your browser and navigate to: **`http://localhost:3000`**

---

## 👤 Demonstration User Accounts

For immediate evaluation during examination or viva, the portal includes pre-configured demo credentials and **1-Click Quick Demo Login** buttons:

| Role | Email | Password | Access / Features |
|---|---|---|---|
| **Citizen Demo** | `citizen@janasahay.gov.in` | `Password@123` | Application tracker, saved schemes, custom status updates |
| **Admin Demo** | `admin@janasahay.gov.in` | `AdminPassword@123` | Admin dashboard, add/edit/delete schemes, publish announcements |

---

## 🌐 Complete API Documentation

### Schemes API (`/api/schemes`)
- `GET /api/schemes`: Fetch all schemes. Supports query params:
  - `search` (keyword search across name, description, tags)
  - `state` (e.g. `Karnataka`, `Tamil Nadu`, `Kerala`, `Andhra Pradesh`, `Telangana`, `Central`)
  - `category` (e.g. `Education`, `Agriculture`, `Healthcare`, `Women Empowerment`)
  - `occupation` (e.g. `student`, `farmer`, `unemployed`)
  - `gender` (e.g. `Female`, `Male`)
  - `sort` (`verified`, `name-asc`, `name-desc`)
- `GET /api/schemes/:id`: Fetch single scheme details by ID.
- `POST /api/schemes`: Add new scheme (Admin).
- `PUT /api/schemes/:id`: Update existing scheme (Admin).
- `DELETE /api/schemes/:id`: Remove scheme (Admin).

### Chatbot AI API (`/api/chatbot`)
- `POST /api/chatbot/query`: Analyzes citizen query string, matches state and domain intents, and returns relevant schemes with official links.

### Tracker API (`/api/applications`)
- `GET /api/applications?userId=:id`: Retrieve citizen application records.
- `POST /api/applications`: Create a new application tracking entry.
- `PUT /api/applications/:id`: Update application status or personal notes.
- `DELETE /api/applications/:id`: Delete application tracking record.

### Statistics API (`/api/stats`)
- `GET /api/stats`: Real-time aggregated statistics across states, categories, and applications.

---

## 📸 Screenshots & Key Views

1. **Homepage (`/`)**: Hero banner with dual search & state filter, transparent statistical counters, South Indian state cards, and popular categories.
2. **Explore Schemes (`/schemes`)**: Multi-filter toolbar (State, Category, Occupation, Gender, Sort), active filter badges, and comparative scheme cards.
3. **Smart Scheme Finder (`/finder`)**: 5-step interactive questionnaire evaluating citizen profile and calculating percentage match qualification with tailored checklists.
4. **Scheme Details (`/scheme/:id`)**: Comprehensive departmental breakdown, direct benefit transfer details, interactive document checklist with print view, and official portal link modal.
5. **Compare Schemes (`/compare`)**: Side-by-side comparison table of 2 to 3 schemes across benefits, age criteria, income limits, and documents.
6. **Application Tracker (`/tracker`)**: Citizen demonstration workspace with status workflow (`Interested` ➔ `Applied` ➔ `Under Review` ➔ `Approved` ➔ `Rejected`).
7. **SahayBot AI (`/chatbot`)**: Instant query answering for student scholarships, farmer subsidies, and women's welfare.
8. **Admin Portal (`/admin`)**: Metric KPI cards, CRUD scheme management with form validation, and announcement publishing.

---

## 📤 Git & GitHub Upload Instructions

To upload this complete project to your personal GitHub repository, execute the following commands in VS Code terminal:

```bash
# 1. Navigate to the project root
cd JanaSahay

# 2. Initialize Git repository
git init

# 3. Add all files
git add .

# 4. Commit files
git commit -m "Initial commit: JanaSahay Smart Government Schemes Portal v1.0"

# 5. Set main branch
git branch -M main

# 6. Add your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/JanaSahay.git

# 7. Push to GitHub
git push -u origin main
```

---

## 🎓 Academic Presentation Notes (Viva / Review Guide)

- **South Indian Regional Relevance**: Focuses on major state welfare models (Karnataka's Guarantee Schemes, Kerala's Karunya/Kudumbashree, Tamil Nadu's Pudhumai Penn/KMUT, Andhra Pradesh's Navasakam/Aarogyasri, and Telangana's Rythu Bharosa/Dalit Bandhu).
- **Zero Paid Dependencies**: Built completely with vanilla React, Express, and JSON storage, ensuring zero hosting or runtime costs.
- **Privacy by Design**: Prevents identity theft by operating client-side document checklists without storing sensitive citizen identity papers.
- **Academic Distinction**: Explicit disclaimer badges assure evaluators that the platform maintains high ethical standards and does not pretend to be an official government portal.

---

**JanaSahay – One Portal, Every Government Benefit.**  
*Department of Computer Science and Engineering (AIML)*
