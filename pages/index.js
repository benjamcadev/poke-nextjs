
import Image from 'next/image';
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';
import Coffee from '../public/coffee.jpg';
import Link from 'next/link';

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x => x).pop() // estamos esplitiando la url con los / para poder sacar el numero de id, el filter elimina los espacios vacios del split y pop saca el ultimo elemento
  return (
    <li><Link href={`pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}

{/* <Image src='/coffee.jpg'  width={400} height={400}/> */}
export default function Pokemones({ pokemones }) {
  
  return (
    <div>
      <p>Pokemones</p>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </ul>
    </div>
   
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return{
    props: { pokemones: data.results }
  }
}