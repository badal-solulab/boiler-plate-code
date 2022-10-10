import React, { useEffect, useRef, useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import { walletconnect } from "../../../utils/connectors";
import "./connectwallet.css";
import { useEagerConnect, useInactiveListener } from "../../../hooks";
import { GRANDCRU } from "../../../assets/images";

const ConnectWallet = () => {
  const [activatingConnector, setActivatingConnector] = useState();

  const { account, active, activate, deactivate, chainId, connector } =
    useWeb3React();
  const onboarding = useRef();

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

  // For Metamask OnBoarding
  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);
  console.log(account, chainId);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account && account.length > 0) {
        onboarding.current.stopOnboarding();
      }
    }
  }, [account]);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const onConnectWithWalletConnectClick = () => {
    if (connector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined;
    }
    setActivatingConnector(walletconnect);
    activate(walletconnect);
  };
  useEffect(() => {
    if (account) {
      sessionStorage.setItem("connectedWallet", "walletconnect");
    }
  }, [account]);

  return (
    <div className="wallet_wrapper">
      <div className="grandcru_wrapper">
        <div>
          <img alt="grandcru" className="grnadcru_img" src={GRANDCRU} />
        </div>
        <div className="grandcru_content">
          <p className="yearVal">2022</p>
          <p className="Grand_CruTitle primary-text font-32">Grand Cru</p>
          <p className="Grand_CruDescription">
            The Grand Cru 2022 Collection will feature wines from Napa,
            Bordeaux, and Burgundy ranginig from the years 1955-1999
          </p>
          {!active && !localStorage.getItem("shouldEagerConnect") ? (
            <button
              className="primary-btn"
              onClick={onConnectWithWalletConnectClick}
            >
              Connect Wallet
            </button>
          ) : null}
          {/* <button
            className="primary-btn"
            onClick={onConnectWithWalletConnectClick}
          >
            Connect Wallet
          </button> */}

          {/* <button
            onClick={() => {
              deactivate();
              sessionStorage.setItem("connectedWallet", "");
              localStorage.clear();
            }}
          >
            abcd
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
