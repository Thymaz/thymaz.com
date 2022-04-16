import { useRouter } from "next/router";
import styled from "styled-components";

import Socials from "../components/Socials";
import config from "../constants/config";

const Container = styled.div`
  height: ${config.footerSize};
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.primaryColor};
  margin: 32px 0;
`;
const Copyright = styled.span``;

const Footer = () => {
  return (
    <Container>
      <Copyright>© 2022 THYMAZ</Copyright>
      <Socials />
    </Container>
  );
};

export default Footer;
