import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

const useStyles = makeStyles({
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
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
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
      <Button size="small" component={GatsbyLink} color="secondary" to={props.link}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
