type FetchUserPlaylistsResponse = {
  href: string
  items: PlaylistsResponse[]
}

type PlaylistsResponse = {
  id: string
  collaborative: boolean
  description: string
  images: ImagesResponse[]
  name: string
}

type ImagesResponse = {
  height: number
  url: string
  width: number
}

export type { FetchUserPlaylistsResponse, PlaylistsResponse, ImagesResponse }
