import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import PlaylistsManager from '../feature/Library/PlaylistManager'
import { PAGES_URL } from '../services/Constants'
import { PlaylistsResponse } from '../services/Playlists/PlaylistsModel'

interface usePlaylistResponse {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  dataPlaylist: PlaylistsResponse[]
  setDataPlaylist: React.Dispatch<React.SetStateAction<PlaylistsResponse[]>>
}

const usePlaylist = (): usePlaylistResponse => {
  const [dataPlaylist, setDataPlaylist] = useState<PlaylistsResponse[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getUserPlaylists = async () => {
      try {
        setLoading(true)
        const userPlaylists = await PlaylistsManager.getUserPlaylists()
        setDataPlaylist(userPlaylists)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        router.push(PAGES_URL.LOGIN)
      }
    }
    getUserPlaylists()
  }, [])

  return {
    dataPlaylist,
    setDataPlaylist,
    loading,
    setLoading
  }
}

export { usePlaylist }
