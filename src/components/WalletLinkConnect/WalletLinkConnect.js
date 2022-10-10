import React from "react";

import WalletButton from "../WalletButton/WalletButton";
import { WALLET_LINK_SVG } from "../../assets/images";

const WalletLinkConnect = ({ onWalletLinkConnectClick }) => {
  return (
    <div>
      <WalletButton
        title="Open in Coinbase Wallet"
        logo={WALLET_LINK_SVG}
        onConnectClick={onWalletLinkConnectClick}
      />
    </div>
  );
};

export default WalletLinkConnect;
