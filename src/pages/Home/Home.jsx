import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchGames } from '../../data/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Alert from '../../components/Alert/Alert';
import './Home.css';

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        const data = await fetchGames();
        setGames(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar os jogos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) return <LoadingSpinner message="Carregando sua biblioteca..." />;

  const totalGames = games.length;
  const platforms = [...new Set(games.map(g => g.plataforma))];
  const averageScore = Math.round(games.reduce((acc, g) => acc + g.nota, 0) / totalGames);

  return (
    <div className="home">
      {error && <Alert type="error" message={error} onClose={() => setError(null)} />}
      
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-icon">🎮</span>
            Games Suggest
          </h1>
          <p className="hero-subtitle">
            Seu hub de sugestão de jogos curados pela nossa equipe apaixonada
          </p>
          <div className="hero-actions">
            <Link to="/biblioteca" className="hero-btn btn-primary">
              Ver Biblioteca Completa
            </Link>
            <Link to="/wishlist" className="hero-btn btn-secondary">
              Lista de Desejos
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-value">{totalGames}</div>
            <div className="stat-label">Total de Jogos</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-value">{platforms.length}</div>
            <div className="stat-label">Plataformas</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-value">{averageScore}</div>
            <div className="stat-label">Nota Média</div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Destaques da Biblioteca</h2>
        <div className="featured-games">
          {games
            .sort((a, b) => b.nota - a.nota)
            .slice(0, 3)
            .map(game => (
              <Link to={`/jogo/${game.id}`} key={game.id} className="featured-game">
                <div className="featured-image">
                  <img src={game.imagem} alt={game.titulo} />
                  <div className="featured-overlay">
                    <div className="featured-rating">⭐ {game.nota}</div>
                  </div>
                </div>
                <div className="featured-info">
                  <h3 className="featured-title">{game.titulo}</h3>
                  <p className="featured-platform">{game.plataforma}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section className="platforms-section">
        <h2 className="section-title">Jogos por Plataforma</h2>
        <div className="platforms-grid">
          {platforms.map(platform => {
            const platformGames = games.filter(g => g.plataforma === platform);
            return (
              <Link 
                to={`/biblioteca?plataforma=${platform}`} 
                key={platform}
                className="platform-card"
              >
                <div className="platform-icon">
                  {platform === 'Nintendo' && '🎮'}
                  {platform === 'PC' && '💻'}
                  {platform === 'PlayStation' && '🎯'}
                </div>
                <h3 className="platform-name">{platform}</h3>
                <p className="platform-count">{platformGames.length} jogos</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
