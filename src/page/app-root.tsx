import { App } from './app'
import { CharacterView } from '../components/character/character-view';
import { StateProvider } from './state-provider'
import { Route } from "wouter";

export const AppRoot = () => {
  return (
    <StateProvider>
      <Route path="/" >
        <App />
      </Route>

      {/* replace with your own view */}
      <Route path="/characters/:id" >
        {(params: any) => <CharacterView id={params.id} />}
      </Route>
    </StateProvider>
  )
}