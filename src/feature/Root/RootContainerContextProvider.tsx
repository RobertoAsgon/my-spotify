import React, { createContext, useState } from 'react'
import { usePlaylist } from '../../hooks/usePlaylists'
import { PlaylistsResponse } from '../../services/Playlists/PlaylistsModel'

interface IRootContainerProps {
  valueFromContext: string
  setValueFromContext: React.Dispatch<React.SetStateAction<string>>
  dataPlaylist: PlaylistsResponse[]
}

const RootContainerContext = createContext<Partial<IRootContainerProps>>({})

const RootContainerProvider: React.FC = ({ children }) => {
  const [valueFromContext, setValueFromContext] = useState('123test')
  const { dataPlaylist } = usePlaylist()

  return (
    <RootContainerContext.Provider
      value={{ valueFromContext, setValueFromContext, dataPlaylist }}
    >
      {children}
    </RootContainerContext.Provider>
  )
}

export { RootContainerProvider, RootContainerContext }
