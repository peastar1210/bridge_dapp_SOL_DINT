import { Flex, Image, Text } from "@chakra-ui/react";

import ConnectWalletButton from "@/components/buttons/ConnectWalletButton";
import { Carter_One } from "next/font/google";

const CarterOne = Carter_One({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export default function Header() {
	return (
		<Flex
			width="100%"
			position="sticky"
			top="0px"
			justifyContent="space-between"
			justifyItems="center"
			p="20px 50px"
			bgColor="rgba(10, 10, 10, 0.8)"
		>
			<Flex alignItems="center">
				<Image w="35px" h="35px" src="/icons/logo.png" />
				<Text
					fontSize="20px"
					className={CarterOne.className}
					color="#ECCC81"
					pl="10px"
				>
					dBridge
				</Text>
			</Flex>
			<Flex>
				<ConnectWalletButton />
			</Flex>
			<Flex
				position="absolute"
				left="0"
				bottom="0"
				w="100%"
				h="1px"
				background="linear-gradient(90deg, rgba(250, 250, 250, 0.7) 10%, #ECCC81 50%, rgba(250, 250, 250, 0.7) 90%)"
			/>
		</Flex>
	);
}
