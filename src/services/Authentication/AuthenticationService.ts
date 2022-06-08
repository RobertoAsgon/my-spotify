export default class AuthenticationService {
  public static async setToken(): Promise<void> {
    const hash = window.location.hash.match(new RegExp('access_token=([^&]*)'))
    if (hash?.length) {
      const accessToken = hash[1]
      sessionStorage.setItem('accessToken', accessToken)
    }
  }
}
