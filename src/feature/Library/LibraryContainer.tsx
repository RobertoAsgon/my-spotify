import React, { useContext } from 'react'
import { RootContainerContext } from '../Root/RootContainerContextProvider'
import { MainUserView, TopUserBar } from '../Root/styles'

const LibraryContainer: React.FC = () => {
  const { dataPlaylist } = useContext(RootContainerContext)

  return (
    <>
      <TopUserBar>Playlists Library top bar</TopUserBar>
      <MainUserView>
        <h1>Playlists</h1>
        {dataPlaylist &&
          dataPlaylist?.map((list) => (
            <>
              <p key={list.id}>{list?.name}</p>
            </>
          ))}
      </MainUserView>
    </>
  )
}

export default LibraryContainer
