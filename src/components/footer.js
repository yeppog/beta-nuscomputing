import React from "react"
import { Box, Container, Grid, Hidden, IconButton, Icon, Link, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WhiteLogo from './white-logo'

const useStyles = makeStyles((theme) => ({
  footer: {
      
    background: '#27378f',
    color: 'white',
  },
}));

const Copyright = () =>
  <Typography variant='caption'>
    <br/>
    Copyright © NUS Students' Computing Club<br/>
    Page designed by <Link target='_blank' href='https://github.com/jeffsieu' style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>Jeff Sieu</Link>
  </Typography>;

const Footer = ({ siteTitle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  return <footer className={classes.footer}>
    <Container fixed maxWidth={lgDown ? 'md' : 'lg'}>
      <Box mt={4} p={4}></Box>
      <Grid container spacing={8}>
        <Grid item xs={12} lg={6} xl={4}>
          <WhiteLogo></WhiteLogo>
          <IconButton aria-label="facebook" target='_blank' href='https://www.facebook.com/nuscomputing'>
            <Icon className="fab fa-facebook" style={{ color: 'white' }} ></Icon>
          </IconButton>
          <IconButton aria-label="instagram" target='_blank' href='https://www.instagram.com/NUSComputingClub'>
            <Icon className="fab fa-instagram" style={{ color: 'white' }} ></Icon>
          </IconButton>
          <IconButton aria-label="telegram" target='_blank' href='https://t.me/nuscomputingclub'>
            <Icon className="fab fa-telegram" style={{ color: 'white' }} ></Icon>
          </IconButton>
          <IconButton aria-label="youtube" target='_blank' href='https://www.youtube.com/channel/UCVd-qsSFF328UUqcNxudy0w'>
            <Icon className="fab fa-youtube" style={{ color: 'white' }} ></Icon>
          </IconButton>
          <IconButton aria-label="github" target='_blank' href='https://github.com/NUSComputingDev'>
            <Icon className="fab fa-github" style={{ color: 'white' }} ></Icon>
          </IconButton>
          <IconButton aria-label="email" href='mailto:connect@nuscomputing.com'>
            <Icon className="fas fa-envelope" style={{ color: 'white' }} ></Icon>
          </IconButton>
          <Hidden smDown>
            <Copyright></Copyright>
          </Hidden>
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <Typography variant='h6'>
            Our History
          </Typography>
          <Typography variant='body1'>
            Established when NUS School of Computing gained independence as a separate faculty in 1998, the NUS Students’ Computing Club is the official faculty club and sole union representative of all undergraduates in NUS School of Computing. The club has since been taking care of the student life in NUS School of Computing by organising various events and activities to promote campus vibrancy. We safeguard the interest of our undergraduates, ensure their voices are heard, provide welfare, and form the bridge between our students and the school.
          </Typography>
        </Grid>
        <Hidden mdDown xlUp>
          <Grid item md={6}></Grid>
        </Hidden>
        <Grid item sm={12} md={6} xl={4}>
          <Hidden only={['md', 'xl']}>
            <Box mt={-4}>
              <Typography variant='h6'>
                Vision
              </Typography>
              <Typography variant='body1'>
                NUS Students’ Computing Club serves to continually support our faculty, to build close-knitted relationships among Computing Club members past and present and drive the charge for campus vibrancy.
              </Typography>
            </Box>
          </Hidden>
          <Hidden only={['sm', 'xs', 'lg']}>
            <Typography variant='h6'>
              Vision
            </Typography>
            <Typography variant='body1'>
              NUS Students’ Computing Club serves to continually support our faculty, to build close-knitted relationships among Computing Club members past and present and drive the charge for campus vibrancy.
            </Typography>
          </Hidden>
          <Box mt={4}>
            <Typography variant='h6'>
              Mission
            </Typography>
            <Typography variant='body1'>
              NUS Students’ Computing Club’s mission is to lead the strive for excellence and to continually advance, for the needs and welfare of our fellow students.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Hidden mdUp>
              <Copyright></Copyright>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  </footer>
} 

export default Footer
