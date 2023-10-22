import { useState, useEffect } from "react";

import { Layout } from "@/components/layouts";
import { localFavorites } from "@/utils";
import { FavoritePokemons, NoFavorites } from "@/components/pokemon";

const FavoritosPage = () => {
	const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritesPokemons(localFavorites.favoritesPokemon);
	}, []);

	return (
		<Layout title="Pokemons - Favorites">
			{favoritesPokemons.length > 0 ? (
				<FavoritePokemons pokemons={favoritesPokemons} />
			) : (
				<NoFavorites />
			)}
		</Layout>
	);
};

export default FavoritosPage;
