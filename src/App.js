import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import WrongNetworkModal from "./components/WrongNetworkModal";
import { useEagerConnect, useInactiveListener } from "./hooks";
import "./App.css";
import { useDispatch,useSelector } from "react-redux";
import { setAuthentication } from "./store/actions";

const App = () => {
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);
  const {connected} = useSelector(state=>state.dummyReducer)
  const dispatch = useDispatch()
  const { active, chainId, account } = useWeb3React();
  console.log("acgive", active, "account", account,connected);
  useEffect(() => {
    if(account) dispatch(setAuthentication(account))
  }, [account]);

  let mainContent = (
    <>
      <Route
        exact
        path="/"
        component={React.lazy(() => import("./views/Dashboard/Dashboard"))}
      />
      <Route
        exact
        path="/faqs"
        component={React.lazy(() => import("./views/FAQs/FAQs"))}
      />
      <Route
        exact
        path="/whitepaper"
        component={React.lazy(() => import("./views/WhitePaper/WhitePaper"))} 
      />
      <Route
        exact
        path="/collections"
        component={React.lazy(() => import("./views/Collections/Collection"))}
      />
      {localStorage.getItem("userData") === null && <Redirect to="/" />}
    </>
  );

  if (active || localStorage.getItem("shouldEagerConnect")) {
    localStorage.setItem("shouldEagerConnect", true);

    mainContent = (
      <>
        <Route
          path="/"
          component={React.lazy(() =>
            import("./views/MainContainer/MainContainer")
          )}
        />
      </>
    );
  }

  const onChangeNetworkClick = async () => {
    // Metamask adds Ropsten chain by default, so no need to check wether chain is added or not
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x3" }],
    });
  };

  return (
    <React.Suspense fallback={<Loader />}>
      {/* <WrongNetworkModal
        show={chainId !== 3 && active}
        onChangeNetworkClick={onChangeNetworkClick}
      /> */}
      <BrowserRouter>
        <Switch>{mainContent}</Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
