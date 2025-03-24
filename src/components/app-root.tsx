import { App } from './app'
import { CharacterView } from './character-view';
import { StateProvider } from './state-provider'
import { Route } from "wouter";

export const AppRoot = () => {
  return (
    <StateProvider>
      <Route path="/" >
        <App />
      </Route>
      <Route path="/characters/:id" >
        {(params: any) => <CharacterView id={params.id} />}
      </Route>
    </StateProvider>
  )
}