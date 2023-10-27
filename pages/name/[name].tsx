import { FC, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import confetti from "canvas-confetti";

import { Layout } from "@/components/layouts";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { pokeApi } from "@/api";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { localFavorites } from "@/utils";

interface Props {
	pokemon: Pokemon;
}

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
	const { id, name, sprites } = pokemon;
	const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);

	const [isInFavorites, setIsInFavorites] = useState(false);

	useEffect(() => {
		setIsInFavorites(localFavorites.existInFavorites(id));
	}, [id]);

	const onToggleFavorites = () => {
		localFavorites.toggleFavorites(id);
		
		if(!isInFavorites) {
			confetti({
				zIndex: 999,
				particleCount: 100,
				spread: 160,
				angle: -100,
				origin: {
					x: 1,
					y: 0,
				},
			});
		}

		setIsInFavorites((prev) => !prev);
	};

	return (
		<Layout title={capitalizeName}>
			<main className="w-full max-w-5xl flex flex-col sm:flex-row px-6 gap-4">
				<div className="w-full sm:w-1/3">
					<Card isHoverable style={{ height: "100%" }}>
						<CardBody className="flex justify-center items-center">
							<Image
								radius="none"
								width="100%"
								alt={name}
								className="w-full h-[200px]"
								src={
									sprites.other?.dream_world.front_default ??
									"/no-image-png"
								}
							/>
						</CardBody>
					</Card>
				</div>
				<div className="w-full sm:w-2/3">
					<Card style={{ height: "100%" }}>
						<CardHeader className="flex flex-col sm:flex-row justify-between">
							<h1 className="text-2xl font-bold capitalize mb-2 sm:mb-0">
								{name}
							</h1>
							<div className="p-0.5 rounded-medium bg-gradient-to-r from-purple-500 to-blue-500">
								{isInFavorites ? (
									<Button
										className="bg-transparent text-white min-w-[160px]"
										variant="flat"
										onClick={onToggleFavorites}
									>
										En Favoritos
									</Button>
								) : (
									<Button
										className="bg-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 text-white"
										variant="flat"
										onClick={onToggleFavorites}
									>
										Guardar en Favoritos
									</Button>
								)}
							</div>
						</CardHeader>
						<CardBody>
							<p className="text-xl">Sprites:</p>
							<div className="flex justify-evenly mt-2 flex-wrap">
								<Image
									radius="none"
									alt={name}
									className="h-[100px] w-[100px]"
									src={sprites.front_default}
								/>
								<Image
									radius="none"
									alt={name}
									className="h-[100px] w-[100px]"
									src={sprites.back_default}
								/>
								<Image
									radius="none"
									alt={name}
									className="h-[100px] w-[100px]"
									src={sprites.front_shiny}
								/>
								<Image
									radius="none"
									alt={name}
									className="h-[100px] w-[100px]"
									src={sprites.back_shiny}
								/>
							</div>
						</CardBody>
					</Card>
				</div>
			</main>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

	return {
		paths: pokemonNames.map(name => ({
			params: { name }
		})),
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	try {
		const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
	
		return {
			props: {
				pokemon: {
					id: data.id,
					name: data.name,
					sprites: data.sprites,
				},
			},
			revalidate: 86400,
		};
	} catch (error) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			}
		}
	}
};

export default PokemonByNamePage;
