import React, { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutProps {
	children: React.ReactNode;
	title?: string;
}

const origin = (typeof window !== "undefined" && window.location.origin) || "";

export const Layout: FC<LayoutProps> = ({ children, title = "PokemonApp" }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="author" content="Lisniel Sanchez" />
				<meta
					name="description"
					content={`Información sobre el pokemon ${title}`}
				/>
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />

				<meta
					property="og:title"
					content={`Información sobre el pokemon ${title}`}
				/>
				<meta
					property="og:description"
					content={`Información sobre el pokemon ${title}`}
				/>
				<meta
					property="og:image"
					content={`${origin}/banner.png`}
				/>
			</Head>

			<Navbar />

			<main className="flex flex-col justify-center items-center w-full py-4">
				{children}
			</main>
		</>
	);
};
