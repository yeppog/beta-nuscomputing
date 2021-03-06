import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import SEO from './seo'
import TopBar from './top-bar'
import Footer from './footer'
import { Box, Container, Toolbar, useMediaQuery } from '@material-ui/core'

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
      md: 1000,
      lg: 1350,
      xl: 1920,
    },
  },
});

function InnerContainer(props){
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  return <Container fixed maxWidth={lgDown ? 'md' : 'lg'} {...props}></Container>;
}

function BaseContainer(props) {
  return <MuiThemeProvider theme = { theme }>
    <SEO {...props} />
    <TopBar/>
    <Toolbar/>
    <Box py={8}>
      {
        props.disableWrapper
          ? props.children
          : <InnerContainer>
              {props.children}
            </InnerContainer>
      }
    </Box>
    <Footer/>
  </MuiThemeProvider>;
}

export { BaseContainer as default, InnerContainer }