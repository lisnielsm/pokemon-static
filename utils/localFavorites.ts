
const toggleFavorites = (id: number) => {

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter((item) => item !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number): boolean => {
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(id);
}

const favoritesPokemon = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  toggleFavorites,
  existInFavorites,
  favoritesPokemon,
}
