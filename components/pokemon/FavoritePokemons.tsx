import { FC } from "react";
import { FavoriteCardPokemon } from "./";

interface Props {
	pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
	return (
		<div className="w-full grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl px-6">
			{pokemons.map((id) => (
				<FavoriteCardPokemon
          key={id}
          pokemonId={id}
        />
			))}
		</div>
	);
};
