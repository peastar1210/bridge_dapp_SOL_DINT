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
import { useConnect } from "wagmi";

export default function ConnectWalletButton() {
	const { connectors, connect } = useConnect();
	const { isOpen, onOpen, onClose } = useDisclosure();

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
							{connectors.map((connector) => {
								return (
									<WalletButton
										walletName={connector.name}
										walletLogoUri={`/wallets/${connector.name}.svg`}
										onClick={() => {
											connect({ connector });
										}}
									/>
								);
							})}
						</Grid>
					</ModalBody>

					<ModalFooter pb="30px"></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
