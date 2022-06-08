import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import { theme } from '../src/theme'
import GlobalStyles from '../src/theme/global'
import RootContainer from '../src/feature/Root/RootContainer'
import { PAGES_URL } from '../src/services/Constants'

const MyApp: React.FC<AppPropsType> = ({ Component, pageProps, router }) => {
  const pagesWithoutRootContainer = [PAGES_URL.LOGIN]
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {pagesWithoutRootContainer.includes(router.pathname as PAGES_URL) ? (
        <Component {...pageProps} />
      ) : (
        <RootContainer>
          <Component {...pageProps} />
        </RootContainer>
      )}
    </ThemeProvider>
  )
}

export default MyApp
