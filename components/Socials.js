import Icon from "../components/Icon";
import styled from "styled-components";
import config from "../constants/config";

import {
  faFacebookF,
  faTwitter,
  faSoundcloud,
  faInstagram,
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const Socials = () => {
  const { links } = config;

  return (
    <Navigation>
      <Icon link={links.facebook} icon={faFacebookF}></Icon>
      <Icon link={links.twitter} icon={faTwitter}></Icon>
      <Icon link={links.instagram} icon={faInstagram}></Icon>
      <Icon link={links.soundcloud} icon={faSoundcloud}></Icon>
      <Icon link={links.spotify} icon={faSpotify}></Icon>
      <Icon link={links.appleMusic} icon={faApple}></Icon>
      <Icon link={links.youtube} icon={faYoutube}></Icon>
    </Navigation>
  );
};

export default Socials;
