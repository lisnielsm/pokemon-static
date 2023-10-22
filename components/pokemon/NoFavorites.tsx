import { FC } from "react";
import { Image } from "@nextui-org/react";

export const NoFavorites: FC = () => {
	return (
		<div
			className="flex flex-col justify-center items-center"
			style={{ minHeight: "calc(100vh - 112px)" }}
		>
			<Image
				width={250}
				height={250}
				src="/no-favorites.svg"
				alt="No hay favoritos"
			/>
			<h1 className="text-2xl font-bold">No hay favoritos</h1>
		</div>
	);
};
