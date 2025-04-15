import { useContext, useEffect, useState } from "react"
import type { Characters } from "../types/api-types";
import { AppContext } from "./state-provider"
import { CharacterList } from "../components/character/character-list";
import { sampleUrl } from "../library/sample-config";
import { AppStateJsonView } from '../components/app-state-json-view';

export const App = () => {
  const { dispatch } = useContext(AppContext);
  const [apiData, setApiData] = useState({} as Characters);

  useEffect(() => {
    const init = async () => {
      const response = await fetch(sampleUrl);
      const json = await response.json();
      setApiData(json);

      // this is where you would dispatch an updated loaded state
      dispatch({ type: 'Loaded', payload: { isLoaded: true } });
    }
    init();
  }, [])

  return (
    <div>
      <h2>Your application goes here</h2>

      {/* replace with your own view */}
      {apiData.data && <CharacterList characters={apiData} />}

      <hr />

      {/* app state */}
      <div>App State:</div>
      <AppStateJsonView />

    </div>
  )
}