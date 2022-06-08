import Head from 'next/head'
import React from 'react'
import LoginContainer from '../../src/feature/Login/LoginContainer'

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title>Login - Spotfy Clone App</title>
      </Head>
      <LoginContainer />
    </>
  )
}

export default Login
