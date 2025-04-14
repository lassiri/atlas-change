import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Building2, Clock, Globe2, Mail, MapPin, Phone, Shield, Timer } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ExchangeRates from './pages/ExchangeRates';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
        {/* Navigation */}
        <nav className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold">ATLAS CHANGE</Link>
              <div className="space-x-6 rtl:space-x-reverse">
                <Link to="/" className="hover:text-blue-200 transition-colors">الرئيسية</Link>
                <Link to="/about" className="hover:text-blue-200 transition-colors">من نحن</Link>
                <Link to="/exchange-rates" className="hover:text-blue-200 transition-colors">أسعار الصرف</Link>
                <Link to="/contact" className="hover:text-blue-200 transition-colors">اتصل بنا</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-blue-950 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg mb-4">في ATLAS CHANGE، نحن أكثر من مجرد مكتب صرف... نحن شركاؤك في الثقة.</p>
            <p className="text-sm text-blue-400">© {new Date().getFullYear()} ATLAS CHANGE. جميع الحقوق محفوظة</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;