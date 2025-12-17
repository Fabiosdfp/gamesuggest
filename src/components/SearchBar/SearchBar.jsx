import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Buscar jogos..." }) => {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Campo de busca"
      />
      {searchTerm && (
        <button 
          className="clear-button"
          onClick={() => onSearchChange('')}
          aria-label="Limpar busca"
          title="Limpar busca"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
