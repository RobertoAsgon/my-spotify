import React from 'react'
import { MainUserView, TopUserBar } from '../Root/styles'

const LikedSongsContainer: React.FC = () => {
  return (
    <>
      <TopUserBar>LikedSongs top bar content</TopUserBar>
      <MainUserView>
        <h1>LikedSongs content</h1>
      </MainUserView>
    </>
  )
}

export default LikedSongsContainer
