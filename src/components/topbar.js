import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SmallLogo from '../components/smalllogo'
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'white',
  },
  spacer: {
    flexGrow: 1,
  },
  links: {
    '& > *': {
      marginRight: theme.spacing(4),
    }
  },
  computingClub: {
    marginLeft: '8px',
    fontFamily: 'Memphis LT Std',
    color: '#27378f',
    lineHeight: 1,
    '& *': {
      color: '#27378f',
      textDecoration: 'none',
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function TopBar({props}) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <ElevationScroll {...props}>
      <AppBar position='sticky' className={classes.root}>
        <Toolbar className={classes.appBar}>
          <GatsbyLink to="/">
            <SmallLogo></SmallLogo>
          </GatsbyLink>
          <div className={classes.spacer}>
            <Hidden mdDown>
              <Typography variant='h6' className={classes.computingClub}>
                <GatsbyLink to='/'>NUS Students' Computing Club</GatsbyLink>
              </Typography>
            </Hidden>
            <Hidden xsDown lgUp>
              <Typography variant='h6' className={classes.computingClub}>
                <GatsbyLink to='/'>
                  NUS Students'<br/>
                  Computing Club
                </GatsbyLink>
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography variant='subtitle1' className={classes.computingClub}>
                <GatsbyLink to='/'>
                  NUS Students'<br/>
                  Computing Club
                </GatsbyLink>
              </Typography>
            </Hidden>
          </div>
          <Hidden mdDown>
            <Typography style={{ color: 'white' }} className={classes.links}>
              <Link href='#' onClick={preventDefault}>
                About
              </Link>
              <Link href='#' onClick={preventDefault}>
                People
              </Link>
              <Link href='#' onClick={preventDefault}>
                Services
              </Link>
              <Link href='#' onClick={preventDefault}>
                Sports
              </Link>
              <Link href='#' onClick={preventDefault}>
                Guides
              </Link>
              <Link target='_blank' href='https://freshmen.nuscomputing.com/' onClick={preventDefault}>
                FOP
              </Link>
              <Link href='https://www.flickr.com/photos/137141057@N04/albums' onClick={preventDefault}>
                Photos/Media
              </Link>
            </Typography>
          </Hidden>
          <Button variant='contained' color='primary' component={GatsbyLink} to='/recruitment'>Recruitment</Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>);
}
    
export default TopBar