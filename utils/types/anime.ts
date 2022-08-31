export type SingleAnime = {
  title: string
  synopsis: string
}

export type TopAnimes = Array<{
  mal_id: number
  title: string
  images: {
    jpg: {
      image_url: string
    }
  }
  aired: {
    string_date: string
  }
  episodes: number
}>
