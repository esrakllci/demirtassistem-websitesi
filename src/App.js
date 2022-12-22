import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import { useTranslation } from 'react-i18next';

function App() {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const handleClick2 = () => {
    i18n.language === 'en' ? i18n.changeLanguage('tr') : i18n.changeLanguage('en')
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>

  );
}

export default App;
