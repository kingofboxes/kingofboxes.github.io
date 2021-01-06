/* eslint-disable @typescript-eslint/no-var-requires */

/* next-optimized-images config */
const withOptimizedImages = require('next-optimized-images');

/* GitHub pages deployment config */
const debug = process.env.NODE_ENV !== 'production';

module.exports = withOptimizedImages({
  /* next-optimized-images */
  images: {
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
  },

  /* Next.js build settings */
  assetPrefix: !debug ? '.' : '',

  /* webpack */
  webpack: (config) => {
    /* set rules */
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  },
});
