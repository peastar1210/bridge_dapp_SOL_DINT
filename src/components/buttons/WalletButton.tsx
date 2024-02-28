import { Button, Flex, Text, Image } from "@chakra-ui/react";

type WalletButtonProps = {
	walletName: string;
	walletLogoUri: string;
	onClick: () => void;
};

export default function WalletButton({
	walletName,
	walletLogoUri,
	onClick,
}: WalletButtonProps) {
	return (
		<Button
			size={"lg"}
			w="full"
			justifyContent={"flex-start"}
			border="1px solid #353539"
			color="#EFEFE599"
			borderRadius="0px"
			backgroundColor="#121217"
			_hover={{
				color: "#ECCC81",
				borderColor: "#ECCC81",
			}}
			leftIcon={
				walletLogoUri === "default" ? (
					<Flex
						w="24px"
						h="24px"
						backgroundColor="#EFEFE54D"
						borderRadius="8px"
					/>
				) : (
					<Image
						w={6}
						h={6}
						src={walletLogoUri}
						alt={walletName.toLowerCase()}
					/>
				)
			}
			iconSpacing={3}
			onClick={onClick}
		>
			<Text
				textTransform="uppercase"
				whiteSpace="pre-line"
				textAlign="left"
				flexGrow={1}
			>
				{walletName}
			</Text>
			<Text>{`>`}</Text>
		</Button>
	);
}
