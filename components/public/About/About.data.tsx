import React from 'react';

import { List } from 'semantic-ui-react';

// Tools & Libraries
export const AboutToolsLibraries: React.FC = () => {
  return (
    <>
      <h2>Tools {'&'} Libraries</h2>
      <List divided inverted relaxed>
        <List.Item>
          <List.Icon name="setting" />
          <List.Content>
            <List.Header as="p">Next.js</List.Header>
            <List.Description>
              A React framework with image optimization, file-system routing, fast refresh,
              Typescript support and built-in CSS support (and much more).
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="setting" />
          <List.Content>
            <List.Header as="p">Semantic UI React</List.Header>
            <List.Description>
              A React component library with pre-made components for a clean look.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="setting" />
          <List.Content>
            <List.Header as="p">Typescript</List.Header>
            <List.Description>
              Written in Typescript (and Node.js for the the backend) for type safety.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="setting" />
          <List.Content>
            <List.Header as="p">Husky</List.Header>
            <List.Description>
              To lint, do type-checks, and deploy before commit changes to the repository.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="setting" />
          <List.Content>
            <List.Header as="p">Next Optimized Images</List.Header>
            <List.Description>
              Image optimzation module for statically built Next.js apps. Reduces size of images.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="setting" />
          <List.Content>
            <List.Header as="p">Express</List.Header>
            <List.Description>Used to host the backend server for this website.</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="setting" />
          <List.Content>
            <List.Header as="p">ESLint {'&'} Prettier </List.Header>
            <List.Description>
              Quality-of-life modules (linter and code formatter) to ensure consistency in coding
              style and following good practices.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

// Deployment
export const AboutDeployment: React.FC = () => {
  return (
    <>
      <h2>Deployment</h2>
      <List divided inverted relaxed>
        <List.Item>
          <List.Icon name="globe" />
          <List.Content>
            <List.Header as="p">GitHub Pages</List.Header>
            <List.Description>
              This website is deployed for free on GitHub Pages under my own GitHub user account
              using the &apos;gh-pages&apos; package.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="globe" />
          <List.Content>
            <List.Header as="p">BinaryLane</List.Header>
            <List.Description>
              An Australian cloud-based VPS used to host the backend server.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="globe" />
          <List.Content>
            <List.Header as="p">Let&apos;s Encrypt</List.Header>
            <List.Description>
              A non-profit CA which offers free SSL/TLS certificates, used to create a HTTPS backend
              server so that the frontend can communicate with the backend through the same secure
              protocol.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

module.exports = {
  AboutToolsLibraries,
  AboutDeployment,
};
