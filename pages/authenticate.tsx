import Head from 'next/head'
import React, { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import AuthenticationService from '../src/services/Authentication/AuthenticationService'
import { PAGES_URL } from '../src/services/Constants'

const Authenticate: React.FC = () => {
  const router = useRouter()

  const handleTokenValidation = useCallback(async () => {
    AuthenticationService.setToken()
      .then(() => router.push(PAGES_URL.INDEX))
      .catch(() => router.push(PAGES_URL.LOGIN))
  }, [router])

  useEffect(() => {
    handleTokenValidation()
  }, [handleTokenValidation])

  return (
    <>
      <Head>
        <title>Authenticate - Spotfy Clone App</title>
      </Head>
      <div>
        <h1>Loading...</h1>
      </div>
    </>
  )
}

export default Authenticate
