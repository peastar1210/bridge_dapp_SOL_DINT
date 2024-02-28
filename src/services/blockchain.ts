import { readContract } from "@wagmi/core";
import {
	mainnet,
	sepolia,
	arbitrum,
	bsc,
	optimism,
	polygon,
	bscTestnet,
	avalanche,
	skaleTitanTestnet,
	polygonMumbai,
	avalancheFuji,
} from "wagmi/chains";

import {
	AVAX,
	AVAX_ADDR,
	BNB,
	BNB_ADDR,
	BUSD,
	BUSD_ADDR,
	CGPT,
	CGPT_TOKEN_ADDR,
	ETH,
	ETH_ADDR,
	MATIC,
	MATIC_ADDR,
	TRX,
	TRX_ADDR,
	USDC,
	USDC_ADDR,
	USDT,
	USDT_ADDR,
} from "@/constants/tokens";
import {
	opBnbTestnet,
	opBnbMainnet,
	scroll,
	scrollSepolia,
	tron,
} from "@/constants/networks";

export const getChainName = (chainId: number) => {
	switch (chainId) {
		case mainnet.id:
		case sepolia.id:
			return "ethereum-chain";
		case bsc.id:
			return "bsc-mainnet-chain";
		case bscTestnet.id:
			return "bsc-testnet-chain";
		case polygon.id:
		case polygonMumbai.id:
			return "polygon-chain";
		case avalanche.id:
		case avalancheFuji.id:
			return "avalanche-chain";
		case optimism.id:
			return "optimism-chain";
		case arbitrum.id:
			return "arbitrum-chain";
		case opBnbMainnet.id:
		case opBnbTestnet.id:
			return "opbnb-chain";
		case tron.id:
			return "tron-chain";
		case skaleTitanTestnet.id:
			return "skale-chain";
		case scroll.id:
			return "scroll-chain";
		case scrollSepolia.id:
			return "scroll-sepolia-chain";
		default:
			return "ethereum-chain";
	}
};

export const getBlockExplorerUrl = (chainId: number) => {
	switch (chainId) {
		case mainnet.id:
			return mainnet.blockExplorers.default.url;
		case sepolia.id:
			return sepolia.blockExplorers.default.url;
		case bsc.id:
			return bsc.blockExplorers.default.url;
		case bscTestnet.id:
			return bscTestnet.blockExplorers.default.url;
		case polygon.id:
			return polygon.blockExplorers.default.url;
		case avalanche.id:
			return avalanche.blockExplorers.default.url;
		case optimism.id:
			return optimism.blockExplorers.default.url;
		case arbitrum.id:
			return arbitrum.blockExplorers.default.url;
		case opBnbMainnet.id:
			return opBnbMainnet.blockExplorers.default.url;
		case opBnbTestnet.id:
			return opBnbTestnet.blockExplorers.default.url;
		case tron.id:
			return "https://tronscan.org/#";
		case skaleTitanTestnet.id:
			return skaleTitanTestnet.blockExplorers.default.url;
		case scroll.id:
			return scroll.blockExplorers.default.url;
		case scrollSepolia.id:
			return scrollSepolia.blockExplorers.default.url;
		default:
			return mainnet.blockExplorers.default.url;
	}
};

export const getBlockExplorerName = (chainId: number) => {
	switch (chainId) {
		case mainnet.id:
			return mainnet.blockExplorers.default.name;
		case sepolia.id:
			return sepolia.blockExplorers.default.name;
		case bsc.id:
			return bsc.blockExplorers.default.name;
		case bscTestnet.id:
			return bscTestnet.blockExplorers.default.name;
		case polygon.id:
			return polygon.blockExplorers.default.name;
		case avalanche.id:
			return avalanche.blockExplorers.default.name;
		case optimism.id:
			return optimism.blockExplorers.default.name;
		case arbitrum.id:
			return arbitrum.blockExplorers.default.name;
		case opBnbMainnet.id:
			return opBnbMainnet.blockExplorers.default.name;
		case opBnbTestnet.id:
			return opBnbTestnet.blockExplorers.default.name;
		case tron.id:
			return "TronScan";
		case skaleTitanTestnet.id:
			return skaleTitanTestnet.blockExplorers.default.name;
		case scroll.id:
			return scroll.blockExplorers.default.name;
		case scrollSepolia.id:
			return scrollSepolia.blockExplorers.default.name;
		default:
			return mainnet.blockExplorers.default.name;
	}
};

export const getTokenAddress = (
	token: string | undefined,
	chainId: number
): string | undefined => {
	switch (token) {
		case CGPT:
			return CGPT_TOKEN_ADDR[chainId];
		case ETH:
			return ETH_ADDR[chainId];
		case BNB:
			return BNB_ADDR[chainId];
		case MATIC:
			return MATIC_ADDR[chainId];
		case AVAX:
			return AVAX_ADDR[chainId];
		case TRX:
			return TRX_ADDR[chainId];
		case BUSD:
			return BUSD_ADDR[chainId];
		case USDC:
			return USDC_ADDR[chainId];
		case USDT:
			return USDT_ADDR[chainId];
	}
};

export function ellipseAddress(
	address: string = "",
	postwidth: number = 4,
	prewidth?: number
): string {
	return `${address.slice(
		0,
		prewidth ? prewidth : postwidth + 2
	)}...${address.slice(-postwidth)}`;
}

export function getContractType(chainId: number) {
	switch (chainId) {
		case mainnet.id:
		case sepolia.id:
		case polygon.id:
		case avalanche.id:
		case optimism.id:
		case arbitrum.id:
		case skaleTitanTestnet.id:
		case scroll.id:
		case scrollSepolia.id:
			return "ERC-721";
		case bsc.id:
		case bscTestnet.id:
		case opBnbMainnet.id:
		case opBnbTestnet.id:
			return "BEP-721";
		case tron.id:
			return "TRC-721";
		default:
			return "ERC-721";
	}
}
