import { ReactNode, useContext, createContext } from "react";
import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";
import { useDisclosure, useToast } from "@chakra-ui/react";

interface IWalletContext {
	// isTron: boolean;
	// address?: string;
	// isConnected: boolean;
	// isDisconnected: boolean;
	// isConnecting: boolean;
	// // chain?: Chain & {
	// //   unsupported?: boolean
	// // }
	// // chains: Chain[]
	// chain?: any;
	// chains: any[];
	// connect: (wallet: string, isTron: boolean) => void;
	// disconnect: () => void;

	// switchNetwork: ((chainId_?: number | undefined) => void) | undefined;
	// switchNetworkError: Error | null;
	// switchNetworkLoading: boolean;

	isOpenWallet: boolean;
	onOpenWallet: () => void;
	onCloseWallet: () => void;
}

interface IWalletProvider {
	children: ReactNode;
}

const walletContextDefaultValues: IWalletContext = {
	// isTron: false,
	// address: undefined,
	// isConnected: false,
	// isDisconnected: true,
	// isConnecting: false,
	// chain: undefined,
	// chains: [],
	// connect: (_: string, __: boolean) => {},
	// disconnect: () => {},

	// switchNetwork: undefined,
	// switchNetworkError: null,
	// switchNetworkLoading: false,

	isOpenWallet: false,
	onOpenWallet: () => {},
	onCloseWallet: () => {},
};

const WalletContext = createContext<IWalletContext>(walletContextDefaultValues);

export function WalletProvider({ children }: IWalletProvider) {
	const {
		isOpen: isOpenWallet,
		onOpen: onOpenWallet,
		onClose: onCloseWallet,
	} = useDisclosure();
	const value = { isOpenWallet, onOpenWallet, onCloseWallet };

	return (
		<WalletContext.Provider value={value}>{children}</WalletContext.Provider>
	);
}

export function useWallet() {
	return useContext(WalletContext);
}
