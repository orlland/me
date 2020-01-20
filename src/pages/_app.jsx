import App, { Container } from 'next/app'
import Head from 'next/head'

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <style global jsx>{`
          body {
            margin: 0;
          }
        `}</style>

        <Head>
          <title>Orland Ureta | Full Stack JavaScript Developer</title>

          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        </Head>

        <AppBar position='static' style={{ display: 'none' }}>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
              About
            </Typography>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </Container>
    )
  }
}
