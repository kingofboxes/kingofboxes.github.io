/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withOptimizedImages = require('next-optimized-images');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  images: {
    // for example
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
  },

  exportPathMap: () => ({
    '/': { page: '/' },
    '/wanikani': { page: '/wanikani' },
  }),

  assetPrefix: !debug ? '/website-project/' : '',

  /* webpack */
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    return config;
  },
});
