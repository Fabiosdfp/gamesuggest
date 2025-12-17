import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Biblioteca from './pages/Biblioteca/Biblioteca';
import DetalhesJogo from './pages/DetalhesJogo/DetalhesJogo';
import Wishlist from './pages/Wishlist/Wishlist';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/jogo/:id" element={<DetalhesJogo />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
