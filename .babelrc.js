// Configure babel settings.
const env = require('./env-config');
module.exports = {
  presets: ['next/babel'],
  plugins: ['react-optimized-image/plugin', ['transform-define', env]],
};
