import { useContext, useEffect, useState } from "react"
import type { Characters } from "../types/sample-api-types";
import { AppContext } from "./state-provider"
import { SampleList } from "./sample-list";

const sampleUrl = 'https://api.disneyapi.dev/character';

export const App = () => {
  const { state, dispatch } = useContext(AppContext);
  const [apiData, setApiData] = useState([] as Characters);

  useEffect(() => {
    const init = async () => {
      const response = await fetch(sampleUrl);
      const json = await response.json();
      // console.log('json:', json);
      setApiData(json);
      
      // this is where you would dispatch an updated loaded state
      dispatch({ type: 'Loaded', payload: { isLoaded: true } });
    }
    init();
  }, [])

  // console.log('App:state:', state);

  return (
    <div>
      <h1>App Goes Here</h1>
      <SampleList characters={apiData} />

      <hr />
      <pre>
        app state: <br/>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}