import { FC } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({pokemonId}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemonId}`);
  }

	return (
		<Card key={pokemonId} isHoverable isPressable style={{ height: "100%" }} onClick={onClick}>
			<CardBody className="flex justify-center items-center">
				<Image
					radius="none"
					width="100%"
					alt={"Pokemon name"}
					className="w-full h-[140px]"
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
				/>
			</CardBody>
		</Card>
	);
};
