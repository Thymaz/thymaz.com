const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProduction ? '/maazelmusic.com' : '',
  publicRuntimeConfig: {
    // used in '/components/Link.js/', for more details go to the component itself
    linkPrefix: isProduction ? '/maazelmusic.com' : ''
  }
};