export type MultipleMangas = Array<{
  mal_id: number
  title: string
  images: {
    jpg: {
      image_url: string
    }
  }
}>

export type SingleManga = {
  title: string
  synopsis: string
  episodes: number
  images: {
    jpg: {
      image_url: string
    }
  }
  trailer: {
    images: {
      large_image_url: string
    }
  }
  status: string
  aired: {
    string: string
  }
  genres: [
    {
      mal_id: number
      name: string
    }
  ]
}
