import React from 'react'
import { Avatar, Box, Button,Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import {Link as GatsbyLink} from 'gatsby';


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
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
  return <div>
    <Box mt={4}>
      <Typography variant={section.headerSize}>{section.title}</Typography>
    </Box>
    <Typography variant='body1'>
      {section.content}
      <ul>
        {section.bullets ? section.bullets.map((bullet) => <li>{bullet}</li>) : null}

      </ul>
    </Typography>
    
    {section.subsections ? section.subsections.map((subsection) => <Section {...subsection} headerSize={nextHeaderSize(section.headerSize)} ></Section>) : null}
  </div>;
}

const RecruitmentDetails = (props) => {
  const classes = useStyles();

  return <div>
    <Box display='flex' mt={4}>
      <Typography variant='h4'>
        {props.name}
      </Typography>
      <Spacer></Spacer>
      <Button variant='contained' color='primary' component={GatsbyLink} to=''>Sign up now</Button>
    </Box>
    <Box mt={4}>
      <Typography variant='h5'>The Team</Typography>
    </Box>
    <Box display='flex' flexDirection="row" mt={4}>
      <Spacer/>
        {Object.entries(props.team.people).map(([index, person]) =>
          <Box display="flex" m="auto" flexDirection="column" justify='center' alignItems='center' ml={index === 0 ? 0 : 4}>
            <Avatar className={classes.large} alt={person.name} component={Img} fluid={props.team.query[person.name.replace(' ', '')].childImageSharp.fluid}/>
            <Typography variant='h6'>{person.name}</Typography>
            <Typography variant='overline'>{person.position}</Typography>
          </Box>
        )}
      <Spacer/>
    </Box>
    {props.sections.map(
      (section) => <Section {...section} headerSize='h5'></Section>
    )}
    <Button variant='contained' color='primary' component={GatsbyLink} to=''>Sign up now</Button>
  </div>
}

export default RecruitmentDetails
