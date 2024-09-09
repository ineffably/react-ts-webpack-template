import { useEffect, useState } from 'react';
import { Character } from '../types/sample-api-types';

export const CharacterView = ({ id = '' }: { id?: string }) => {
  if (!id || id === '') return <div>Invalid ID</div>;
  const [character, setCharacter] = useState<Character>({});

  const {
    name = '',
    imageUrl = '',
    enemies = [],
    allies = [],
    parkAttractions = [],
    films = [],
    tvShows = [],
    videoGames = []
  } = character;

  useEffect(() => {
    const init = async () => {
      const sampleItemUrl = `https://api.disneyapi.dev/character/${id}`;
      const { data } = await (await fetch(sampleItemUrl)).json() || {};
      // console.log('item data:', data);
      setCharacter(data);
    }
    init();
  }, [id]);

  const ItemList = ({ items = [] }: { items: string[] }) => (items.map(entry => <div>{entry}</div>));

  return (
    <div>
      <h1>Name: {name}</h1>
      <img src={imageUrl} alt={name} />
      <ul>
        {films.length > 0 && <li><b>Films:</b> <ItemList items={films} /></li>}
        {tvShows.length > 0 && <li><b>TV Shows:</b> <ItemList items={tvShows} /></li>}
        {videoGames.length > 0 && <li><b>Video Games:</b> <ItemList items={videoGames} /></li>}
        {parkAttractions.length > 0 && <li><b>Park Attractions:</b> <ItemList items={parkAttractions} /></li>}
        {enemies.length > 0 && <li><b>Enemies:</b> <ItemList items={enemies} /> </li>}
        {allies.length > 0 && <li><b>Allies:</b> <ItemList items={allies} /></li>}
      </ul>

      <hr />
      <h2>Character Data</h2>
      <pre>
        {JSON.stringify(character, null, 2)}
      </pre>
    </div>
  )
}