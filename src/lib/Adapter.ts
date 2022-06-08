/* eslint-disable @typescript-eslint/ban-types */
import axios, { AxiosInstance, AxiosResponse } from 'axios'

export interface RequestData {
  header?: object
  params?: object
}

interface Header {
  Authorization?: string
  'Content-Type'?: string
}

class Adapter {
  private http: AxiosInstance

  constructor(private baseUrl = process.env.NEXT_PUBLIC_SPOTIFY_API_URL) {
    this.http = axios.create({ baseURL: this.baseUrl, headers: '' })
  }

  private handleHeader(): Object {
    const accessToken = sessionStorage.getItem('accessToken')
    const header: Header = {}
    if (accessToken) {
      header.Authorization = `Bearer ${accessToken}`
      header['Content-Type'] = 'application/json'
    }
    return header
  }

  async get<T>(
    url: string,
    requestData?: RequestData
  ): Promise<AxiosResponse<T>> {
    const header = {
      ...requestData?.header,
      ...this.handleHeader()
    }
    return this.http.get(url, {
      params: requestData?.params,
      headers: header
    })
  }
}

export default Adapter
