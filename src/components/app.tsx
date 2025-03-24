import { useContext, useEffect, useState } from "react"
import type { Characters } from "../types/api-types";
import { AppContext } from "./state-provider"
import { SampleList } from "./sample-list";
import { sampleUrl } from "../sample-config";

export const App = () => {
  const { state, dispatch } = useContext(AppContext);
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

      {apiData.data && <SampleList characters={apiData} />}
      
      <hr />
      <div>app state:</div>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}