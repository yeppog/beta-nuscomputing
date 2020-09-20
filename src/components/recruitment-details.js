import React from 'react'
import { Avatar, Box, Button, Divider, Hidden, Typography } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import SignUpButton from './sign-up-button'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Spacer = () => <div style={{flex: 1}}></div>;

const headerSizes = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
];

function nextHeaderSize(headerSize) {
  return headerSizes[Math.min(headerSizes.indexOf(headerSize) + 1, headerSizes.length - 1)];
}

const Section = (section) => {
  if (section.divider)
    return <Box mt={4}>
      <Divider></Divider>
    </Box>
  return <div>
    <Box mt={4}>
      <Typography variant={section.headerSize}>{section.title}</Typography>
    </Box>
    <Typography variant='body1'>
      {section.content}
      {
        section.bullets ?
          <Box mt={2}>
            <ul>
              {section.bullets.map((bullet) => <li>{bullet}</li>)}
            </ul>
          </Box>
          : null
      }
      
    </Typography>
    
    {section.subsections ? section.subsections.map((subsection) => <Section {...subsection} headerSize={nextHeaderSize(section.headerSize)} ></Section>) : null}
  </div>;
}

const RecruitmentDetails = (props) => {
  const classes = useStyles();
  return <div>
    <Button
        color="primary"
        className={classes.button}
        size="large"
        startIcon={<ArrowBack />}
        component={GatsbyLink} to='/recruitment'>Back to recruitment page</Button>
    <Box display='flex' mt={4}>
      <Typography variant='h3'>
        {props.name}
      </Typography>
      <Spacer/>
      <Hidden mdDown>
        <div>

          <SignUpButton/>
        </div>
      </Hidden>
    </Box>
    <Box mt={4}>
      <Typography variant='h4'>The Team</Typography>
    </Box>
    <Box display='flex' flexDirection="row" mt={4}>
      <Spacer/>
        {props.team.people.map((person, index) =>
          <Box display="flex" m="auto" flexDirection="column" justify='center' alignItems='center' ml={index == 0 ? 0 : 4}>
            <Avatar className={classes.large} alt={person.name} component={Img} fluid={props.team.query[person.name.replace(/ /g, '')].childImageSharp.fluid}/>
            <Box mt={1}>
              <Typography variant='h6'>{person.name}</Typography>
            </Box>
            <Typography variant='overline' style={{lineHeight: '1'}}>{person.position}</Typography>
          </Box>
        )}
      <Spacer/>
    </Box>
    {props.sections.map(
      (section) => <Section {...section} headerSize='h4'></Section>
    )}
    <Box mt={4} mb={4}>
      <SignUpButton/>
    </Box>
  </div>
}

export default RecruitmentDetails
