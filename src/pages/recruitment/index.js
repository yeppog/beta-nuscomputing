import React from 'react'

import OutlinedCard from '../../components/card'

import Container from '@material-ui/core/Container'
import BaseContainer from '../../components/base-container';
import { Box, Typography, Grid } from '@material-ui/core';

const data = [
  {
    title: 'Community Service',
    body: 'To foster a community spirit driven to help others in need',
    link: '/recruitment/community-service',
  },
  {
    title: 'FOP',
    body: 'Join us as project directors and committee members!',
    link: '/recruitment/fop',
  },
  {
    title: 'Marketing',
    body: 'Let’s bring SoC merch to greater heights and let everyone know of our SoC pride!',
    link: '/recruitment/marketing',
  },
  {
    title: 'Publicity',
    body: 'Join us as a photographer, videographer or a graphic designer',
    link: '/recruitment/publicity',
  },
  {
    title: 'Student Relations',
    body: 'Join us to create fun and build relationships',
    link: '/recruitment/publicity',
  },
  {
    title: 'Sports',
    body: 'Join Sports Committee today to make an impact!',
    link: '/recruitment/sports',
  },
  {
    title: 'Academic Liaison',
    body: 'To be a Learner every day. To realise our Collective Potential.',
    link: '/recruitment/academic-liaison',
  },
  {
    title: 'Welfare',
    body: 'Have some welfare',
    link: '/recruitment/welfare',
  },
]

function RecruitmentPage() {
  return <BaseContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mt={4}>
              <Typography variant='h3'>23rd Management Commitee Recruitment</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper, nisi quis pharetra congue, massa velit iaculis justo, non porta odio sapien nec dui. Nulla efficitur est ut pretium ultricies. Proin gravida nunc ut lorem vestibulum, eu malesuada mi pharetra. Nunc condimentum leo eget sollicitudin gravida. Quisque quis efficitur tortor. Duis quis posuere eros. Nulla facilisi. Mauris tempus sollicitudin dolor at posuere. Sed augue ante, efficitur a velit et, lobortis facilisis velit. Phasellus aliquam, ante eu lacinia molestie, erat augue fermentum mauris, porta ornare est enim hendrerit neque. Morbi mi lorem, scelerisque sit amet elit eu, feugiat suscipit ante.</Typography>
        </Grid>
        {data.map((item) =>
          <Grid item xs={12} md={6} key={item.title}>
            <OutlinedCard title={item.title} body={item.body} link={item.link}></OutlinedCard>
            {/* <Paper className={classes.paper}>xs=12</Paper> */}
          </Grid>
        )}
      </Grid>
      <h4></h4>
      
      <div style={{height: '10000px'}}> 
      </div>
  </BaseContainer>;
}

export default RecruitmentPage
