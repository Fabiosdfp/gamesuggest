import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchGames } from '../../data/api';
import GameCard from '../../components/GameCard/GameCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Alert from '../../components/Alert/Alert';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import './Biblioteca.css';

const Biblioteca = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('Todas');
  const [sortBy, setSortBy] = useState('title-asc');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();

  // Lê o parâmetro de plataforma da URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const platform = params.get('plataforma');
    if (platform) {
      setPlatformFilter(platform);
    }
  }, [location.search]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        const data = await fetchGames();
        setGames(data);
      } catch (err) {
        console.error('Erro ao carregar jogos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  useEffect(() => {
    let filtered = [...games];

    // Filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(game =>
        game.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro de plataforma
    if (platformFilter !== 'Todas') {
      filtered = filtered.filter(game => game.plataforma === platformFilter);
    }

    // Ordenação
    switch (sortBy) {
      case 'title-asc':
        filtered.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
      case 'title-desc':
        filtered.sort((a, b) => b.titulo.localeCompare(a.titulo));
        break;
      case 'rating-desc':
        filtered.sort((a, b) => b.nota - a.nota);
        break;
      case 'rating-asc':
        filtered.sort((a, b) => a.nota - b.nota);
        break;
      default:
        break;
    }

    setFilteredGames(filtered);
  }, [games, searchTerm, platformFilter, sortBy]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setPlatformFilter('Todas');
    setSortBy('title-asc');
    navigate('/biblioteca');
  };

  const handleAddToWishlist = (game) => {
    setModalMessage(`"${game.titulo}" foi adicionado à sua lista de desejos!`);
    setShowModal(true);
  };

  if (loading) {
    return <LoadingSpinner message="Carregando biblioteca..." />;
  }

  const platforms = ['Todas', ...new Set(games.map(g => g.plataforma))];

  return (
    <div className="biblioteca">
      <div className="biblioteca-header">
        <h1 className="page-title">📚 Biblioteca de Jogos</h1>
        <p className="page-subtitle">Explore nossas recomendações</p>
      </div>

      <div className="filters-section">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar jogos pelo título..."
        />

        <div className="filters-row">
          <div className="filter-group">
            <label htmlFor="platform-filter" className="filter-label">
              Plataforma
            </label>
            <select
              id="platform-filter"
              className="filter-select"
              value={platformFilter}
              onChange={(e) => setPlatformFilter(e.target.value)}
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>
                  {platform === 'Todas' ? '🎮 Todas' : platform}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-filter" className="filter-label">
              Ordenar por
            </label>
            <select
              id="sort-filter"
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="title-asc">A → Z</option>
              <option value="title-desc">Z → A</option>
              <option value="rating-desc">Melhor nota</option>
              <option value="rating-asc">Menor nota</option>
            </select>
          </div>

          <Button
            variant="outline"
            size="medium"
            onClick={handleClearFilters}
            title="Limpar todos os filtros"
          >
            🔄 Limpar Filtros
          </Button>
        </div>
      </div>

      <div className="results-info">
        <p className="results-text">
          {filteredGames.length === 0 ? (
            <Alert type="warning" message="Nenhum jogo encontrado com os filtros aplicados." />
          ) : (
            <>
              Exibindo <strong>{filteredGames.length}</strong> de{' '}
              <strong>{games.length}</strong> jogos
            </>
          )}
        </p>
      </div>

      {filteredGames.length > 0 && (
        <div className="games-grid">
          {filteredGames.map(game => (
            <GameCard
              key={game.id}
              game={game}
              showAddToWishlist={true}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="✓ Sucesso!"
      >
        <div className="modal-success">
          <p>{modalMessage}</p>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Biblioteca;
