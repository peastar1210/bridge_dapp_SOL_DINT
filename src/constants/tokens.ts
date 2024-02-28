import {
	bsc,
	sepolia,
	bscTestnet,
	mainnet,
	polygon,
	avalanche,
	skaleTitanTestnet,
	polygonMumbai,
	avalancheFuji,
} from "wagmi/chains";
import {
	opBnbTestnet,
	opBnbMainnet,
	scroll,
	scrollSepolia,
	tron,
} from "./networks";

export const CGPT = "CGPT";
export const ETH = "ETH";
export const BNB = "BNB";
export const MATIC = "MATIC";
export const AVAX = "AVAX";
export const TRX = "TRX";
export const BUSD = "BUSD";
export const USDC = "USDC";
export const USDT = "USDT";

export const AVAILABLE_PAID_TOKENS: { [chainId: number]: string[] } = {
	[mainnet.id]: [CGPT, ETH, BNB, MATIC, TRX, BUSD, USDC, USDT],
	[bsc.id]: [CGPT, ETH, BNB, MATIC, AVAX, TRX, BUSD, USDC, USDT],
	[polygon.id]: [MATIC, BUSD, USDC, USDT],
	[avalanche.id]: [ETH, BUSD, AVAX, USDC, USDT],
	[sepolia.id]: [ETH],
	[bscTestnet.id]: [BNB],
	[opBnbMainnet.id]: [BNB],
	[opBnbTestnet.id]: [BNB],
	[tron.id]: [TRX, BUSD, USDC, USDT],
	[skaleTitanTestnet.id]: [],
	[scroll.id]: [ETH],
	[scrollSepolia.id]: [ETH],
	[polygonMumbai.id]: [MATIC],
	[avalancheFuji.id]: [AVAX],
};

export const CGPT_TOKEN_ADDR: { [chainId: number]: string } = {
	[mainnet.id]: "0x25931894a86d47441213199621f1f2994e1c39aa",
	[bsc.id]: "0x9840652DC04fb9db2C43853633f0F62BE6f00f98",
};

export const ETH_ADDR: { [chainId: number]: string } = {
	[mainnet.id]: "0x0000000000000000000000000000000000000000",
	[sepolia.id]: "0x0000000000000000000000000000000000000000",
	[bsc.id]: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
	[avalanche.id]: "0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15",
	[scroll.id]: "0x0000000000000000000000000000000000000000",
	[scrollSepolia.id]: "0x0000000000000000000000000000000000000000",
};

export const BNB_ADDR: { [chainId: number]: string } = {
	[mainnet.id]: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
	[bsc.id]: "0x0000000000000000000000000000000000000000",
	[opBnbMainnet.id]: "0x0000000000000000000000000000000000000000",
	[opBnbTestnet.id]: "0x0000000000000000000000000000000000000000",
	// [bscTestnet.id]: '0x2b530F9bc55f86fe692b6B39Bba53b5005225317',
	[bscTestnet.id]: "0x0000000000000000000000000000000000000000",
};

export const MATIC_ADDR: { [chainId: number]: string } = {
	[mainnet.id]: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
	[bsc.id]: "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
	[polygon.id]: "0x0000000000000000000000000000000000000000",
};

export const AVAX_ADDR: { [chainId: number]: string } = {
	[bsc.id]: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
	[avalanche.id]: "0x0000000000000000000000000000000000000000",
	[avalancheFuji.id]: "0x0000000000000000000000000000000000000000",
};

export const TRX_ADDR: { [chainId: number]: string } = {
	[mainnet.id]: "0x50327c6c5a14dcade707abad2e27eb517df87ab5",
	[bsc.id]: "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3",
	[tron.id]: "0000000000000000000000000000000000",
};

export const BUSD_ADDR: { [chainId: number]: string } = {
	[mainnet.id]: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
	[bsc.id]: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
	[polygon.id]: "0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39",
	[avalanche.id]: "0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39",
	[tron.id]: "TMz2SWatiAtZVVcH2ebpsbVtYwUPT9EdjH",
};

export const USDC_ADDR: { [chainId: number]: string } = {
	[mainnet.id]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
	[bsc.id]: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
	[polygon.id]: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
	[avalanche.id]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
	[tron.id]: "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
};

export const USDT_ADDR: { [chainId: number]: string } = {
	[mainnet.id]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
	[bsc.id]: "0x55d398326f99059ff775485246999027b3197955",
	[polygon.id]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
	[avalanche.id]: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
	[tron.id]: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
};

export const TOKEN_ADDR: {
	[token: string]: { [chainId: number]: string };
} = {
	[CGPT]: CGPT_TOKEN_ADDR,
	[ETH]: ETH_ADDR,
	[BNB]: BNB_ADDR,
	[MATIC]: MATIC_ADDR,
	[AVAX]: AVAX_ADDR,
	[TRX]: TRX_ADDR,
	[BUSD]: BUSD_ADDR,
	[USDC]: USDC_ADDR,
	[USDT]: USDT_ADDR,
};
