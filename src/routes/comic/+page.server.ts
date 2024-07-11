export interface comicInterface {
  safe_title: ''
  img: ''
  alt: ''
  year: 0
  month: 0
  day: number
}
const response = await fetch(
  `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent('m.gladyshev@innopolis.university')}`,
)
const id = await response.text()

const comicResponse = await (
  await fetch(`https://fwd.innopolis.university/api/comic?id=${id.trim()}`)
).json()

const comic: comicInterface = {
  safe_title: comicResponse.safe_title,
  img: comicResponse.img,
  alt: comicResponse.alt,
  year: comicResponse.year,
  month: comicResponse.month,
  day: comicResponse.day,
}

export const load = () => {
  return {
    comic,
  }
}
