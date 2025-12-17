import { useState, useEffect } from 'react';
import { fetchGames } from '../../data/api';
import GameCard from '../../components/GameCard/GameCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Alert from '../../components/Alert/Alert';
import './Wishlist.css';

const Wishlist = () => {
  const [allGames, setAllGames] = useState([]);
  const [wishlistGames, setWishlistGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [platformFilter, setPlatformFilter] = useState('Todas');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        const data = await fetchGames();
        setAllGames(data);
        
        // Simula uma wishlist com alguns jogos
        // Em produção, isso viria uma API
        const sampleWishlist = data.slice(2, 5);
        setWishlistGames(sampleWishlist);
      } catch (err) {
        console.error('Erro ao carregar jogos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const handleAddToLibrary = (game) => {
    setWishlistGames(prev => prev.filter(g => g.id !== game.id));
    setNotification({
      type: 'success',
      message: `"${game.titulo}" foi adicionado à sua biblioteca!`
    });
    
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleRemoveFromWishlist = (game) => {
    setWishlistGames(prev => prev.filter(g => g.id !== game.id));
    setNotification({
      type: 'info',
      message: `"${game.titulo}" foi removido da lista de desejos.`
    });
    
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  if (loading) {
    return <LoadingSpinner message="Carregando lista de desejos..." />;
  }

  const platforms = ['Todas', ...new Set(allGames.map(g => g.plataforma))];
  const filteredWishlist = platformFilter === 'Todas'
    ? wishlistGames
    : wishlistGames.filter(g => g.plataforma === platformFilter);

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <h1 className="page-title">🎯 Lista de Desejos</h1>
        <p className="page-subtitle">
          Seu proxímo jogo está aqui! Gerencie os títulos que você deseja
          adquirir.
        </p>
      </div>

      {notification && (
        <Alert
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {wishlistGames.length > 0 && (
        <div className="wishlist-filters">
          <label htmlFor="platform-filter" className="filter-label">
            Filtrar por plataforma:
          </label>
          <select
            id="platform-filter"
            className="filter-select"
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>
                {platform === 'Todas' ? '🎮 Todas as plataformas' : platform}
              </option>
            ))}
          </select>
        </div>
      )}

      {wishlistGames.length === 0 ? (
        <div className="empty-wishlist">
          <div className="empty-icon">📋</div>
          <h2 className="empty-title">Sua wishlist está vazia!</h2>
          <p className="empty-text">
            Adicione jogos da biblioteca para acompanhar os títulos que você
            deseja adquirir.
          </p>
          <a href="/biblioteca" className="empty-button">
            🎮 Explorar Biblioteca
          </a>
        </div>
      ) : (
        <>
          <div className="wishlist-count">
            <p>
              {filteredWishlist.length === 0 ? (
                <>Nenhum jogo encontrado nesta plataforma.</>
              ) : (
                <>
                  Você tem <strong>{filteredWishlist.length}</strong>{' '}
                  {filteredWishlist.length === 1 ? 'jogo' : 'jogos'} na sua
                  lista de desejos
                </>
              )}
            </p>
          </div>

          {filteredWishlist.length > 0 && (
            <div className="wishlist-grid">
              {filteredWishlist.map(game => (
                <div key={game.id} className="wishlist-item">
                  <GameCard game={game} />
                  <div className="wishlist-actions">
                    <button
                      className="wishlist-btn btn-remove"
                      onClick={() => handleRemoveFromWishlist(game)}
                      title="Remover da lista"
                    >
                      ✕ Remover da Lista
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Wishlist;
