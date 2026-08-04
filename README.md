# Government Scheme Finder

## Overview

Government Scheme Finder is an AI-powered web application that helps users discover government welfare schemes based on their needs. Instead of manually searching through multiple websites, users can describe their situation in natural language, and the application identifies relevant schemes and provides a concise summary.

## Features

* 🔍 Search government schemes using plain English
* 🤖 AI-generated summaries for easy understanding
* 📋 Displays multiple relevant schemes with details
* ⚡ Fast and responsive React interface
* 🌐 FastAPI backend for efficient API handling

## Tech Stack

**Frontend**

* React.js
* Vite
* CSS

**Backend**

* FastAPI
* Python
* Axios

**AI**

* Google Gemini API

## Project Structure

```text
government-scheme-finder/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sravya-0106/government-scheme-finder.git
cd government-scheme-finder
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Future Improvements

* User authentication
* State-wise scheme filtering
* Bookmark favorite schemes
* Multilingual support
* Direct links to official application portals

## Author

**Sravya R**

If you found this project useful, feel free to ⭐ the repository!
