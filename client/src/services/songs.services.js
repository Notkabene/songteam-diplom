import httpService from './http.service'

const songsEndpoint = 'song/'

const songsService = {
  createSong: async (payload) => {
    const {
      data
    } = await httpService.post(songsEndpoint + payload.songId, payload)
    return data
  },
  removeSong: async (songId) => {
    const {
      data
    } = await httpService.delete(songsEndpoint + songId)
    return data
  },
  get: async () => {
    const req = await httpService.get(songsEndpoint)
    return req.data
  },
  update: async (payload, songId) => {
    const {
      data
    } = await httpService.patch(
      songsEndpoint + songId,
      payload
    )
    return data
  }

}
export default songsService
