/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const axios = require('axios');

// Create Axios instance.
const api = axios.create({
  headers: {
    'Wanikani-Revision': '20170710',
    Authorization: 'Bearer ' + process.env.WK_API_TOKEN,
  },
  baseURL: 'https://api.wanikani.com/v2/',
});

// Export the different functions for router.
const getWKStats = async (req, res) => {
  // Get WaniKani User object.
  const user = await api.get('/user');
  const userData = user.data;

  // Get dates in readable form.
  const options = { timeZoneName: 'short' };
  const date_started_str = new Date(userData.data.started_at)
    .toLocaleString('en-AU', options)
    .toUpperCase()
    .replace(/:\d{2} /, ' ');
  const time_updated_str = new Date(userData.data_updated_at)
    .toLocaleString('en-AU', options)
    .toUpperCase()
    .replace(/:\d{2} /, ' ');

  // Get WaniKani Review stats.
  const review = await api.get('/review_statistics');
  const reviewData = review.data.data.pop().data;

  // Get WaniKani latest review.
  const subject = await api.get(`/subjects/${reviewData.subject_id}`);
  const subjectData = subject.data;

  // Combine all necessary data.
  const stats = {
    userData: {
      username: userData.data.username,
      level: userData.data.level,
      profile: userData.data.profile_url,
      date_started: date_started_str,
      time_updated: time_updated_str,
    },
    reviewData,
    subjectData,
  };

  // Send the data back.
  res.send(stats);
};

module.exports = {
  getWKStats,
};
