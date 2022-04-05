const SEO = {
  description:
    "Behind Maazel lies a Paris based genre bending/multi-instrumentalist producer and DJ, mainly focusing on making emotional electronic music.",
  titleTemplate: "Thymaz | Official Website",
  additionalMetaTags: "",
  openGraph: {
    // what's displayed on social networks when sharing the website
    title: "Thymaz | Official Website",
    type: "website",
    url: "https://maazelmusic.com/",
    site_name: "Thymaz",
    locale: "en_US",
    images: [
      {
        url: "http://thymaz.com/Press_Pic1.png",
        width: 800,
        height: 600,
        alt: "Thymaz",
      },
    ],
  },
  twitter: {
    handle: "@thymazoff",
    site: "@thymaz",
    cardType: "summary_large_image",
  },
};

const theme = {
  fontFamily: "Montserrat, sans-serif",
  linkColor: "#000000",
  primaryColor: "#000000",
  primaryGradient:
    "linear-gradient(104.29deg, #3e4390 -13.54%, #7B588D 353.63%)",
  secondaryColor: "#F2F2F2",
  backgroundColor: "#fffef7",
  headerColor: "#090909",
  footerColor: "#090909",
};

const config = {
  headerSize: "70px",
  footerSize: "70px",
  artistName: "Thymaz",
  tagline: "Creating emotional music",
  actionButtonLabel: "Listen Now",
  actionButtonUrl: "https://linktr.ee/thymaz",
  backgroundUrl: "background.jpg",
  bioPicture1: "bioPic1.png",
  bioPicture2: "bioPic2.jpg",
  logoUrl: "logo.svg",
  reversedContactMail: "moc.liamg@cisumzamyht",
  htmlTitle: "Thymaz",
  websiteUrl: "https://thymaz.com/",
  SEO: SEO,
  theme: theme,
  links: {
    facebook: "https://www.facebook.com/thymazoff",
    twitter: "https://twitter.com/thymazoff",
    youtube: "https://www.youtube.com/channel/UCgrx0pyWluVXzOy45yWRJTw",
    instagram: "https://www.instagram.com/thymazoff/",
    spotify:
      "https://open.spotify.com/artist/4w5LgUT6bfJnNq6wSFbND7?si=qUQb_vdlSB6XhBog780Hyg",
    appleMusic: "https://music.apple.com/artist/maazel/1148087232",
    soundcloud: "https://soundcloud.com/thymaz",
  },
};

export default config;
