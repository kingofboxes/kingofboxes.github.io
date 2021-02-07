/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

// Create Axios instance.
const api = axios.create({
  headers: {
    'Wanikani-Revision': '20170710',
    Authorization: 'Bearer ' + process.env.WK_API_TOKEN,
  },
});

// Calculates WaniKani stats.
const getWKStats = async () => {
  // Get WaniKani User object.
  const user = await api.get('https://api.wanikani.com/v2/user');
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

  /* The following was heavily taken from wkstats.com:
    https://www.wkstats.com/js/calc_stats-1.0.6.js */

  // Get the total number of things learnt.
  const aData = [];
  let assignment = await api.get('https://api.wanikani.com/v2/assignments');

  // WaniKani limits to 500 results per API call, so we have to do multiple fetches and merge into one array.
  while (assignment.data.pages.next_url !== null) {
    aData.push.apply(aData, assignment.data.data);
    assignment = await api.get(assignment.data.pages.next_url);
  }
  aData.push.apply(aData, assignment.data.data);

  const items = {
    radical: 0,
    kanji: 0,
    vocabulary: 0,
  };

  aData.forEach((a) => {
    items[a.data.subject_type] += 1;
  });

  // Get WaniKani Review stats.
  const rData = [];
  let review = await api.get('https://api.wanikani.com/v2/review_statistics');

  // WaniKani limits to 500 results per API call, so we have to do multiple fetches and merge into one array.
  while (review.data.pages.next_url !== null) {
    rData.push.apply(rData, review.data.data);
    review = await api.get(review.data.pages.next_url);
  }
  rData.push.apply(rData, review.data.data);

  const review_counts = {
    total_readings: 0,
    total_meanings: 0,
    total_reviews: 0,
    correct_readings: 0,
    correct_meanings: 0,
    correct_reviews: 0,
    incorrect_readings: 0,
    incorrect_meanings: 0,
    incorrect_reviews: 0,
    radical: {
      correct_readings: 0,
      incorrect_readings: 0,
      correct_meanings: 0,
      incorrect_meanings: 0,
    },
    kanji: {
      correct_readings: 0,
      incorrect_readings: 0,
      correct_meanings: 0,
      incorrect_meanings: 0,
    },
    vocabulary: {
      correct_readings: 0,
      incorrect_readings: 0,
      correct_meanings: 0,
      incorrect_meanings: 0,
    },
  };

  // Calculate correct/incorrect information.
  rData.forEach((r) => {
    // Radicials don't have a "reading".
    if (r.data.subject_type === 'radical') {
      r.data.reading_correct = 0;
      r.data.reading_imcorrect = 0;
    }

    // For radical/kanji/vocab data (separated).
    review_counts[r.data.subject_type].correct_readings += r.data.reading_correct;
    review_counts[r.data.subject_type].incorrect_readings += r.data.reading_incorrect;
    review_counts[r.data.subject_type].correct_meanings += r.data.meaning_correct;
    review_counts[r.data.subject_type].incorrect_meanings += r.data.meaning_incorrect;

    // For overall data (aggregated).
    review_counts['total_readings'] += r.data.reading_correct + r.data.reading_incorrect;
    review_counts['total_meanings'] += r.data.meaning_correct + r.data.meaning_incorrect;
    review_counts['total_reviews'] +=
      r.data.reading_correct +
      r.data.reading_incorrect +
      r.data.meaning_correct +
      r.data.meaning_incorrect;

    review_counts['correct_readings'] += r.data.reading_correct;
    review_counts['correct_meanings'] += r.data.meaning_correct;
    review_counts['correct_reviews'] += r.data.reading_correct + r.data.meaning_correct;

    review_counts['incorrect_readings'] += r.data.reading_incorrect;
    review_counts['incorrect_meanings'] += r.data.meaning_incorrect;
    review_counts['incorrect_reviews'] += r.data.reading_incorrect + r.data.meaning_incorrect;
  });

  // Calculate accuracy.
  const accuracy = {
    readings: 0,
    meanings: 0,
    total: 0,
    radical: { readings: null, meanings: 0, total: 0 },
    kanji: { readings: 0, meanings: 0, total: 0 },
    vocabulary: { readings: 0, meanings: 0, total: 0 },
  };

  accuracy.readings = review_counts.correct_readings / review_counts.total_readings;
  accuracy.meanings = review_counts.correct_meanings / review_counts.total_meanings;
  accuracy.total = review_counts.correct_reviews / review_counts.total_reviews;
  accuracy.radical.meanings =
    review_counts.radical.correct_meanings /
    (review_counts.radical.correct_meanings + review_counts.radical.incorrect_meanings);
  accuracy.radical.total =
    review_counts.radical.correct_meanings /
    (review_counts.radical.correct_meanings + review_counts.radical.incorrect_meanings);
  accuracy.kanji.readings =
    review_counts.kanji.correct_readings /
    (review_counts.kanji.correct_readings + review_counts.kanji.incorrect_readings);
  accuracy.kanji.meanings =
    review_counts.kanji.correct_meanings /
    (review_counts.kanji.correct_meanings + review_counts.kanji.incorrect_meanings);
  accuracy.kanji.total =
    (review_counts.kanji.correct_readings + review_counts.kanji.correct_meanings) /
    (review_counts.kanji.correct_readings +
      review_counts.kanji.correct_meanings +
      review_counts.kanji.incorrect_readings +
      review_counts.kanji.incorrect_meanings);
  accuracy.vocabulary.readings =
    review_counts.vocabulary.correct_readings /
    (review_counts.vocabulary.correct_readings + review_counts.vocabulary.incorrect_readings);
  accuracy.vocabulary.meanings =
    review_counts.vocabulary.correct_meanings /
    (review_counts.vocabulary.correct_meanings + review_counts.vocabulary.incorrect_meanings);
  accuracy.vocabulary.total =
    (review_counts.vocabulary.correct_readings + review_counts.vocabulary.correct_meanings) /
    (review_counts.vocabulary.correct_readings +
      review_counts.vocabulary.correct_meanings +
      review_counts.vocabulary.incorrect_readings +
      review_counts.vocabulary.incorrect_meanings);

  // Combine all necessary data.
  const stats = {
    user: {
      username: userData.data.username,
      level: userData.data.level,
      profile: userData.data.profile_url,
      date_started: date_started_str,
      time_updated: time_updated_str,
    },
    items,
    review: {
      total_readings: review_counts.total_readings,
      total_meanings: review_counts.total_meanings,
      total_reviews: review_counts.total_reviews,
      correct_readings: review_counts.correct_readings,
      correct_meanings: review_counts.correct_meanings,
      correct_reviews: review_counts.correct_reviews,
      incorrect_readings: review_counts.incorrect_readings,
      incorrect_meanings: review_counts.incorrect_meanings,
      incorrect_reviews: review_counts.incorrect_reviews,
    },
    accuracy,
  };
  return stats;
};

// Attempt to cache the WK stats (API calls takes ages).
let wkCache;
const refreshWKCache = async () => {
  wkCache = await getWKStats();
};
refreshWKCache();
setInterval(refreshWKCache, 3600000);

// Router functions.
const sendWKStats = async (req, res) => {
  res.send(wkCache);
};

// Attempt to cache the MM stats.
let mmCache;
const refreshMMCache = () => {
  const data = fs.readFileSync('./data/kingofboxes_overview.json');
  mmCache = JSON.parse(data);
};
refreshMMCache();
setInterval(refreshMMCache, 3600000);

const sendMMStats = async (req, res) => {
  res.send(mmCache);
};

module.exports = {
  sendWKStats,
  sendMMStats,
};

