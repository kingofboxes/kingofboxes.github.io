import React from 'react';
import Link from 'next/link';

import { List } from 'semantic-ui-react';
import { Img } from 'react-optimized-image';

import Me from '../../../assets/me.png';
import styles from '../../styling/Portfolio.module.css';

// Education & Skills
export const PortfolioEducationSkills: React.FC = () => {
  return (
    <>
      <h2>Education {'&'} Skills</h2>
      <List divided inverted relaxed>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>
            <List.Header as="p">
              Studied Mechanical Engineering (Honours) / Computer Science @ UNSW Sydney.
            </List.Header>
            <List.Description>
              Graduated in 2020 with a high distinction grade (WAM: 86.842).
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>
            <List.Header as="p">
              Comfortable with a wide range of languages, technologies and frameworks.
            </List.Header>
            <List.Description>
              Including C, Java, JavaScript, Node.js, TypeScript, Python, PostgreSQL (and other SQL
              variants), MongoDB, Docker, React, Next.js, and many more!
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

// Personal Projects
export const PortfolioPersonalProjects: React.FC = () => {
  return (
    <>
      <h2>Personal Projects</h2>
      <List divided inverted relaxed>
        <List.Item>
          <List.Icon name="terminal" />
          <List.Content>
            <List.Header as="a">
              <a href="https://github.com/kingofboxes/kingofboxes.github.io">
                kingofboxes.github.io
              </a>
            </List.Header>
            <List.Description>
              A website which acts as my portfolio, and a testament to my abilities to use web
              development frameworks and write code to make a website. See the {''}
              <Link href="/about">About</Link> page to see what technology stack was used to make
              this website!
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="terminal" />
          <List.Content>
            <List.Header as="a">
              <a href="https://github.com/kingofboxes/reminders-js">RemindersJS Discord Bot</a>
            </List.Header>
            <List.Description>
              A containerised Discord bot which allows you to set reminders by messaging the bot.
              Uses PostgreSQL to store the reminders. Written in JavaScript.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="terminal" />
          <List.Content>
            <List.Header as="a">
              <a href="https://github.com/kingofboxes/maibot-discord">Maimai DX Discord Bot</a>
            </List.Header>
            <List.Description>
              A Discord bot used to keep track of in-game statistics for the game Maimai DX. All
              data is scraped using BeautifulSoup4 and stored in a MongoDB database. Written in
              Python.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="terminal" />
          <List.Content>
            <List.Header as="a">
              <a href="https://github.com/kingofboxes/kobot-discord">Kobot Discord Bot</a>
            </List.Header>
            <List.Description>
              My first Discord bot. Contains many different features for my own private use. Written
              in Python.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

// University Projects
export const PortfolioUniversityProjects: React.FC = () => {
  return (
    <>
      <h2>University Projects</h2>
      <List divided inverted relaxed>
        <List.Item>
          <List.Icon name="student" />
          <List.Content>
            <List.Header as="p">
              Online Ordering Platform for a Burger Shop @ COMP1531 (Software Engineering
              Fundamentals)
            </List.Header>
            <List.Description>
              A full-stack group project which involved creating a platform for customers to order
              burgers online with a persistent database. Written in Python, Flask and Jinja2.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="student" />
          <List.Content>
            <List.Header as="p">
              Dungeon Exploration Game @ COMP2511 (O-O Design {'&'} Programming)
            </List.Header>
            <List.Description>
              A group project which involved creating a 2D dungeon crawler game using
              object-oriented programming and design patterns. Written in Java.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="student" />
          <List.Content>
            <List.Header as="p">
              TCP Chat Client @ COMP3331 (Computer Networks {'&'} Applications)
            </List.Header>
            <List.Description>
              An individual project which involved creating both the server and client for a chat
              client where users could talk to each other via the terminal. Written in Python, with
              heavy emphasis on socket programming.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="student" />
          <List.Content>
            <List.Header as="p">Pedestrian Classifier @ COMP9517 (Computer Vision)</List.Header>
            <List.Description>
              A group project which involved tracking the number of pedestrians on-screen when
              provided with a video file. Written in Python, but heavily leveraging the library
              functions of OpenCV.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="student" />
          <List.Content>
            <List.Header as="p">
              IMDb Replacement Website @ COMP3900 (Computer Science Project)
            </List.Header>
            <List.Description>
              A full-stack group project which involved creating a &quot;better&quot; version of
              IMDb for my capstone course. Frontend was written in React using the Material UI
              component library, and the backend was written in Node.js and hosted using Express.
              The project used a RESTful API for communication between the backend and frontend. The
              database used was MongoDB.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="student" />
          <List.Content>
            <List.Header as="p">
              Instagram / Kahoot @ COMP6080 (Web Front-end Programming)
            </List.Header>
            <List.Description>
              An individual / group project which involved creating essentially a copy of the two
              mentioned sites. Instagram (known as QuickPic in the project) involved using only
              vanilla JavaScript, where as Kahoot (known as BigBrain in the project) involved using
              only the React framework and libraries. Backends were supplied in both projects.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

// University Projects
export const PortfolioEyecatch: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Img src={Me} sizes={[128]} alt="picture-of-justin" className={styles.image} />
        <span className={styles.name}>
          <a href="https://github.com/kingofboxes">Justin Liang</a>
        </span>
      </div>
    </>
  );
};

module.exports = {
  PortfolioEducationSkills,
  PortfolioPersonalProjects,
  PortfolioUniversityProjects,
  PortfolioEyecatch,
};
