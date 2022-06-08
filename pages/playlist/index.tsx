import Head from 'next/head'
import React from 'react'
import PlaylistContainer from '../../src/feature/Playlist/PlaylistContainer'

const Playlist: React.FC = () => {
  return (
    <>
      <Head>
        <title>Playlist - Spotfy Clone App</title>
      </Head>
      <PlaylistContainer />
    </>
  )
}

export default Playlist
