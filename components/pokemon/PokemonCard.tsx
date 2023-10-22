import { useRouter } from "next/router";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { SmallPokemon } from "@/interfaces";
import { FC } from "react";

interface Props {
	pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, img } = pokemon;

  const router = useRouter();

	return (
		<Card
			shadow="sm"
			key={id}
			isPressable
			onPress={() => router.push(`/name/${name}`)}
		>
			<CardBody className="overflow-visible p-0">
				<Image
					shadow="sm"
					radius="none"
					width="100%"
					alt={name}
					className="w-full h-[140px] p-2"
					src={img}
				/>
			</CardBody>
			<CardFooter className="text-small justify-between">
				<p className="capitalize">{name}</p>
				<p className="text-default-500">#{id}</p>
			</CardFooter>
		</Card>
	);
};
