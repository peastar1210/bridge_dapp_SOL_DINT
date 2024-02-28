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
import { Account, ConnectWallet } from "@/layout";
import WalletButton from "./WalletButton";
import { useConnect, useAccount } from "wagmi";

export default function ConnectWalletButton() {
	const { connectors, connect } = useConnect();
	const { isConnected } = useAccount();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			{!isConnected ? (
				<Button
					colorScheme="blackAlpha"
					color="#ECCC81"
					_hover={{ bg: "#ECCC81", color: "#000000" }}
					onClick={onOpen}
				>
					Connect Wallet
				</Button>
			) : (
				<Account />
			)}

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
							{connectors.map((connector, index) => {
								return (
									<WalletButton
										key={index}
										walletName={connector.name}
										walletLogoUri={`/wallets/${connector.name.toLowerCase()}.svg`}
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
