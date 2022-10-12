import { useWeb3React } from "@web3-react/core";
import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions";
import "./header.css";

const Header = () => {
  const { active, account, deactivate } = useWeb3React();
  const dispatch = useDispatch();
  const getAccount = localStorage.getItem("shouldEagerConnect");
  const TrimWallet = (wallet) => {
    const newAddress = wallet
      ? `${wallet.slice(0, 4)}...${wallet.slice(wallet.length - 4, wallet.length)}`
      : wallet;
    return newAddress;
  };
  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand className="Nav_brand">
            <Link to="/" className="anchor-link">
              <p className="Navbar_length">Indulgence Traded</p>
              <p className="Navbar_length">Napa Valley x NY Bordeaux</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="soigner_title">
              <Nav.Link href="#features" className="flex40">
                SOIGNER
              </Nav.Link>
              <div className="flex60" id="header_link">
                <Link
                  className={active ? " nav-link" : "Nav_left_space nav-link"}
                  to="/collections"
                >
                  Collection
                </Link>

                <Link to="/whitepaper" className="whitepaper-link nav-link">
                  WhitePaper
                </Link>
                {active || getAccount ? (
                  // <Link
                  //   onClick={() => {
                  //     deactivate();
                  //     dispatch(logout())
                  //     window.location.reload()
                  //     sessionStorage.setItem("connectedWallet", "");
                  //     localStorage.clear();
                  //   }}
                  // >
                  //   Logout
                  // </Link>
                  <Nav.Link eventKey={2}>
                    <DropdownButton
                      className="header-dropdown"
                      id="dropdown-basic-button"
                      title={<i className="fa-solid fa-user"></i>}
                    >
                      <Dropdown.Item>{TrimWallet(account)}</Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          deactivate();
                          dispatch(logout());
                          window.location.reload();
                          sessionStorage.setItem("connectedWallet", "");
                          localStorage.clear();
                        }}
                      >
                        Disconnect
                      </Dropdown.Item>
                    </DropdownButton>
                  </Nav.Link>
                ) : null}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
