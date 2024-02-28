"use client";

import { useState } from "react";
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
	Flex,
	Grid,
	useDisclosure,
	Image,
	Input,
	GridItem,
} from "@chakra-ui/react";
import { Carter_One } from "next/font/google";
import { SolIcon } from "@/components/icons";

const CarterOne = Carter_One({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Flex direction="column" alignItems="center" w="full" h="full">
			<Flex mt="70px">
				<Button colorScheme="blackAlpha">
					<Text>Transfer</Text>
				</Button>
			</Flex>
			<Flex
				direction="column"
				position="relative"
				w="30%"
				p="50px"
				mt="20px"
				bgColor="rgba(0, 3, 7, 0.5)"
			>
				<Flex
					position="absolute"
					bottom="0"
					left="0"
					h="1px"
					w="100%"
					bg="linear-gradient(90deg, rgba(250, 250, 250, 0.7) 0%, #ECCC81 60%, #ffd77a 70%, #ECCC81 90%)"
				/>
				<Flex
					position="absolute"
					top="0"
					right="0"
					h="100%"
					w="1px"
					bg="linear-gradient(180deg, rgba(250, 250, 250, 0.7) 20%, #ECCC81 60%, #ffd77a 70%, #ECCC81 80%)"
				/>
				<Flex
					position="absolute"
					top="0"
					left="0"
					h="1px"
					w="100%"
					bg="linear-gradient(90deg, rgba(250, 250, 250, 0.7) 30%, #ECCC81 60%, #ffd77a 70%, #ECCC81 80%, rgba(250, 250, 250, 0.7) 90%)"
				/>
				<Flex
					position="absolute"
					top="0"
					left="0"
					h="100%"
					w="1px"
					bg="linear-gradient(0deg, rgba(250, 250, 250, 0.7) 0%, #ECCC81 60%, #ffd77a 70%, #ECCC81 80%, rgba(250, 250, 250, 0.7) 100%)"
				/>
				<Flex alignItems="center" pb="15px">
					<Text w="50px" color="rgb(143, 155, 179)">
						From
					</Text>

					<Button
						colorScheme="blackAlpha"
						color="rgb(212, 212, 212)"
						_hover={{ bg: "rgb(20, 20, 20)" }}
						borderRadius="15px"
						onClick={onClick}
					>
						<Flex alignItems="center">
							<Image src="chains/ethereum-chain.png" w="25px" h="25px" />
							<Text pl="5px" pr="20px">
								Ethereum Network
							</Text>
							<Image src="icons/downArrow.svg" />
						</Flex>
					</Button>

					<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClick}>
						<ModalOverlay />

						<ModalContent bgColor="#121217" borderRadius="0px" my="180px">
							<ModalHeader pt="45px">
								<Text
									w="100%"
									textAlign="center"
									fontSize="30px"
									color="rgb(239, 239, 229)"
								>
									Select Source Chain
								</Text>
							</ModalHeader>
							<ModalCloseButton color="rgba(239, 239, 229, 0.6)" />
							<ModalBody>
								<Grid templateColumns="repeat(1, 1fr)" gap="8px"></Grid>
							</ModalBody>

							<ModalFooter></ModalFooter>
						</ModalContent>
					</Modal>
				</Flex>
				<Flex
					direction="column"
					borderRadius="20px"
					bgColor="rgba(0, 3, 9, 0.5)"
					color="rgb(212, 212, 212)"
				>
					<Flex justifyContent="space-between" p="10px 25px" fontSize="12px">
						<Text>Send:</Text>
						<Text>Max: 0</Text>
					</Flex>
					<Flex justifyContent="space-between">
						<Input
							p="10px 25px"
							type="number"
							variant="unstyled"
							placeholder="0.0"
						/>
						<Button variant="unstyled" mr="30px" onClick={onClick}>
							<Flex>
								<Image src="chains/solana-chain.png" w="25px" h="25px" />
								<Text pl="5px">SOL</Text>
								<Image src="icons/downArrow.svg" />
							</Flex>
						</Button>
					</Flex>
				</Flex>
				<Flex justifyContent="center" my="20px">
					<Button variant="unstyled">
						<Image src="icons/swap.svg" w="30px" />
					</Button>
				</Flex>
				<Flex alignItems="center" pb="15px">
					<Text w="50px" color="rgb(143, 155, 179)">
						To
					</Text>

					<Button
						colorScheme="blackAlpha"
						color="rgb(212, 212, 212)"
						_hover={{ bg: "rgb(20, 20, 20)" }}
						borderRadius="15px"
						onClick={onClick}
					>
						<Flex alignItems="center">
							<Image src="chains/bsc-chain.png" w="25px" h="25px" />
							<Text pl="5px" pr="20px">
								BNB Chain
							</Text>
							<Image src="icons/downArrow.svg" />
						</Flex>
					</Button>

					<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClick}>
						<ModalOverlay />

						<ModalContent bgColor="#121217" borderRadius="0px" my="180px">
							<ModalHeader pt="45px">
								<Text
									w="100%"
									textAlign="center"
									fontSize="30px"
									color="rgb(239, 239, 229)"
								>
									Select Source Chain
								</Text>
							</ModalHeader>
							<ModalCloseButton color="rgba(239, 239, 229, 0.6)" />
							<ModalBody>
								<Grid templateColumns="repeat(2, 1fr)" gap="15px">
									<GridItem colSpan={2} mb="10px">
										<Input
											h="50px"
											borderRadius="full"
											borderColor="rgba(239, 239, 229, 0.6)"
											placeholder="Search chain by name or chain ID"
										/>
									</GridItem>
									<Button
										size={"lg"}
										w="full"
										px="12px"
										justifyContent={"flex-start"}
										border="1px solid #353539"
										color="#EFEFE599"
										borderRadius="0px"
										backgroundColor="#121217"
										_hover={{
											color: "#ECCC81",
											borderColor: "#ECCC81",
										}}
									>
										<Image src="chains/ethereum-chain.png" w="30px" h="30px" />
										<Text fontSize="14px" pl="10px">
											Ethereum Mainnet
										</Text>
									</Button>
									<Button
										size={"lg"}
										w="full"
										px="12px"
										justifyContent={"flex-start"}
										border="1px solid #353539"
										color="#EFEFE599"
										borderRadius="0px"
										backgroundColor="#121217"
										_hover={{
											color: "#ECCC81",
											borderColor: "#ECCC81",
										}}
									>
										<Image src="chains/bsc-chain.png" w="30px" h="30px" />
										<Text fontSize="14px" pl="10px">
											BNB Chain
										</Text>
									</Button>
									<Button
										size={"lg"}
										w="full"
										px="12px"
										justifyContent={"flex-start"}
										border="1px solid #353539"
										color="#EFEFE599"
										borderRadius="0px"
										backgroundColor="#121217"
										_hover={{
											color: "#ECCC81",
											borderColor: "#ECCC81",
										}}
									>
										<Image src="chains/polygon-chain.png" w="30px" h="30px" />
										<Text fontSize="14px" pl="10px">
											Polygon PoS
										</Text>
									</Button>
									<Button
										size={"lg"}
										w="full"
										px="12px"
										justifyContent={"flex-start"}
										border="1px solid #353539"
										color="#EFEFE599"
										borderRadius="0px"
										backgroundColor="#121217"
										_hover={{
											color: "#ECCC81",
											borderColor: "#ECCC81",
										}}
									>
										<Image src="chains/skale-chain.png" w="30px" h="30px" />
										<Text fontSize="14px" pl="10px">
											Skale Chain
										</Text>
									</Button>
									<Button
										size={"lg"}
										w="full"
										px="12px"
										justifyContent={"flex-start"}
										border="1px solid #353539"
										color="#EFEFE599"
										borderRadius="0px"
										backgroundColor="#121217"
										_hover={{
											color: "#ECCC81",
											borderColor: "#ECCC81",
										}}
									>
										<Image src="chains/arbitrum-chain.png" w="30px" h="30px" />
										<Text fontSize="14px" pl="10px">
											Arbitrum One
										</Text>
									</Button>
									<Button
										size={"lg"}
										w="full"
										px="12px"
										justifyContent={"flex-start"}
										border="1px solid #353539"
										color="#EFEFE599"
										borderRadius="0px"
										backgroundColor="#121217"
										_hover={{
											color: "#ECCC81",
											borderColor: "#ECCC81",
										}}
									>
										<Image src="chains/solana-chain.png" w="30px" h="30px" />
										<Text fontSize="14px" pl="10px">
											Solana Chain
										</Text>
									</Button>
								</Grid>
							</ModalBody>

							<ModalFooter></ModalFooter>
						</ModalContent>
					</Modal>
				</Flex>
				<Flex
					direction="column"
					borderRadius="20px"
					bgColor="rgba(0, 3, 9, 0.5)"
					color="rgb(212, 212, 212)"
					mb="50px"
				>
					<Flex justifyContent="space-between" p="10px 20px" fontSize="12px">
						<Text>Receive (estimated):</Text>
					</Flex>
					<Flex justifyContent="space-between">
						<Input
							type="number"
							variant="unstyled"
							p="10px 25px"
							placeholder="0.0"
						/>
					</Flex>
				</Flex>
				<Button
					bg="none"
					color="#ECCC81"
					border="1px solid #ECCC81"
					fontSize="20px"
					h="55px"
					_hover={{
						bg: "#ECCC81",
						color: "#121212",
					}}
					transition="all .3s ease-in-out"
				>
					<Text className={CarterOne.className}>Next</Text>
				</Button>
			</Flex>
		</Flex>
	);
}
