import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
	useDisclosure,
	Flex,
	Grid,
} from "@chakra-ui/react";
import { ConnectWallet } from "@/layout";
import WalletButton from "./WalletButton";

export default function ConnectWalletButton() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// const getBlockIcon = (chainId: number) => {
	// 	switch (chainId) {
	// 		case mainnet.id:
	// 		case sepolia.id:
	// 			return <EthereumIcon />;
	// 		case bsc.id:
	// 		case bscTestnet.id:
	// 		case opBnbMainnet.id:
	// 		case opBnbTestnet.id:
	// 			return <BSCIcon />;
	// 		case polygon.id:
	// 		case polygonMumbai.id:
	// 			return <PolygonIcon />;
	// 		case avalanche.id:
	// 		case avalancheFuji.id:
	// 			return <AvalancheIcon />;
	// 		case 0:
	// 			return <TronIcon />;
	// 		case skaleTitanTestnet.id:
	// 			return <SkaleIcon w="30px" h="30px" />;
	// 		case scroll.id:
	// 		case scrollSepolia.id:
	// 			return <ScrollIcon w="30px" h="30px" />;
	// 	}
	// };

	return (
		<>
			<Button
				colorScheme="blackAlpha"
				color="#ECCC81"
				_hover={{ bg: "#ECCC81", color: "#000000" }}
				onClick={onOpen}
			>
				Connect Wallet
			</Button>

			<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />

				<ModalContent bgColor="#121217" borderRadius="0px" my="180px">
					<ModalHeader pt="45px">
						<Text
							w="100%"
							textAlign="center"
							fontSize="30px"
							color="rgb(239, 239, 229)"
						>
							Connect Wallet
						</Text>
					</ModalHeader>
					<ModalCloseButton color="rgba(239, 239, 229, 0.6)" />
					<ModalBody>
						<Grid templateColumns="repeat(1, 1fr)" gap="8px">
							{/* <ConnectWallet /> */}
							<WalletButton
								walletName="Metamask"
								walletLogoUri="/wallets/metamask.svg"
								onClick={() => {
									// connect("metaMask", false);
								}}
							/>
							<WalletButton
								walletName="WalletConnect"
								walletLogoUri="/wallets/wallet-connect.svg"
								onClick={() => {
									// connect("walletConnect", false);
									// onClose();
								}}
							/>
							<WalletButton
								walletName="Coinbase"
								walletLogoUri="/wallets/coinbase.svg"
								onClick={() => {
									// connect("coinbaseWallet", false)
								}}
							/>
							<WalletButton
								walletName="OKX Wallet"
								walletLogoUri="/wallets/okx.svg"
								onClick={() => {
									// connect("injected", false)
								}}
							/>
							<WalletButton
								walletName="Token Pocket"
								walletLogoUri="/wallets/tokenPocket.png"
								onClick={() => {
									// connect("tokenpocket", false)
								}}
							/>
						</Grid>
					</ModalBody>

					<ModalFooter pb="30px"></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
