import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import SEO from './seo'
import TopBar from './top-bar'
import Footer from './footer'
import Container from '@material-ui/core/Container'
import { Toolbar } from '@material-ui/core'

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
      'Kumbh Sans',
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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1350,
      xl: 1920,
    },
  },
});

function BaseContainer(props) {
  return <MuiThemeProvider theme = { theme }>
    <SEO title='Home' />
    <TopBar/>
    <Toolbar/>
    <Container fixed>
      {props.children}
    </Container>
    <Footer/>
  </MuiThemeProvider>;
}

export default BaseContainer