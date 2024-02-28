export const opBnbMainnet = {
	id: 204,
	name: "opBNB Mainnet",
	network: "opbnb",
	iconUrl: "https://cryptocurrencyliveprices.com/img/bnb-binance-coin.png",
	nativeCurrency: {
		name: "BNB",
		decimals: 18,
		symbol: "BNB",
	},
	rpcUrls: {
		default: {
			http: ["https://opbnb-mainnet-rpc.bnbchain.org"],
		},
		public: {
			http: ["https://opbnb-mainnet-rpc.bnbchain.org"],
		},
	},
	blockExplorers: {
		default: {
			name: "opBNB Scan",
			url: "https://opbnbscan.com",
		},
	},
};

export const opBnbTestnet = {
	id: 5611,
	name: "opBNB Testnet",
	network: "opbnb",
	iconUrl: "https://cryptocurrencyliveprices.com/img/bnb-binance-coin.png",
	nativeCurrency: {
		name: "tcBNB",
		decimals: 18,
		symbol: "tcBNB",
	},
	rpcUrls: {
		default: {
			http: ["https://opbnb-testnet-rpc.bnbchain.org"],
		},
		public: {
			http: ["https://opbnb-testnet-rpc.bnbchain.org"],
		},
	},
	blockExplorers: {
		default: {
			name: "opBNB Scan",
			url: "https://testnet.opbnbscan.com",
		},
	},
};

export const scroll = {
	id: 534352,
	name: "Scroll",
	network: "scroll",
	nativeCurrency: {
		name: "Ether",
		symbol: "ETH",
		decimals: 18,
	},
	rpcUrls: {
		default: {
			http: ["https://rpc.scroll.io/"],
		},
		public: {
			http: ["https://rpc.scroll.io/"],
		},
	},
	blockExplorers: {
		default: {
			name: "Scrollscan",
			url: "https://scrollscan.com",
		},
	},
};

export const scrollSepolia = {
	id: 534351,
	name: "Scroll Sepolia",
	network: "scroll-sepolia",
	nativeCurrency: {
		name: "Ether",
		symbol: "ETH",
		decimals: 18,
	},
	rpcUrls: {
		default: {
			http: ["https://sepolia-rpc.scroll.io"],
		},
		public: {
			http: ["https://sepolia-rpc.scroll.io"],
		},
	},
	blockExplorers: {
		default: {
			name: "Scrollscan",
			url: "https://sepolia.scrollscan.com/",
		},
	},
	testnet: true,
};

// Fake tron chain
export const tron = {
	id: 0,
	name: "Tron",
	network: "tron",
	nativeCurrency: {
		decimals: 6,
		name: "TRON",
		symbol: "TRX",
	},
	rpcUrls: {
		default: {
			http: ["https://api.trongrid.io"],
		},
		public: {
			http: ["https://api.trongrid.io"],
		},
	},
};
