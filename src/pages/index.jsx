import React from 'react';

import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function HomePage() {
  return (
    <Container
      maxWidth='lg'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '10vh 32px'
      }}
    >
      <Typography variant='h4'>
        I'm Orland Ureta, a Full Stack JavaScript Developer with more than 10 years of professional experience.
      </Typography>
      <br />
      <Typography variant='h5'>
        I want to help turn your great ideas into modern software applications
        as fast as efficient as possible while observing high standards for usability and maintainability.
      </Typography>
      <br />
      <Typography variant='h5'>
        I can develop applications that run on Web, Mobile, and Desktop platforms
        using proven technologies like JavaScript, React, React Native, GraphQL, Meteor, Firebase, and Strapi
        hosted on Amazon Web Services and Digital Ocean.
      </Typography>
    </Container>
  );
}
