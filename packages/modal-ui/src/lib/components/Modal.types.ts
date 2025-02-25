import type { Wallet } from "@near-wallet-selector/core";
import type { ModuleState } from "@near-wallet-selector/core";

export type AlertMessageModalRouteParams = {
  module: ModuleState;
};

export type WalletOptionsModalRouteParams = {
  wallet: Wallet;
};

export type DerivationPathModalRouteParams = {
  walletId: string;
};

export type WalletNotInstalledModalRouteParams = {
  module: ModuleState;
};

export type WalletNetworkChangedModalRouteParams = {
  wallet: Wallet;
};

export type WalletConnectingModalRouteParams = {
  wallet: Wallet;
};

export type WalletConnectedParams = {
  module: ModuleState | undefined;
};

export type ScanQRCodeParams = {
  wallet: Wallet;
  uri: string | undefined;
};

export type AlertMessageModalRoute = {
  name: "AlertMessage";
  params?: AlertMessageModalRouteParams;
};

export type WalletOptionsModalRoute = {
  name: "WalletOptions";
  params?: WalletOptionsModalRouteParams;
};

export type DerivationPathModalRoute = {
  name: "DerivationPath";
  params: DerivationPathModalRouteParams;
};

export type WalletNotInstalledModalRoute = {
  name: "WalletNotInstalled";
  params?: WalletNotInstalledModalRouteParams;
};

export type WalletNetworkChangedModalRoute = {
  name: "WalletNetworkChanged";
  params?: WalletNetworkChangedModalRouteParams;
};

export type WalletConnectingModalRoute = {
  name: "WalletConnecting";
  params?: WalletConnectingModalRouteParams;
};

export type WalletHome = {
  name: "WalletHome";
};

export type WalletConnected = {
  name: "WalletConnected";
  params?: WalletConnectedParams;
};

export type ScanQRCode = {
  name: "ScanQRCode";
  params?: ScanQRCodeParams;
};

export type ModalRoute =
  | AlertMessageModalRoute
  | WalletOptionsModalRoute
  | DerivationPathModalRoute
  | WalletNotInstalledModalRoute
  | WalletNetworkChangedModalRoute
  | WalletConnectingModalRoute
  | WalletHome
  | WalletConnected
  | ScanQRCode;
