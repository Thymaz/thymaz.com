import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Container = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/background.png");
  background-size: cover;
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.secondaryColor};
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + 80px);
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

const Navigation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0px;
  z-index: 20;
  @media only screen and (max-width: 600px) {
    display: ${(props) => (props.hidden ? "none" : "flex")};
    position: absolute;
    flex-direction: column;
    background-color: ${(props) => props.theme.headerColor};
    right: 0;
    top: 0;
    margin-top: 48px;
    transition: opacity 0.5s ease-in-out;
    :before,
    :after {
      display: none;
    }
  }

  :before,
  :after {
    position: absolute;
    content: " ";
    height: 8px;
    width: 16px;
    height: 16px;
    background-color: #333;
    background: url("/icons/cancel.svg");
    transform: rotate(45deg) scale(0.5);
  }
  :before {
    top: -8px;
    left: -64px;
  }
  :after {
    bottom: -8px;
    right: -64px;
  }
`;

const A = styled.a`
  margin: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  color: ${(props) => props.theme.secondaryColor};
  &:after {
    content: "";
    position: absolute;
    left: -10%;
    display: inline-block;
    height: 1em;
    border-bottom: 3px solid;
    margin-top: 10px;
    transition: width 0.25s;
    width: ${(props) => (props.selected ? "120%" : "0")};
  }
  &:hover {
    &:after {
      width: 120%;
    }
  }
`;

const Img = styled.img`
  width: 300px;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`;

const BarsMenu = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    font-size: 30px;
  }
`;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 30);

const Header = ({ refs }) => {
  const navigationList = ["home", "music","about", "shop"];
  const [hidden, setHidden] = useState(true);

  return (
    <Container>
      <Link id="home" href="/">
        <Img src="/logo.png" alt="logo" />
      </Link>
      <BarsMenu onClick={() => setHidden(hidden ? false : true)}>
        <FontAwesomeIcon height="32px" width="32px" icon={faBars} />
      </BarsMenu>
      <Navigation hidden={hidden}>
        {navigationList.map((navigationItem) => (
          <A
            key={navigationItem}
            href={`#${navigationItem}`}
            onClick={() => {
              scrollToRef(refs[navigationItem]);
              setHidden(hidden ? false : true);
            }}
          >
            {navigationItem}.
          </A>
        ))}
      </Navigation>
    </Container>
  );
};

export default Header;
