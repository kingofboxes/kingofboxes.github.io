import React from 'react';
import { WKProfile } from '../../../types';
import styles from '../../styling/WaniKani.module.css';
import { Img } from 'react-optimized-image';
import Avatar from '../../../assets/avatar.png';

import { Table } from 'semantic-ui-react';

interface WKProfileInterface {
  data: WKProfile;
}

export const WaniKaniProfile: React.FC<WKProfileInterface> = ({ data }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Img src={Avatar} sizes={[128]} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.progress}>
          <a href={data.user.profile}>{data.user.username}</a>
          <p>Level: {data.user.level}</p>
        </div>
        <div className={styles.summary}>
          <p>Date Started: {data.user.date_started}</p>
          <p>Last Updated: {data.user.time_updated}</p>
          <p>
            Items learnt: {data.items.radical} radicals, {data.items.kanji} kanji,{' '}
            {data.items.vocabulary} vocabulary.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export const WaniKaniReviews: React.FC<WKProfileInterface> = ({ data }) => {
  return (
    <>
      <span className={styles.descriptors}>Overall Performance:</span>
      <Table celled textAlign="center" color="black" inverted compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Reading</Table.HeaderCell>
            <Table.HeaderCell>Meaning</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Total Reviews:</Table.Cell>
            <Table.Cell>{data.review.total_readings}</Table.Cell>
            <Table.Cell>{data.review.total_meanings}</Table.Cell>
            <Table.Cell>{data.review.total_reviews}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Correct:</Table.Cell>
            <Table.Cell>{data.review.correct_readings}</Table.Cell>
            <Table.Cell>{data.review.correct_meanings}</Table.Cell>
            <Table.Cell>{data.review.correct_reviews}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Incorrect:</Table.Cell>
            <Table.Cell>{data.review.incorrect_readings}</Table.Cell>
            <Table.Cell>{data.review.incorrect_meanings}</Table.Cell>
            <Table.Cell>{data.review.incorrect_reviews}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Accuracy:</Table.Cell>
            <Table.Cell>{(data.accuracy.readings * 100).toFixed(2)}%</Table.Cell>
            <Table.Cell>{(data.accuracy.meanings * 100).toFixed(2)}%</Table.Cell>
            <Table.Cell>{(data.accuracy.total * 100).toFixed(2)}%</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export const WaniKaniAccuracy: React.FC<WKProfileInterface> = ({ data }) => {
  return (
    <>
      <span className={styles.descriptors}>Overall Accuracy:</span>
      <Table celled textAlign="center" inverted color="black" compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Reading</Table.HeaderCell>
            <Table.HeaderCell>Meaning</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Radicals:</Table.Cell>
            <Table.Cell>---</Table.Cell>
            <Table.Cell>{(data.accuracy.radical.meanings * 100).toFixed(2)}%</Table.Cell>
            <Table.Cell>{(data.accuracy.radical.total * 100).toFixed(2)}%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Kanji:</Table.Cell>
            <Table.Cell>{(data.accuracy.kanji.readings * 100).toFixed(2)}%</Table.Cell>
            <Table.Cell>{(data.accuracy.kanji.meanings * 100).toFixed(2)}%</Table.Cell>
            <Table.Cell>{(data.accuracy.kanji.total * 100).toFixed(2)}%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Vocabulary:</Table.Cell>
            <Table.Cell>{(data.accuracy.vocabulary.readings * 100).toFixed(2)}%</Table.Cell>
            <Table.Cell>{(data.accuracy.vocabulary.meanings * 100).toFixed(2)}%</Table.Cell>
            <Table.Cell>{(data.accuracy.vocabulary.total * 100).toFixed(2)}%</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

module.exports = {
  WaniKaniProfile,
  WaniKaniReviews,
  WaniKaniAccuracy,
};
