import React from "react";

import WalletButton from "../WalletButton/WalletButton";

import { METAMASK } from "../../assets/images";

const MetamaskButton = ({ title, onMetamaskClick }) => {
  return (
    <div>
      <WalletButton
        title={title}
        logo={METAMASK}
        onConnectClick={onMetamaskClick}
      />
    </div>
  );
};

export default MetamaskButton;
