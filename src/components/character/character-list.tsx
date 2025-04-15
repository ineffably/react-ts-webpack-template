import { Characters } from "../../types/api-types";
import { Link } from "wouter";

export const CharacterList = ({ characters }: { characters: Characters}) => {
  if(!characters.data) return null;

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.data?.map((character) => (
          <li key={character._id}><Link to={`/characters/${character._id}`}>{character.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}