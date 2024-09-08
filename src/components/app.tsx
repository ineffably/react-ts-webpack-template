import { useContext, useEffect, useState } from "react"
import type { Characters } from "../types/sample-api-types";
import { AppContext } from "./state-provider"
import { SampleList } from "./sample-list";

export const App = () => {
  const { state, dispatch } = useContext(AppContext);
  const [apiData, setApiData] = useState([] as Characters);

  useEffect(() => {
    const init = async () => {
      const sampleUrl = 'https://api.disneyapi.dev/character'; //'https://potterapi-fedeperin.vercel.app/en/books'
      const response = await fetch(sampleUrl);
      const data = await response.json();
      console.log('data:', data);
      setApiData(data);
      
      // this is where you would dispatch an updated loaded state
      dispatch({ type: 'Loaded', payload: { isLoaded: true } });
    }
    init();
  }, [])

  console.log('App:state:', state);

  return (
    <div>
      <SampleList characters={apiData} />

      <hr />
      <pre>
        app state: <br/>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}