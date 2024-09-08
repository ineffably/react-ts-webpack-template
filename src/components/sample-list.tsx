import { Link } from "react-router-dom";
import { Characters } from "../types/sample-api-types";

export const SampleList = ({ characters }: { characters: Characters}) => {
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.data?.map((character) => (
          <li key={character._id}><Link to={`/characters/${character._id}`}  >{character.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}