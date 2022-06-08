import Head from 'next/head'
import React from 'react'
import SearchContainer from '../../src/feature/Search/SearchContainer'

const Search: React.FC = () => {
  return (
    <>
      <Head>
        <title>Início - Spotfy Clone App</title>
      </Head>
      <SearchContainer />
    </>
  )
}

export default Search
