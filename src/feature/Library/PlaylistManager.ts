import Adapter from '../../lib/Adapter'
import { PlaylistsResponse } from '../../services/Playlists/PlaylistsModel'
import PlaylistsService from '../../services/Playlists/PlaylistsService'

const PlaylistsConnection = (): PlaylistsService =>
  new PlaylistsService(new Adapter())

export default class PlaylistsManager {
  public static async getUserPlaylists(): Promise<PlaylistsResponse[]> {
    const playlists = await PlaylistsConnection().getList()
    return Promise.resolve(playlists.items)
  }
}
