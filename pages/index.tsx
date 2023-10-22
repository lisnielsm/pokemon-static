import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout title="Listado de Pokemons">
			<div className="w-full grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl px-6">
				{pokemons.map((pokemon: SmallPokemon) => (
					<PokemonCard
						key={pokemon.id}
						pokemon={pokemon}	
					/>
				))}
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await pokeApi.get<PokemonListResponse>(
		"/pokemon?limit=151"
	);

	const pokemons: SmallPokemon[] = data.results.map((pokemon) => {
		const urlParts = pokemon.url.split("/");
		const id = urlParts[urlParts.length - 2];
		const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

		return {
			...pokemon,
			id,
			img,
		};
	});

	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
