import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';

import HomePage from './pages/HomePage';
import ExploreSchemesPage from './pages/ExploreSchemesPage';
import SchemeDetailsPage from './pages/SchemeDetailsPage';
import SmartFinderPage from './pages/SmartFinderPage';
import ComparePage from './pages/ComparePage';
import ApplicationTrackerPage from './pages/ApplicationTrackerPage';
import SavedSchemesPage from './pages/SavedSchemesPage';
import NotificationsPage from './pages/NotificationsPage';
import ChatbotPage from './pages/ChatbotPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import './styles/App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/schemes" element={<ExploreSchemesPage />} />
                <Route path="/scheme/:id" element={<SchemeDetailsPage />} />
                <Route path="/finder" element={<SmartFinderPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/tracker" element={<ApplicationTrackerPage />} />
                <Route path="/saved" element={<SavedSchemesPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
            {/* Global Chatbot Floating Action Widget */}
            <ChatbotWidget />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
