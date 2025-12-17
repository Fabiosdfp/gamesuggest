// Simula uma chamada de API com delay
export const fetchGames = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await import('./games.json');
      const data = response.default;
      
      // Transforma os dados em um array único
      const allGames = [
        ...data.Nintendo,
        ...data.RTS_PC,
        ...data.Playstation_RPG
      ];
      
      resolve(allGames);
    }, 500); // Simula delay de rede
  });
};

// Busca um jogo por ID
export const fetchGameById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await import('./games.json');
      const data = response.default;
      
      const allGames = [
        ...data.Nintendo,
        ...data.RTS_PC,
        ...data.Playstation_RPG
      ];
      
      const game = allGames.find(g => g.id === id);
      
      if (game) {
        resolve(game);
      } else {
        reject(new Error('Jogo não encontrado'));
      }
    }, 300);
  });
};
