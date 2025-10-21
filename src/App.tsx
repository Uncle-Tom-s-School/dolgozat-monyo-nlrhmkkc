import BeerCard, {type BeerCardType} from "./components/BeerCard"
import { useEffect, useState } from "react"

const App = () => {

  const [beer, setBeer] = useState<BeerCardType[]>([])
  
  useEffect(()=>{
    fetch("/data.json")
    .then(res =>res.json())
    .then(data=>setBeer(data))
  }, [])
  return (
    <div className="beerCardWrapper">
      {beer.map(beer => <div className='beerCard'>
        <img src={beer.image}/>
        <b>{beer.name} {beer.abv} {beer.volume}</b>
        <p>{beer.price} Ft</p>
        <p className={beer.available? "van" : "nincs"}>{beer.available ? "Raktáron" : "Nincs raktáron"}</p>
    </div>)}<BeerCard />
    </div>
  )
}

export default App