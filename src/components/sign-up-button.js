import React from 'react'
import { Button } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

const SignUpButton = () => <Button variant='contained' color='secondary' disabled component={GatsbyLink} to=''>Sign up now</Button>;

export default SignUpButton
