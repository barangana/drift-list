//TODO: Fix genre

export const SearchAnime = async (
  name: string,
  genre: string,
  format: string
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/anime?q=${name}&type=${format}`
  )
  const animeInfo = await response.json()
  console.log(animeInfo)
  return animeInfo
}
