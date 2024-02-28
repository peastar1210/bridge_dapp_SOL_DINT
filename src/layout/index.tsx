"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
	http,
	createConfig,
	WagmiProvider,
	Connector,
	useConnect,
	useAccount,
	useDisconnect,
	useEnsAvatar,
	useEnsName,
} from "wagmi";
import { base, mainnet, optimism } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

import Header from "./Header";
import Footer from "./Footer";
import { Button, Flex } from "@chakra-ui/react";

const WalletOptions = () => {
	const { connectors, connect } = useConnect();

	return (
		<Flex direction="column">
			{connectors.map((connector) => (
				<Button key={connector.uid} onClick={() => connect({ connector })}>
					{connector.name}
				</Button>
			))}
		</Flex>
	);
};

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_CLOUD_PROJECT_ID!;

const config = createConfig({
	chains: [mainnet, base],
	connectors: [
		metaMask(),
		walletConnect({
			projectId: "3fcc6bba6f1de962d911bb5b5c3dba68",
		}),
	],
	transports: {
		[mainnet.id]: http(),
		[base.id]: http(),
	},
});

const queryClient = new QueryClient();

export const Account = () => {
	const { address } = useAccount();
	const { disconnect } = useDisconnect();
	const { data: ensName } = useEnsName({ address });
	const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

	return (
		<div>
			{ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
			{address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
			<button onClick={() => disconnect()}>Disconnect</button>
		</div>
	);
};

export const ConnectWallet = () => {
	const { isConnected } = useAccount();
	if (isConnected) return <Account />;
	return <WalletOptions />;
};

export default function Layout({ children }: PropsWithChildren<{}>) {
	return (
		<Flex
			direction="column"
			className="min-h-screen"
			background="linear-gradient(rgb(23, 23, 26) 10%, rgb(33, 34, 41) 50%, rgb(23, 23, 26) 70%, rgb(10, 10, 10) 85%, rgb(0, 0, 0) 100%)"
		>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<Header />
				</QueryClientProvider>
			</WagmiProvider>

			{children}

			<Footer />
		</Flex>
	);
}
