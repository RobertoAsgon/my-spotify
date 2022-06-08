import Head from 'next/head'
import React from 'react'
import LibraryContainer from '../../../src/feature/Library/LibraryContainer'

const Playlists: React.FC = () => {
  return (
    <>
      <Head>
        <title>Biblioteca - Spotfy Clone App</title>
      </Head>
      <LibraryContainer />
    </>
  )
}

export default Playlists
