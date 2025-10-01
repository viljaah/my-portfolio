import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import ProjectsDetail from './components/Projects/ProjectDetail';
import NotFound from './components/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const validRoutes = ['/'];
  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {isValidRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:projectUrl" element={<ProjectsDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App;
