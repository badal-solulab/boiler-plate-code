import React from "react";
import WalletButton from "../WalletButton/WalletButton";
import { FORMATIC } from "../../assets/images";

const Fortmatic = ({ title, onFortmaticClick }) => {
  return (
    <div>
      <WalletButton
        title={title}
        logo={FORMATIC}
        onConnectClick={onFortmaticClick}
      />
    </div>
  );
};

export default Fortmatic;
