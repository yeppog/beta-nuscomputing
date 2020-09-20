import React from 'react'
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import SEO from './seo'
import TopBar from './top-bar'
import Footer from './footer'
import Container from '@material-ui/core/Container'

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#bec3dd',
        main: '#27378f',
        dark: '#172372'
     },
     secondary: {
       main: '#f44336',
     },
  },
  typography: { 
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),
    body1: {
      fontFamily: [
        'Raleway',
        'sans-serif',
      ].join(','),
    },
    body2: {
      fontFamily: [
        'Raleway',
        'sans-serif',
      ].join(','),
    },
  }
});

function BaseContainer(props) {
  return <MuiThemeProvider theme = { theme }>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
    <SEO title='Home' />
    <TopBar/>
    <Container maxWidth='lg'>
      {props.children}
    </Container>
    <Footer/>
  </MuiThemeProvider>;
}

export default BaseContainer