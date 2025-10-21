type BeerCardType = {
    image: string,
    name: string,
    abv: string,
    volume: string,
    price: number,
    available: string

  }

const BeerCard = () => {
  return (
    <div className='beerCard'>
    </div>
  )
}

export default BeerCard
export type { BeerCardType }