import React, { useState } from 'react'
import './Login.css'
import Card from '../card/Card'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container } from '../styles/container.styled';
import { H1 } from '../styles/container.styled';
import { Subtitle } from '../styles/container.styled';
import { Form } from '../styles/container.styled';

const Login = () => {


  return (
    <Container>
      <Card>
        <H1>Login</H1>
        <Subtitle>Please Log in Using your username and password</Subtitle>
        <Form >
          <div className='input_container'>
            <input type='text' placeholder='username'  />
         
            <input type='text' placeholder='password'  />
         
          </div>
          <input type='submit' value='Log in' className='login_button'/>
        </Form>
        <div className='link_container'>
          <a href='' className='small'>
            Forget password
          </a>
        </div>
        <div className='icons'>
          <GoogleIcon className='icon'/>
          <FacebookIcon className='icon'/>
          <TwitterIcon className='icon'/>
        </div>
      </Card>
    </Container>
  )
}

export default Login
