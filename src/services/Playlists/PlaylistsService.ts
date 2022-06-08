import Adapter from '../../lib/Adapter'
import { FetchUserPlaylistsResponse } from './PlaylistsModel'

export default class PlaylistsService {
  constructor(private http: Adapter) {}

  async getList(): Promise<FetchUserPlaylistsResponse> {
    try {
      const { data } = await this.http.get<FetchUserPlaylistsResponse>(
        '/me/playlists'
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}
