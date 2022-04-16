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
      <Navigation>
        <Icon link={links.instagram} icon={faInstagram}></Icon>
        <Icon link={links.spotify} icon={faSpotify}></Icon>
        <Icon link={links.facebook} icon={faFacebookF}></Icon>
        <Icon link={links.twitter} icon={faTwitter}></Icon>
        <Icon link={links.soundcloud} icon={faSoundcloud}></Icon>
        <Icon link={links.appleMusic} icon={faApple}></Icon>
        <Icon link={links.youtube} icon={faYoutube}></Icon>
      </Navigation>
    </Container>
  );
};

export default Footer;
