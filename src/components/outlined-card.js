import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActions, CardActionArea, CardContent, createStyles } from '@material-ui/core';
import Img from 'gatsby-image';

const useStyles = makeStyles((theme) => 
  createStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={props.link}>
        {props.image ? <Img fluid={props.image.childImageSharp.fluid} /> : null}
        <CardContent>
          <Typography variant='h5'>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.body}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
