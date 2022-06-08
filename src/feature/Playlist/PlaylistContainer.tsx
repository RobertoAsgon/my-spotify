import React from 'react'
import { MainUserView, TopUserBar } from '../Root/styles'

const PlaylistContainer: React.FC = () => {
  return (
    <>
      <TopUserBar>Inicio top bar content</TopUserBar>
      <MainUserView>
        <h1>Inicio main content</h1>
      </MainUserView>
    </>
  )
}

export default PlaylistContainer
