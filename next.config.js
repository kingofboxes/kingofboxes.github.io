/* eslint-disable @typescript-eslint/no-var-requires */

/* dotenv config */
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

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
  assetPrefix: !debug ? '/website-project/' : '',
  exportPathMap: () => ({
    '/': { page: '/' },
    '/wanikani': { page: '/wanikani' },
  }),

  /* webpack */
  webpack: (config) => {
    /* set plugins and add dotenv*/
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

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
