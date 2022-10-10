import React from "react";
import { WALLET_CONNECT } from "../../assets/images";

import WalletButton from "../WalletButton/WalletButton";

const WalletConnect = ({ onWalletConnectClick }) => {
  return (
    <WalletButton
      title="Wallet Connect"
      logo={WALLET_CONNECT}
      onConnectClick={onWalletConnectClick}
    />
  );
};

export default WalletConnect;
