import Image from "next/image";

import {
	Navbar as NextNavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	// NavbarMenuToggle,
	// NavbarMenu,
	// NavbarMenuItem,
	Button,
	Link,
} from "@nextui-org/react";

export const Navbar = () => {
	return (
		<NextNavbar className="bg-gray-900 py-2">
			<NavbarBrand>
				<Link href="/">
					<Image
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
						alt="Picture of Pikachu"
						width={50}
						height={50}
						className="mr-2"
					/>
					<h2 className="text-white text-2xl font-bold">P</h2>
					<h3 className="text-white text-xl">ókemon</h3>
				</Link>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					<div className="p-0.5 rounded-medium bg-gradient-to-r from-purple-500 to-blue-500">
						<Button
							as={Link}
							href="/favorites"
							className="bg-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 text-white"
							variant="flat"
						>
							Favoritos
						</Button>
					</div>
				</NavbarItem>
			</NavbarContent>
		</NextNavbar>
	);
};
