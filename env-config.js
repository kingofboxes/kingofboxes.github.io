// Configure the path to use for deployment to GH Pages.
const prod = process.env.NODE_ENV === 'production';
module.exports = {
  'process.env.BACKEND_URL': prod ? '' : '',
};
