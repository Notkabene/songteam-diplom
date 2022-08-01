import httpService from './http.service'

const songsEndpoint = 'song/'

const songsService = {
  get: async () => {
    const req = await httpService.get(songsEndpoint)
    return req.data
  }
}
export default songsService
