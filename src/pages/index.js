import React from 'react'
import BaseContainer from '../components/base-container';
import { Typography } from '@material-ui/core'

function IndexPage() {
  return <BaseContainer title='Home'>
    <Typography variant='h2'>Welcome.</Typography>
  </BaseContainer>;
}

export default IndexPage
